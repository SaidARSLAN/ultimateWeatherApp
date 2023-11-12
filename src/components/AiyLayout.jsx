import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext';

const AiyLayout = ({item,idx}) => {
    const { info } = useContext(GlobalContext);
    const infoList = [
        info.current && info.current.feelslike_c,
        info.current && info.current.vis_km,
        info.current && info.current.humidity,
        info.current && info.current.uv
      ]
  return (
    <div className='air-layout'>
                <img src={item.icon} />
                <div>
                  <h3>{item.name}</h3>
                  <h3>{infoList[idx]}</h3>
                </div>
              </div>
  )
}

export default AiyLayout