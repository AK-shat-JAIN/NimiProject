
import './App.css'
import About from './components/About'
import Display from './components/Display'
import FloatButton from './components/FloatButton'
import Footer from './components/Footer'
import JoyousGallery from './components/Gallery'
import Hero from './components/Hero'  
import Highlight from './components/Highlight'
import Provide from './components/Provide'
import FormPopup from './components/FormPopup'
import { useState } from 'react'

const App =() => {

  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
  }
  

  return (
    <>
    <main className='bg-white'>
    {showForm?<FormPopup onClose={toggleForm}></FormPopup>:<></>}
    
    <FloatButton />

    <Hero formVis={toggleForm}></Hero>
    <About />
    <Highlight />
    <Provide />
    <Display />
    <JoyousGallery />
    <Footer />

    </main>
    </>
  )
}

export default App
