
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyCallBar from './components/StickyCallBar';
import HomePage from './pages/HomePage';
import TowingPage from './pages/TowingPage';
import RecoveryPage from './pages/RecoveryPage';
import RoadsidePage from './pages/RoadsidePage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/light-medium-towing" element={<TowingPage />} />
          <Route path="/off-road-recovery" element={<RecoveryPage />} />
          <Route path="/roadside-assistance" element={<RoadsidePage />} />
          <Route path="/service-area" element={<ServiceAreaPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
};

export default App;
