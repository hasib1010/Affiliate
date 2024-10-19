import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './sharedFile/Footer/Footer';
import Navbar from './Components/Shared/Nabbar/Navbar';
import ReactGA from 'react-ga4';  // Changed to react-ga4
import React, { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-P35GSSRE75');
  }, []); 

  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    });
  }, [location]); 

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div>
        <div className='border-b-2 shadow-sm'>
          <Navbar />
        </div>
        <div className='lg:mx-[70px]'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;