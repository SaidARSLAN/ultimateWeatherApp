import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext';
import { airConditionLayouts, clock } from '../contains';

const AirCondition = () => {
  const { info } = useContext(GlobalContext);
  const infoList = [
    info.current && info.current.feelslike_c,
    info.current && info.current.vis_km,
    info.current && info.current.humidity,
    info.current && info.current.uv
  ]
  return (
    <section className='air-condition'>
      <div>
        <div className='air-header'>
          <img src={clock} />
          <h2>
            {info.location && info.location.localtime.slice(-5)}   GMT
          </h2>
        </div>
        <h1 className='air-title'>AIR CONDITIONS</h1>
      </div>
      <div className='air-data'>
        <div className='mountain-svg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 699 381" fill="none">
            <path d="M0 133.777C0 133.777 117.579 60.3639 143.468 58.7439C167.199 57.2588 330.083 162.635 330.083 162.635C330.083 162.635 469.236 2.95009 504.833 0.0642848C540.431 -2.82152 699 92.4124 699 92.4124V381H0V133.777Z" fill="url(#paint0_linear_2_103)" fill-opacity="0.4" />
            <defs>
              <linearGradient id="paint0_linear_2_103" x1="349.5" y1="0" x2="349.5" y2="381" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C4C3C1" />
                <stop offset="1" stop-color="#C4C3C1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='air-info'>
          {airConditionLayouts.map((item, idx) => {
            return (
              <div className='air-layout'>
                <img src={item.icon} />
                <div>
                  <h3>{item.name}</h3>
                  <h3>{infoList[idx]}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AirCondition