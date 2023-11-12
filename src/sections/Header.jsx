import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'
import { createDate } from '../utils';
import {ImLocation} from 'react-icons/im'

const Header = () => {

    // Weather current and location information from context API
    const {info} = useContext(GlobalContext);

    // Current date from utils.js
    const date =  createDate();

  return (
    <header>
        
        <div className="info-section">

            
            <div className='description typography'>
            <h3><ImLocation size={35}/> {info.location && info.location.name}</h3>
            <h3 className='centered'>{info.current && info.current.condition.text}</h3>
            </div>
            
            <div className='celcius typography'>
            <h1 className='centered'>{info.current && info.current.temp_c}&deg;C</h1>
            </div>

        </div>

        <div className='image-section'>
            <img src={info.current && info.current.condition.icon} />
        </div>

        <div className='date-section typography'>
            <h2>{date.day}</h2>
            <div className='line'></div>
            <h2>{date.dayOfTheMonth} {date.month} {date.year}</h2>
        </div>

    </header>
  )
}

export default Header