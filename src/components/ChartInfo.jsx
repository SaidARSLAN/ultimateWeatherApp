import React from 'react'

const ChartInfo = ({forecast}) => {
    return (
        <div>
            <img className='wind_hide' src={forecast.condition.icon} />
            <p className='wind_hide'>{forecast.wind_kph}</p>
            <p>{forecast.time.slice(-5)}</p>
        </div>
    )
}

export default ChartInfo