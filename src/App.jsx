import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./components/NavBar"
import { Container } from 'react-bootstrap';





const App = () => {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Container className='my-2'>
        <Outlet />
      </Container>
    </>
  )
}

export default App