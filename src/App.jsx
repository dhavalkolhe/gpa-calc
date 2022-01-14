import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Box from './Components/Box/Box';
import Footer from './Components/Footer/Footer';
import './App.css';
import HeaderTwo from './Components/HeaderTwo/HeaderTwo';

function App() {
    return (
        <div className='landing'>
            {/* <div className="color-2" /> */}
            {/* <div className="color-1" /> */}
            {/* <Navbar /> */}
            <HeaderTwo />
            <Box />
            <About />
            <Footer />
        </div>
    );
}

export default App;
