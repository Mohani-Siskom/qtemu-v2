import React from 'react';
import './button.css';

const Button = ({ bgColor, children}) => {
    return <button style={{ backgroundColor: bgColor , color : bgColor  === 'white' ? '#333' : 'white'}} className='button'>{children}</button>
};

export default Button;