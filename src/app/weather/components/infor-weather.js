import { Card, Col, Row } from 'antd';
import { useContext } from 'react';
import WeatherContext from '../context/weather-context';

const InforWeather = (props) => {
    const context = useContext(WeatherContext);
    const infor = context.weather.main;
    if(infor === undefined) {
        return (
            <Row>
                <Col  span={20} offset={2}>
                    <Card title="Du Bao Thoi Tiet" bordered={true}>
                        <p> Chon Thanh Pho Muon Xem Thoi Tiet</p>
                    </Card>
                </Col>
            </Row>
        )
    }
    else {
        return (
            <>
                <Row>
                    <Col  span={20} offset={2}>
                        <Card title="Du Bao Thoi Tiet" bordered={true}>
                            <p> - Nhiet Do: {infor.temp_min} - {infor.temp_max}</p>
                            <p> - Ap Suat: {infor.pressure} Pa</p>
                            <p> - Do Am: {infor.humidity}%</p>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}

export default InforWeather;