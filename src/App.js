import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Contact from './components/contact';
import About from './components/about'
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Footer from './components/footer';

function App() {
  const [activePage, setPage] = useState('about');
  

  const handleNavigation = (section) => {
    setPage(section);
  };

  return (
    <div className="App">
      <Header activePage={activePage} handleNavigation={handleNavigation} />
      {activePage === "about" && <About />}
      {activePage === "portfolio" && <Portfolio />}
      {activePage === "contact" && <Contact />}
      {activePage === "resume" && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
