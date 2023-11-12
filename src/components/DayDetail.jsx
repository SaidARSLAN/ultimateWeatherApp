import React from 'react'

const DayDetail = ({ day }) => {
    return (
        <div key={day} className='day-detail'>
            <img src={day.day.condition.icon} />
            <p>{day.day.maxtemp_c}&deg;</p>
        </div>
    )
}

export default DayDetail