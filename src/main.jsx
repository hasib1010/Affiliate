import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import About from './Components/Pages/About/About.jsx';
import Story from './Components/Pages/Story/Story.jsx';
import Vision from './Components/Pages/Vision/Vision.jsx';
import Contact from './Components/Pages/Contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/story",
        element: <Story />
      },
      {
        path: "/vision",
        element: <Vision />
      },
      {
        path: "/contact",
        element: <Contact />
      }

    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
