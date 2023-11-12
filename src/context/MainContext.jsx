import { createContext, useEffect, useState } from "react";
import { getForecastData, getImages, getWeatherDatas } from "./api";


const GlobalContext = createContext();

export const Provider = ({ children }) => {
    const [info, setInfo] = useState({})
    const [forecastInfo, setForecastInfo] = useState({})
    const [images, setImages] = useState([]);

    useEffect(() => {
        Promise.all([getImages(), getWeatherDatas(), getForecastData()])
          .then(([imagesData, weatherData, forecastData]) => {
            setImages(prevImages => [...prevImages, imagesData]);
            setInfo(weatherData);
            setForecastInfo(forecastData);
          })
          .catch(error => console.log(error));
      }, []);



return (
    <GlobalContext.Provider value={{ info, forecastInfo, images }}>
        {children}
    </GlobalContext.Provider>
)
}

export default GlobalContext;