import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Resume />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
