import Header from './components/Header'
import './generalStyles/style.css'


function App() {

  return (
    <main>
      <div className='first-container'>
      <div className=''>
          <Header />
      </div>
      <div className='item'>
        <p>chart</p>
      </div>
      </div>
      <div className='second-container'>
      <div className='item'>
        <p>nav</p>
      </div>
      <div className='item'>
        <p>middle</p>
      </div>
      <div className='item'>
        <p>detail</p>
      </div>
      </div>
    </main>
  )
}

export default App
