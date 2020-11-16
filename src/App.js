import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';




function App() {

  const [page, setPage] = useState("About")
 
  const renderPage = () => {
    switch (page) {
      case "About":
      return <About/>;

      case "Portfolio":
        return <Portfolio/>;

      case "ContactForm":
        return <ContactForm/>

      case "Resume":
        return <Resume/>

      default: return <About/>

    }
  }

  return (
    <div>
      <Nav setPage={setPage}></Nav>
      <main>
        {renderPage()}
      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;