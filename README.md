# Hava Durumu Grafiği Çizme

Bu proje, hava durumu grafiği çizmek için kullanılan iki temel JavaScript fonksiyonunu içermektedir.

## Tarih Oluşturma Fonksiyonu

`createDate` fonksiyonu, mevcut tarih bilgisini kullanarak bir tarih nesnesi oluşturur. Bu nesne, gün, ay, yıl ve ayın günü gibi bilgileri içerir.
# Hava Durumu ve Resim API İle Çalışan Uygulama

Bu proje, Unsplash API'sini kullanarak belirli bir konum için resimleri ve WeatherAPI'yi kullanarak hava durumu verilerini çeken bir uygulamayı içermektedir.

## API Anahtarları

Uygulama, Unsplash API ve WeatherAPI için gerekli olan API anahtarlarını kullanmaktadır. Bu anahtarları almak ve güncellemek için aşağıdaki adımları izleyebilirsiniz:

### Unsplash API Anahtarı

Unsplash API anahtarınızı [Unsplash Developers](https://unsplash.com/developers) sayfasından alabilirsiniz. Anahtarınızı `getImages` fonksiyonunda kullanmalısınız.

### WeatherAPI Anahtarı

WeatherAPI anahtarınızı [WeatherAPI](https://www.weatherapi.com/) sayfasından alabilirsiniz. Anahtarınızı `getWeatherDatas` ve `getForecastData` fonksiyonlarında kullanmalısınız.

## Fonksiyonlar

### `getImages`

Belirli bir konum için Unsplash API'sinden resimleri getirir.

```javascript
const images = await getImages();
console.log(images);

import { createDate } from './utils';

const currentDate = createDate();
console.log(currentDate);


import { drawLineChart } from './utils';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const temperatures = [20, 25, 30, 22, 18, 26];

drawLineChart(canvas, ctx, temperatures);


import { days, months } from './utils';

console.log('Günler:', days);
console.log('Aylar:', months);




const weatherData = await getWeatherDatas();
console.log(weatherData);




const forecastData = await getForecastData();
console.log(forecastData);
