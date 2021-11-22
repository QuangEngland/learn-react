import WeatherProvider from './context/weather-provider';
import InforWeather from './components/infor-weather';
import MainWeather from './components/main-weather';
import OrtherWeather from './components/orther-weather';
import {helpers} from './helper/common';
import WeatherContext from './context/weather-context';



const AppWeather = (props) => {

    return(
        <WeatherProvider>
            <WeatherContext.Consumer>
                { context => {
                        if(!helpers.isEmptyObject(context.dataWeather)) {
                            return (

                                <>
                                    <MainWeather />
                                    <InforWeather />
                                    <OrtherWeather />
                                </>
                            )
                        }
                    }
                }
            </WeatherContext.Consumer>
        </WeatherProvider>
    )
}

export default AppWeather;