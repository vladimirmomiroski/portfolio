import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import ProjectInfo from './pages/ProjectInfo/ProjectInfo';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  
  const [scrollPosition, setScrollPosition] = useState(window.scrollY)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    scrollPosition > 300 ? setScroll(true) : setScroll(false)
  }, [scrollPosition])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const s = window.scrollY
      setScrollPosition(s)  
  })
  }, [])


  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/:id' element={<ProjectInfo/>}/>
        <Route path='/contact' element={<Contact/>}/>
     </Routes>
     {scroll && <ScrollToTop/>}
     <Footer/>
    </div>
  );
}

export default App;
