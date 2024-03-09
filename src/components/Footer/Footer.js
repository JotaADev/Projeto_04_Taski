import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <>
            <footer>
                <img src='img/logo_taski.png' height='100%'/>
                <p>© 2024 Taski. All Rights Reserved.</p>
                <div className='link-group'>
                    <a href='/' className='link'>Sobre nós</a>
                    <a href='/' className='link'>Entre em contato</a>
                </div>
            </footer>
        </>
    );
}

export default Footer