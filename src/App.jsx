import { useState, Fragment,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Work from './components/Work'
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Contact from './components/Contact';
import PreLoader from './components/PreLoader';
// import Quote from './components/Quote';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      // Simulate the loading timeout for demonstration
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Change this to control how long the preloader stays
    }, []);

  if (loading) return <PreLoader/>;
 
  return (

(<Routes>
   
    <Route  path="/" element={
    <Fragment>
     
        <Navbar/>
        <Hero />
        <Work/>
        <Projects/>
        <Skills/>
        {/* <Quote/> */}
        {/* <Contact/> */}
        <Footer/>
    </Fragment>
    } />
    
    
</Routes>)
  )
}

export default App
