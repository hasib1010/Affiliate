import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './sharedFile/Footer/Footer';
import Navbar from './Components/Shared/Nabbar/Navbar';
import ReactGA from 'react-ga'; // or import from @react-ga4 for GA4
import React, { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-P35GSSRE75');
    ReactGA.pageview(location.pathname + location.search); 
  }, []); // Only run on mount

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search); 
  }, [location]);

  // Example event tracking function
  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Button',
      label: 'Example Button', // Optional label
    });
  };

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div>
        <div className='border-b-2 shadow-sm'>
          <Navbar />
        </div>
        <div className='lg:mx-[70px]'>
          <Outlet />
          <button onClick={handleButtonClick}>Click Me</button> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
