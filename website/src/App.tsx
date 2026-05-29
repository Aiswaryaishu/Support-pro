import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ExpertsSection from './components/ExpertsSection';
import ServicesSection from './components/ServicesSection';
import WhyExpertsSection from './components/WhyExpertsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => (
  <div className="min-h-screen overflow-x-hidden bg-white">
    <Header />
    <main>
      <Hero />
      <TrustStrip />
      <ExpertsSection />
      <ServicesSection />
      <WhyExpertsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default App;
