import CityPhoto from './components/CityPhoto'
import DayWeather from './components/DayWeather'
import Header from './components/Header'
import Nav from './components/Nav'
import './generalStyles/style.css'


function App() {

  return (
    <main>
      <div className='first-container'>
      <div>
          <Header />
      </div>
      <div className='item'>
        <p>chart</p>
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
        <p>detail</p>
      </div>
      </div>
    </main>
  )
}

export default App
