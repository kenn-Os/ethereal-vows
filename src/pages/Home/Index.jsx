import AboutUs from "../../components/AboutUs"
import Blog from "../../components/Blog"
import ContactUs from "../../components/ContactUs"
import Disclaimer from "../../components/Disclaimer"
import Gallery from "../../components/Gallery"
import Navigation from "../../components/Navigation"
import PrivacyPolicy from "../../components/PrivacyPolicy"
import Services from "../../components/Services"
import TermsOfService from "../Auth/TermsOfService"
import Venues from "../../components/Venues"
import Login from "../Auth/Login"
import Dashboard from "../Dashboard/Dashboard"
import Footer from "./Footer"
import Homepage from "./Homepage"

const Index = () => {
  return (
    <>
    <Navigation />
    <Homepage />
    <AboutUs />
    <Services />
    <Gallery />
    <Blog />
    <Venues />
    <ContactUs />
    <PrivacyPolicy />
    <Login />
    <Dashboard />
    <TermsOfService />
    <Disclaimer />
    

    <Footer />
    </>
  )
}

export default Index
