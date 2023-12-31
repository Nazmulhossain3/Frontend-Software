import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Component/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Service from './Pages/SoftwareService/Service';
import AboutUs from './Pages/AboutUs/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/service',
        element : <Service></Service>
      },
      {
        path : '/aboutUs',
        element : <AboutUs></AboutUs>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
