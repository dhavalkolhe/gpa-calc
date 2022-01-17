import React from 'react';
import './Box.css';
import Main from '../Main/Main';

function Box() {
    return (
        <div className="Main">
            <span className='mobile-span'>😉 Slide for more {`-->`}</span>
            <Main />
        </div>
    );
}

export default Box;
