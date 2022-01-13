import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Box from './Components/Box/Box';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
    return (
        <div>
            <div className="color-2" />
            <div className="color-1" />
            <Navbar />
            <About />
            <Box />
            <Footer />
        </div>
    );
}

export default App;
