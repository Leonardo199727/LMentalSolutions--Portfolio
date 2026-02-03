import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import AppointmentForm from '@/components/AppointmentForm';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <Benefits />
      <AppointmentForm />
      <Testimonials />
      <Contact />
      <CTAFinal />
      <Footer />
    </main>
  );
}
