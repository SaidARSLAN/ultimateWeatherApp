import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'

const CityPhoto = () => {
    const {images} = useContext(GlobalContext);
  return (
    <section className='cityPhotos item'>
        {images[0].results && images[0].results.slice(0,4).map((image) => {
            return <img src={image.urls.thumb} />
        })}
    </section>
  )
}

export default CityPhoto