import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext';
import { airConditionLayouts, clock } from '../contains';
import AiyLayout from '../components/AiyLayout';
import MountainImage from '../components/MountainImage';

const AirCondition = () => {
  const { info } = useContext(GlobalContext);

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
        <MountainImage />
        <div className='air-info'>
          {airConditionLayouts.map((item, idx) => <AiyLayout item={item} key={idx} />)}
        </div>
      </div>
    </section>
  )
}

export default AirCondition