import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ExpertsSection from './components/ExpertsSection';
import ServicesSection from './components/ServicesSection';
import WhyExpertsSection from './components/WhyExpertsSection';

const App = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main>
      <Hero />
      <TrustStrip />
      <ExpertsSection />
      <ServicesSection />
      <WhyExpertsSection />
      {/* Additional sections will be added one by one as designs are provided */}
    </main>
  </div>
);

export default App;
