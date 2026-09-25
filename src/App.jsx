import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import WhyNUOS from './components/WhyNUOS.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import Waitlist from './components/Waitlist.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyNUOS />
        <Pricing />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
