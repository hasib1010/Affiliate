import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './sharedFile/Footer/Footer';
import Navbar from './Components/Shared/Nabbar/Navbar';
import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-P35GSSRE75');
    
    // Track initial page load as an event
    ReactGA.event('page_load', {
      page_location: window.location.href,
      page_title: document.title
    });
  }, []); 

  useEffect(() => {
    // Track page views as events
    ReactGA.event('page_view', {
      page_path: location.pathname,
      page_title: document.title,
      page_location: window.location.href
    });
  }, [location]); 

  // Create a tracking function to pass to child components
  const trackEvent = (name, params = {}) => {
    ReactGA.event(name, {
      timestamp: new Date().toISOString(),
      ...params
    });
  };

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div>
        <div className='border-b-2 shadow-sm'>
          <Navbar />
        </div>
        <div className='lg:mx-[70px]'>
          <Outlet context={{ trackEvent }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;