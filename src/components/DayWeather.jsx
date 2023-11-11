import React, { useContext } from 'react'
import { days } from '../utils'
import GlobalContext from '../context/MainContext'

const DayWeather = () => {
    const {forecastInfo} = useContext(GlobalContext);
    console.log(forecastInfo)
  return (
    <section className='day-weather item'>
        <div className='days-header'>
        {days.map((day) => {
            return <p key={day}>{day}</p>
        })}
        </div>
        <div className='days-body'>
            {forecastInfo.forecast && forecastInfo.forecast.forecastday.slice(0,7).map((day) => {
                return (
                    <div className='day-detail'>
                        <img src ={day.day.condition.icon} />
                        <p>{day.day.maxtemp_c}&deg;</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default DayWeather