import {useState,useEffect} from'react';
import InputSearch from '../components/search';
import {apiWeather} from '../services/api';
import {helpers} from '../helper/common';
import { Row, Col } from 'antd';
import WeatherContext from './weather-context';


const WeatherProvider = (props) => {
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({});

    useEffect(() => {
        getDataFromApi('Tokyo');
    },[]);
    
    const getDataFromApi = async (city = '') => {
        await setLoading(true);
        const data = await apiWeather.getDataWeather(city);
        if (!helpers.isEmptyObject(data)) {
            if(data.cod === 200) {
                await setWeather(data);   
            }
        }
        await setLoading(false);
    }


    return (
        <>
            <Row>
                <Col span={20} offset={2}>
                    <InputSearch
                        search={getDataFromApi}
                        loading={loading}
                    />
                </Col>
            </Row>

            <Row>
                <Col span={20} offset={2}>
                    <WeatherContext.Provider value={{loading,weather}}>
                        {props.children}
                    </ WeatherContext.Provider>
                </Col>
            </Row>
        </>
    )
}

export default WeatherProvider;