import { Outlet } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import Footer from './sharedFile/Footer/Footer'
import Navbar from './Components/Shared/Nabbar/Navbar'

function App() {

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div>
        <div className=' border-b-2 shadow-sm'> 
          <Navbar />
        </div>
        <div className='lg:mx-[70px]'>

          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
