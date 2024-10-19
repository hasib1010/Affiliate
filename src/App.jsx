import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './sharedFile/Footer/Footer';
import Navbar from './Components/Shared/Nabbar/Navbar';
import { init, logEvent } from '@react-ga4'; // Import from @react-ga4
import React, { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    init('G-P35GSSRE75'); // Replace with your Measurement ID
    logEvent('page_view', { page_path: location.pathname + location.search }); // Track initial page view
  }, []); // Run only on mount

  useEffect(() => {
    logEvent('page_view', { page_path: location.pathname + location.search }); // Track page view on location change
  }, [location]);

  // Example event tracking function
  const handleButtonClick = () => {
    logEvent('button_click', { label: 'Example Button' }); // Track button click event
  };

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div>
        <div className='border-b-2 shadow-sm'>
          <Navbar />
        </div>
        <div className='lg:mx-[70px]'>
          <Outlet />
          <button onClick={handleButtonClick}>Click Me</button> {/* Example button for event tracking */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
