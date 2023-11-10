import { createContext, useEffect, useState } from "react";


const GlobalContext = createContext();





export const Provider = ({children}) => {
    const [info, setInfo] = useState({});



    const getWeatherDatas = async () => {
        try {
            const response = await fetch("http://api.weatherapi.com/v1/current.json?key=17fda583f98446858f1200014231011&q=Amsterdam");
            const data = await response.json();
            return data;
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
    return (
        <GlobalContext.Provider value={{info}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;