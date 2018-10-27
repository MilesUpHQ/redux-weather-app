import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  // this creates the app state.weather
  weather: WeatherReducer
});

export default rootReducer;
