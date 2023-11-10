import React, { useContext } from 'react'
import GlobalContext from '../../context/MainContext'
import './zero.css'
const ComponentZero = () => {
    const {info} = useContext(GlobalContext);
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <div className='componentZero'>
        <div>
        <p>{info.location && info.location.name}</p>
        <p>{info.current && info.current.condition.text}</p>
        <p>{info.current && info.current.temp_c}</p>
        </div>
        <div>
        <img src={info.current && info.current.condition.icon} />
        </div>
        <div>
        <p>{days[date.getDay()]}</p>
        <p>{date.getDate()} {date.getMonth() + 1} {date.getFullYear()}</p>
        </div>
    </div>
  )
}

export default ComponentZero