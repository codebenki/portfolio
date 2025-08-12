import './App.css'
import { Navbar, Home, Projects, Experience, Education } from './components/features/export'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <div className='flex justify-center flex-col md:flex-row'>
        <Experience />
        <Education />
      </div>
    </>
  )
}

export default App
