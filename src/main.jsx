import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import ApplicationPage from './pages/ApplicationPage';
import AdminViewAppPage from './pages/AdminViewAppPage';
import PostJobPage from './pages/PostJobPage';
import AdminViewOnePage from './pages/AdminViewOnePage';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './components/NotFound';
import AddTransactions from './components/AddTransactions';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="jobs/:id" element={<ApplicationPage />} />
            <Route path="jobs/post" element={<PostJobPage />} />
            <Route path="applications" element={<AdminViewAppPage />} />
            <Route path="admin" element={<AdminDashboard />} />
            {/* <Route path="admin/jobs/:id" element={<AdminViewOnePage />} /> */}
            <Route path="user/transactions/:id" element={<AdminViewOnePage />} />
            <Route path="user/addtransaction" element={<AddTransactions />} />
            

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
