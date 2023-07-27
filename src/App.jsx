import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Hero, Notify, Pricing, Showcase } from './sections'
import { MotionConfig } from 'framer-motion'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className='mb-30'>
        <Navbar />
        <Hero />
        </div>
      
      <Showcase />
      <Pricing />
      <Notify />
      <Footer/>
    </MotionConfig>
  )
}

export default App
