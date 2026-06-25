import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Problems from './components/Problems'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Problems />
        <Benefits />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
