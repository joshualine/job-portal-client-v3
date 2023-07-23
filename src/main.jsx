import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LandingPage from "./pages/LandingPage.jsx";

import ApplicationPage from "./pages/ApplicationPage";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminViewAppPage from "./pages/AdminViewAppPage";
// import AdminOneJobView from "./components/adminOneJobView/AdminOneJobView";
// import PostJobPage from "./pages/PostJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/apply' element={<ApplicationPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
