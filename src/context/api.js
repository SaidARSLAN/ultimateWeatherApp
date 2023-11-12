const getImages = async () => {
    const response = await fetch("https://api.unsplash.com/search/photos?query=ankara", {
        headers: {
            Authorization: "Client-ID g8Xeq0CXcvobo22LXXeBMfq4G6bH1TX8k2aI4KjUa44"
        }
    });

    const data = await response.json();
    return data;
}

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

export {getForecastData,getImages,getWeatherDatas}