import React from 'react';
import About from './Components/About/About';
import Box from './Components/Box/Box';
import Footer from './Components/Footer/Footer';
import HeaderTwo from './Components/HeaderTwo/HeaderTwo';
import './App.css';

function App() {
    return (
        <div className='landing'>
            <HeaderTwo />
            <Box />
            <About />
            <Footer />
        </div>
    );
}

export default App;
