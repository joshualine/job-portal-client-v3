import ApplicationForm from "../components/applicationForm/ApplicationForm"
import ApplyJob from "../components/applyJob/ApplyJob"
import Footer from "../components/footer/Footer"
import NavBar from "../components/navBar/NavBar"


const ApplicationPage = () => {
  return (
    <>
      <NavBar />
      <ApplyJob />
      {/* <ApplicationForm /> */}
      <Footer />
    </>
  )
}

export default ApplicationPage