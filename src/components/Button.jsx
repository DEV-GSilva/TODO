import React, { Children } from 'react';

import './Button.css'

const Button = ({ children, onClick }) => {
    return <button onClick={onClick} className='button'>
        {children}
    </button>;
}

<Button>Adicionar</Button>

export default Button;