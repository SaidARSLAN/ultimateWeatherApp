import { createContext, useEffect, useState } from "react";


const GlobalContext = createContext();





export const Provider = ({children}) => {
    const [info, setInfo] = useState({})
    const [forecastInfo, setForecastInfo] = useState({})
    const [images, setImages] = useState([]);

    
    const getImages = async () => {
        const response = await fetch("https://api.unsplash.com/search/photos?query=countryside", {
            headers: {
                Authorization: "Client-ID g8Xeq0CXcvobo22LXXeBMfq4G6bH1TX8k2aI4KjUa44"
            }
        });
    
        const data = await response.json();
        return data;
    };
    


    const getWeatherDatas = async () => {
        try {
            const response = await fetch("http://api.weatherapi.com/v1/current.json?key=17fda583f98446858f1200014231011&q=ankara");
            const data = await response.json();
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
        getImages()
        .then(data => {
            setImages([...images,data])
        })
        .catch(error => {
            console.log(error)
        })
    },[])

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
        <GlobalContext.Provider value={{info,forecastInfo,images}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;