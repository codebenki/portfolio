import './App.css'
import Navbar from './components/features/export'

function App() {

  return (
    <>
      <Navbar />
      <div>
        <div id='home' className='mb-96 pb-96'>home</div>
        <div id='profile' className='mt-96 pt-96'>profile</div>
      </div>
    </>
  )
}

export default App
