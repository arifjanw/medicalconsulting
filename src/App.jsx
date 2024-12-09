// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/Landingpage'; 
import ServicePage from './Pages/ServicePage';
import QuestionnaireViewer from "./Components/QuestionareViewer";
import BookingPage from './Pages/BookingPage';
import Form from './Pages/Form'
import AdminPage from './Pages/AdminPage'
import PharmacyDashboard from './Pages/PharmacyDashboard'
import SignupPage from './Pages/SignupPage'
import PharmacyLandingPage from './Pages/PharmacyLandingPage'
import BlogPage from './Pages/BlogPage'
import AboutUs from './Pages/AboutUs'
import Pricing from './Pages/Pricing'
import MedessistAI from './Pages/MedessistAI'
import ForPharmacies from './Pages/ForPharmacies'
import Testimonials from './Pages/Testimonials'



function App() {
  return (
    <Router basename='/medicalconsultingg'>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/services" element={<ServicePage />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/view-response/:id" element={<QuestionnaireViewer />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/PharmacyDashboard" element={<PharmacyDashboard />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/PharmacyLandingPage" element={<PharmacyLandingPage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/MedessistAI" element={<MedessistAI />} />
        <Route path="/ForPharmacies" element={<ForPharmacies/>} />
        <Route path="/Testimonials" element={<Testimonials/>} />
      
        
       
      </Routes>
    </Router>
  );
}

export default App;
