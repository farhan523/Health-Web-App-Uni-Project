import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import "primereact/resources/themes/lara-light-cyan/theme.css";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";



import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from './pages/home/Home.jsx';
import Analytics from './pages/analytics/AnalyticsPage.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Portal from './pages/portal/Portal.jsx';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />
  },
  {
      path: "/analytics",
      element: <Analytics />
  },
  {
      path: "/dashboard",
      element: <Dashboard />
  },
  {
      path: "/portal",
      element: <Portal />
  }
]);
        

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router}>
        <PrimeReactProvider>
            <App />
        </PrimeReactProvider>
      </RouterProvider>
  </React.StrictMode>,
)
