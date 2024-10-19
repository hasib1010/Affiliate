import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './sharedFile/Footer/Footer';
import Navbar from './Components/Shared/Nabbar/Navbar';
import ReactGA from 'react-ga4';
import React, { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [gaInitialized, setGaInitialized] = useState(false);

  // Debug initialization
  useEffect(() => {
    try {
      console.log('Initializing GA4...');
      ReactGA.initialize('G-P35GSSRE75');
      setGaInitialized(true);
      console.log('GA4 initialized successfully');
      
      // Send test event on initialization
      ReactGA.event('app_initialized', {
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('GA4 initialization failed:', error);
    }
  }, []);

  // Debug page views
  useEffect(() => {
    if (!gaInitialized) return;

    try {
      console.log('Sending pageview for:', location.pathname);
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search
      });
      console.log('Pageview sent successfully');
    } catch (error) {
      console.error('Failed to send pageview:', error);
    }
  }, [location, gaInitialized]);

  // Debug component for testing events
  const TestAnalytics = () => {
    const sendTestEvent = () => {
      try {
        console.log('Sending test event...');
        ReactGA.event('button_click', {
          category: 'Test',
          action: 'Click',
          label: `Test at ${new Date().toISOString()}`
        });
        alert('Test event sent! Check console and GA4 Real-Time dashboard.');
      } catch (error) {
        console.error('Failed to send test event:', error);
        alert('Failed to send test event. Check console for details.');
      }
    };

    return (
      <div className="p-4 m-4 border rounded">
        <h2 className="mb-4">GA4 Debug Panel</h2>
        <div className="mb-2">GA Initialized: {gaInitialized ? '✅' : '❌'}</div>
        <div className="mb-2">Current Path: {location.pathname}</div>
        <button 
          onClick={sendTestEvent}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send Test Event
        </button>
      </div>
    );
  };

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div>
        <div className='border-b-2 shadow-sm'>
          <Navbar />
        </div>
        <TestAnalytics /> {/* Add debug panel */}
        <div className='lg:mx-[70px]'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;