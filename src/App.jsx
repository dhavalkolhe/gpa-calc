import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Box from './Box';
import Footer from './Footer';
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
