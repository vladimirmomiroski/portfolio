import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import ProjectInfo from './pages/ProjectInfo/ProjectInfo';

function App() {
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
     <Footer/>
    </div>
  );
}

export default App;
