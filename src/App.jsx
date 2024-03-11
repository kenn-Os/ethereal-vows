import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Home/Homepage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Venues from './components/Venues';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Login from './pages/Auth/Login';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './pages/Auth/TermsOfService';
import Dashboard from './pages/Dashboard/Dashboard';
import Disclaimer from './components/Disclaimer';
import Signup from './pages/Auth/Signup';
import { AuthProvider } from './context/AuthContext';
import GuestList from './pages/Dashboard/GuestList';
import VendorManagementPage from './pages/Dashboard/VendorManagement';
import DocumentsPage from './pages/Dashboard/Documents';
import ChecklistPage from './pages/Dashboard/Checklist';
// import ForgotPassword from './pages/Auth/ForgotPassword';

const App = () => {
  return (
    <>
    <AuthProvider />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/venues" element={<Venues/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-of-service" element={<TermsOfService/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/disclaimer" element={<Disclaimer/>} />
        <Route path="/guest-list" element={<GuestList />} />
        <Route path="/vendor-management" element={<VendorManagementPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/checklist" element={<ChecklistPage />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
      </Routes>
      <AuthProvider />
    </>
    
  );
};

export default App;
