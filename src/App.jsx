import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './sharedFile/Footer/Footer';
import Navbar from './Components/Shared/Nabbar/Navbar';
import ReactGA from 'react-ga4';
import React, { useEffect, useState } from 'react';

// Custom hook for session tracking
const useFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem('hasVisited');
    if (!visited) {
      localStorage.setItem('hasVisited', 'true');
      setIsFirstVisit(true);
    } else {
      setIsFirstVisit(false);
    }
  }, []);

  return isFirstVisit;
};

function App() {
  const location = useLocation();
  const isFirstVisit = useFirstVisit();

  useEffect(() => {
    // Initialize GA4
    ReactGA.initialize('G-P35GSSRE75');
    
    // Track new user
    if (isFirstVisit) {
      ReactGA.event('first_visit', {
        new_user: true,
        timestamp: new Date().toISOString()
      });
    }
  }, [isFirstVisit]);

  useEffect(() => {
    // Track page views
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search
    });

    // Track navigation events
    ReactGA.event('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname
    });
  }, [location]);

  // Custom event tracking function
  const trackEvent = (eventName, category, label, value) => {
    ReactGA.event(eventName, {
      event_category: category,
      event_label: label,
      value: value
    });
  };

  // Example tracking user engagement time
  useEffect(() => {
    let startTime = Date.now();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = (Date.now() - startTime) / 1000; // Convert to seconds
        ReactGA.event('user_engagement', {
          time_spent: timeSpent,
          page_path: location.pathname
        });
      } else {
        startTime = Date.now();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location]);

  // Track scroll depth
  useEffect(() => {
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) { // Track at 25%, 50%, 75%, 100%
        maxScroll = scrollPercent;
        ReactGA.event('scroll_depth', {
          percent: scrollPercent,
          page_path: location.pathname
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Example of how to track button clicks
  const handleButtonClick = () => {
    trackEvent('button_click', 'user_interaction', 'specific_button', 1);
  };

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div>
        <div className='border-b-2 shadow-sm'>
          <Navbar />
        </div>
        <div className='lg:mx-[70px]'>
          <Outlet context={{ trackEvent }} /> {/* Pass tracking function to child components */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;