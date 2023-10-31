import "./App.css";
import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Context } from "./context/Context";
import Navbar from "./components/navbar/Navbar";
import Header from "../src/sections/header/Header";
import About from "../src/sections/about/About";
import Projects from "../src/sections/projects/Projects";
import MainSectionSkills from "./sections/skills/MainSectionSkills";
import Footer from "../src/components/footer/Footer";
import ContactModal from "./components/contactModal/ContactModal";
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop'
import SuccessMessage from './components/successMessage/SuccessMessage';

function App() {
  const { isActiveContactModal, burgerActive, theme, messageOnSubmit } = useContext(Context);
  const whichTheme = theme ? "bgDark" : "bgLight";
  const contactModal = document.getElementById("contactModal");
  const [scrollable, setScrollable] = useState(true);

  useEffect(() => {
    setScrollable(!burgerActive);
  }, [isActiveContactModal, burgerActive]);

  useEffect(() => {
    if (scrollable) {
      document.body.classList.remove("notScrollable");
    } else {
      document.body.classList.add("notScrollable");
    }
  }, [scrollable]);

  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    scrollPosition > 450 ? setScroll(true) : setScroll(false);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const s = window.scrollY;
      setScrollPosition(s);
    });
  }, []);

  return (
    <div>
      <div className={whichTheme}>
        <Navbar />
        <Header />
        <About />
        <MainSectionSkills />
        <Projects />
        <Footer />
        {isActiveContactModal &&
          ReactDOM.createPortal(<ContactModal />, contactModal)}
          {scroll && <ScrollToTop/>}
      </div>
      {messageOnSubmit && <SuccessMessage />}
    </div>
  );
}

export default App;
