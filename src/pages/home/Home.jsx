import React from 'react'
import Hero from '../../components/hero/Hero'
import Cards from '../../components/cards/Cards'
import About from '../../components/about/About'
import Premium from '../../components/premium/Premium'
import Choose from '../../components/choose/Choose'
import Footer from "../../components/footer/Footer"
const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <About />
      <Premium />
      <Choose />
      <Footer />
    </div>
  )
}

export default Home
