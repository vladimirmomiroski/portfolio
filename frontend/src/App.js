import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Info from './pages/Info/Info';

function App() {
  return (
    <div className="App">
     <Navbar/>
  
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Info' element={<Info/>}/>
     </Routes>
    </div>
  );
}

export default App;
