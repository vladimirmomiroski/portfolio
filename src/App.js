import "./App.css";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "./context/Context";
import Navbar from "./components/navbar/Navbar";
import Header from "../src/sections/header/Header";
import About from "../src/sections/about/About";
import Projects from "../src/sections/projects/Projects";
import MainSectionSkills from "./sections/skills/MainSectionSkills";
import Footer from "../src/components/footer/Footer";
import ContactModal from "./components/contactModal/ContactModal";

function App() {
  const { isActiveContactModal, theme } = useContext(Context);
  const whichTheme = theme ? "bgDark" : "bgLight"  
  const contactModal = document.getElementById("contactModal");

  return (
    <div className="App">
      <div className={whichTheme}>
        <Navbar />
        <Header />
        <About />
        <MainSectionSkills />
        <Projects />
        <Footer />
        {isActiveContactModal &&
          ReactDOM.createPortal(<ContactModal />, contactModal)}
      </div>
    </div>
  );
}

export default App;
