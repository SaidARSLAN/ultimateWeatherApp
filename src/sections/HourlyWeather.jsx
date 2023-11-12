import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'
import { clock } from '../contains';
import LineImage from '../components/LineImage';
import ChartTemp from '../components/ChartTemp';
import ChartInfo from '../components/ChartInfo';

const Chart = () => {
  const {forecastInfo} = useContext(GlobalContext);
  return (
    <section className='chart'>
      <div className='chart-title'>
      <img src={clock} width={25}/>
      <h2>
        24-hour Forecast
        </h2>
      </div>
      <div className='chart-temps'>
      {forecastInfo.forecast && forecastInfo.forecast.forecastday[0].hour.slice(0,7).map((forecast) =>
      <ChartTemp forecast={forecast} /> 
      )}
        </div>
        <LineImage />
        <div className='chart-info'>
        {forecastInfo.forecast && forecastInfo.forecast.forecastday[0].hour.slice(0,7).map((forecast) =>
        <ChartInfo forecast={forecast}/>
        )}
        </div>
    </section>
  )
}

export default Chart