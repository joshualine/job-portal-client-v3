import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from "./pages/LandingPage";
import ApplicationPage from "./pages/ApplicationPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminViewAppPage from "./pages/AdminViewAppPage";
import AdminOneJobView from "./components/adminOneJobView/AdminOneJobView";
import PostJobPage from "./pages/PostJobPage";




const App = () => {
  return (
<div className="App">
      <BrowserRouter>


        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/apply" element={<ApplicationPage />} />


          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/applications" element={<AdminViewAppPage />} />
          <Route path="/admin-one-job" element={<AdminOneJobView />} />
          <Route path="/add-job" element={<PostJobPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App