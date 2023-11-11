import { createContext, useEffect, useState } from "react";


const GlobalContext = createContext();





export const Provider = ({children}) => {
    const [info, setInfo] = useState({})

    const [forecastInfo, setForecastInfo] = useState({})


    const getWeatherDatas = async () => {
        try {
            const response = await fetch("http://api.weatherapi.com/v1/current.json?key=17fda583f98446858f1200014231011&q=Madrid");
            const responseTwo = await fetch("http://api.weatherapi.com/v1/forecast.json?key=17fda583f98446858f1200014231011&q=07112&days=14")
            const data = await response.json();
            const forecastData = await responseTwo.json();
            return data;
        }
        catch (error) {
            console.log(error)
            throw error
        }
    }
    const getForecastData = async () => {
        try {
            const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=17fda583f98446858f1200014231011&q=07112&days=14")
            const forecastData = await response.json();
            return forecastData
        }
        catch (error) {
            console.log(error)
            throw error
        }
    }

    useEffect(() => {
        getWeatherDatas()
        .then(data => {
            setInfo(data)
        })
        .catch(error => {
            console.log(error);
        })
    },[])
    useEffect(() => {
        getForecastData()
        .then(data => {
            setForecastInfo(data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])
    return (
        <GlobalContext.Provider value={{info,forecastInfo}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;