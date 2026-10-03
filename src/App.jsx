import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useReveal from './hooks/useReveal.js';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import BackToTop from './components/BackToTop.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import SectorsPage from './pages/SectorsPage.jsx';
import LeadershipPage from './pages/LeadershipPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  const [service, setService] = useState('');
  useReveal();

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar onConsult={setService} />
      <main>
        <Routes>
          <Route path="/" element={<Home onConsult={setService} service={service} setService={setService} />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicesPage onConsult={setService} />} />
          <Route path="/sectores" element={<SectorsPage onConsult={setService} />} />
          <Route path="/lideranca" element={<LeadershipPage />} />
          <Route path="/contactos" element={<ContactPage service={service} setService={setService} />} />
          {/* Fallback */}
          <Route path="*" element={<Home onConsult={setService} service={service} setService={setService} />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
