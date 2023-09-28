import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from '../src/sections/header/Header';
import About from '../src/sections/about/About';
import Projects from '../src/sections/projects/Projects';
import MainSectionSkills from './sections/skills/MainSectionSkills';
import Footer from '../src/components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <MainSectionSkills />
      <Footer/>
    </div>
  );
}

export default App;
