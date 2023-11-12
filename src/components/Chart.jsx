import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'

const Chart = () => {
  const {forecastInfo} = useContext(GlobalContext);
  return (
    <section className='chart'>
      <div className='chart-title'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
<path d="M15.2213 0.168335C7.05742 0.168335 0.442505 5.72561 0.442505 12.5842C0.442505 19.4427 7.05742 25 15.2213 25C23.3851 25 30 19.4427 30 12.5842C30 5.72561 23.3851 0.168335 15.2213 0.168335ZM16.4291 13.5989H8.40029V12.5842H15.2213V4.94366H16.4291V13.5989Z" fill="white"/>
</svg>
      <h2>
        Hourly Forecast
        </h2>
      </div>
      <div className='chart-temps'>
      {forecastInfo.forecast && forecastInfo.forecast.forecastday[0].hour.slice(0,7).map((forecast) => {
        return (
          <div>
              <p>{forecast.temp_c}</p>
            </div>
          )
        })}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className='line-svg' viewBox="0 0 693 50" fill="none">
        <path d="M-1 1C-1 1 74.8806 4.83144 122.56 13.4122C159.256 20.0162 178.348 33.213 215.23 35.9093C252.112 38.6056 272.535 27.619 309.526 27.3759C355.578 27.0733 380.795 37.6231 426.829 38.8709C480.272 40.3194 511.405 44.2691 563.507 31.3678C635.79 13.4693 641.831 31.3548 699 49" stroke="#F0F0F0" stroke-width="1.39432"/>
        </svg>
        <div className='chart-info'>
        {forecastInfo.forecast && forecastInfo.forecast.forecastday[0].hour.slice(0,7).map((forecast) => {
          return (
            <div>
              <img className='wind_hide' src={forecast.condition.icon} />
              <p className='wind_hide'>{forecast.wind_kph}</p>
              <p>{forecast.time.slice(-5)}</p>
            </div>
          )
        })}
        </div>
    </section>
  )
}

export default Chart