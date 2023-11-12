import React, { useContext, useState } from 'react'
import { days } from '../utils'
import GlobalContext from '../context/MainContext'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import DayDetail from '../components/DayDetail'
const DayWeather = () => {

    const { forecastInfo } = useContext(GlobalContext);
    const [step, setStep] = useState(0);

    return (
        <section className='day-weather item'>
            <div className='days-header'>
                {days.map( day => <p key={day}>{day}</p>)}
            </div>
            <div className='days-body'>
                <IoIosArrowBack
                    size={30}
                    className='actions'
                    onClick={() => { step > 0 && setStep(currStep => currStep - 7) }}
                />
                <div className='days-all'>
                    {forecastInfo.forecast && forecastInfo.forecast.forecastday.slice(step, step + 7).map(
                        day => <DayDetail day={day}/>)}
                </div>
                <IoIosArrowForward
                    size={30}
                    className='actions'
                    onClick={() => { step < 7 && setStep(currStep => currStep + 7) }}
                />
            </div>
        </section>
    )
}

export default DayWeather