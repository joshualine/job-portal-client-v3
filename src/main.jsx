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

import store from './store';
import { Provider } from 'react-redux';

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
import AdminViewAppPage from "./pages/AdminViewAppPage";
// import AdminOneJobView from "./components/adminOneJobView/AdminOneJobView";
import PostJobPage from "./pages/PostJobPage";
import AdminViewOnePage from './pages/AdminViewOnePage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import NotFound from './components/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/jobs/:id' element={<ApplicationPage />} />
      <Route path='/jobs/post' element={<PostJobPage />} />
      <Route path='/applications' element={<AdminViewAppPage />} />
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/admin/jobs/:id' element={<AdminViewOnePage />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
