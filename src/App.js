import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Process from './components/Process';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Services />
                <Projects />
                <Process /> {/* Now included in the main section */}
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
