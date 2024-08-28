import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Services />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
