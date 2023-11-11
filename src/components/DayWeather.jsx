import React, { useContext, useState } from 'react'
import { days } from '../utils'
import GlobalContext from '../context/MainContext'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'
const DayWeather = () => {
    const {forecastInfo} = useContext(GlobalContext);
    const [step, setStep] = useState(0);

    const handleBack = () => {
        if (step > 0) {
            setStep(currStep => currStep - 7)
        }
    }

    const handleNext = () => {
        if (step < 7) {
            setStep(currStep => currStep + 7)
        }
    }

  return (
    <section className='day-weather item'>
        <div className='days-header'>
        {days.map((day) => {
            return <p key={day}>{day}</p>
        })}
        </div>
        <div className='days-body'>
            <IoIosArrowBack size={30} color='white' className='actions' onClick={handleBack}/>
        <div className='days-all'>
            {forecastInfo.forecast && forecastInfo.forecast.forecastday.slice(step,step+7).map((day,idx) => {
                return (
                    <div key={day} className='day-detail'>
                        <img src ={day.day.condition.icon} />
                        <p>{day.day.maxtemp_c}&deg;</p>
                    </div>
                )
            })}
        </div>
            <IoIosArrowForward size={30} color='white' className='actions' onClick={handleNext}/>
            </div>
    </section>
  )
}

export default DayWeather