import React from 'react'

const ChartTemp = ({ forecast }) => {
    return (
        <div>
            <p>{forecast.temp_c}&deg;C</p>
        </div>
    )
}

export default ChartTemp