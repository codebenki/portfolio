import './App.css'
import { Navbar, Home, Experience, Education, Resume, Contact } from './components/features/export'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      {/* <Projects /> */}
      <div className='flex justify-center flex-col md:flex-row'>
        <Experience />
        <Education />
      </div>
      <Resume />
      <Contact />
    </>
  )
}

export default App
