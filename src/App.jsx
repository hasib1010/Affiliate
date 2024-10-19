import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './sharedFile/Footer/Footer';
import Navbar from './Components/Shared/Nabbar/Navbar';
import ReactGA from 'react-ga4';
import React, { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  
  // Track first visit
  useEffect(() => {
    const isFirstVisit = !localStorage.getItem('hasVisited');
    
    // Initialize GA4
    ReactGA.initialize('G-P35GSSRE75');
    
    // Track first visit
    if (isFirstVisit) {
      localStorage.setItem('hasVisited', 'true');
      ReactGA.event('first_visit', {
        user_type: 'new_user',
        timestamp: new Date().toISOString()
      });
    }

    // Track session start
    ReactGA.event('session_start', {
      session_id: Date.now().toString(),
      user_type: isFirstVisit ? 'new_user' : 'returning_user'
    });
  }, []);

  // Track page views and navigation
  useEffect(() => {
    // Standard page view
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search
    });

    // Enhanced page view event
    ReactGA.event('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname
    });

    // Track navigation
    ReactGA.event('screen_view', {
      screen_name: location.pathname,
      app_name: 'Your App Name'
    });
  }, [location]);

  // Track user engagement
  useEffect(() => {
    let startTime = Date.now();

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent % 25 === 0) { // Track at 25%, 50%, 75%, 100%
        ReactGA.event('scroll', {
          percent_scrolled: scrollPercent,
          page_path: location.pathname
        });
      }
    };

    // Track time on page
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = (Date.now() - startTime) / 1000;
        ReactGA.event('user_engagement', {
          engagement_time_msec: timeSpent * 1000,
          page_path: location.pathname
        });
      } else {
        startTime = Date.now();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location]);

  const trackEvent = (name, params = {}) => {
    ReactGA.event(name, {
      timestamp: new Date().toISOString(),
      page_path: location.pathname,
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