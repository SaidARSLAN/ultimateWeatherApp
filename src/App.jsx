import AirCondition from './sections/AirCondition'
import Chart from './sections/HourlyWeather'
import CityPhoto from './sections/CityPhoto'
import DayWeather from './sections/DayWeather'
import Header from './sections/Header'
import Nav from './sections/Nav'
import './generalStyles/style.css'


function App() {

  return (
    <main>
      <div className='first-container'>
      <div>
          <Header />
      </div>
      <div className='item'>
        <Chart />
      </div>
      </div>
      <div className='second-container'>
      <div className='item'>
        <Nav />
      </div>
      <div className='middle'>
        <CityPhoto />
        <DayWeather />
      </div>
      <div className='item'>
        <AirCondition />
      </div>
      </div>
    </main>
  )
}

export default App
