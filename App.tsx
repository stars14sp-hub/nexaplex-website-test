import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PackagesPage from './pages/PackagesPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import ScrollToTop from './components/ScrollToTop';
import AmbientWave from './components/AmbientWave';

const PageAmbientWave: React.FC = () => {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;
  return <AmbientWave variant={pathname === '/case-studies' ? 'case-studies' : 'global'} />;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="relative flex-grow overflow-x-clip">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<ServicesPage />} />
            <Route path="/services" element={<Navigate to="/solutions" replace />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/case-studies" element={<PortfolioPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/portfolio" element={<Navigate to="/case-studies" replace />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          </Routes>
          <PageAmbientWave />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
