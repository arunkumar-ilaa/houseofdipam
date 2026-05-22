import Announcement from "./sections/Announcement"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import Story from "./sections/Story"
import BestSeller from "./sections/BestSeller"
import WhyChoose from "./sections/WhyChoose"
import HowToOrder from "./sections/HowToOrder"
import Instagram from "./sections/Instagram"
import Testimonials from "./sections/Testimonials"
import FAQ from "./sections/FAQ"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import CursorGlow from "./components/CursorGlow"
import ScrollProgress from "./components/ScrollProgress"
import Noise from "./components/Noise"
import ScrollTop from "./components/ScrollTop"
import FloatingWhatsapp from "./components/FloatingWhatsapp"
import Loader from "./components/Loader"
import { useEffect, useState } from "react"


export default function App() {
  const [loading, setLoading] = useState(true)

useEffect(() => {

  const timer = setTimeout(() => {

    setLoading(false)

  }, 3000)

  return () => clearTimeout(timer)

}, [])

  return (
    <div>
      <Loader loading={loading} />

      <FloatingWhatsapp />

      <ScrollTop />

      <Noise />

      <ScrollProgress /> 

      <CursorGlow />

      <Announcement />

      <Navbar />

      <Hero />

      <Features />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <Story />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <BestSeller />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <WhyChoose />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <HowToOrder />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <Instagram />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <Testimonials />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <FAQ />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <Contact />

      <Footer />

    </div>
  )
}