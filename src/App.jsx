import Hero from './components/Hero';
import BrandsSlider from './components/BrandsSlider';
import About from './components/About';
import Services from './components/Services';
import PricingCards from './components/PricingCards';
// import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full h-full">
      <div className="container">
        <Hero />
        <BrandsSlider />
        <About />
        <Services />
        <PricingCards />
        {/* <Contact /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
