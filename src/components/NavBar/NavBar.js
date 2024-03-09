import "./style.css";
import React from 'react';
import { useState, useEffect } from 'react';
import { SignUpButton } from '../SignUpButton/SignUpButton';
import { LoginButton } from '../LoginButton/LoginButton';
import { FiAlignRight } from "react-icons/fi";

const NavBar = () => {

    const [toggle, setToggle] = useState(false);
    const [scroll, setScroll] = useState(false);

    function toggleHamburguer (e) {
        e.preventDefault();
        setToggle(!toggle);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if(scrollTop > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
            <header>
                <nav className={scroll ? 'scrolled' : ''}>
                    <a id='logo' href='/'>
                        <img src='img/logo_taski.png' height='100%'/>
                    </a>
                    <span id='hamburguer' onClick={toggleHamburguer}>
                        <FiAlignRight size='2.5rem' color='#114B5F'/>
                    </span>
                    <div id='button-group' className={toggle ? 'show' : ''}>
                        <LoginButton>Login</LoginButton>
                        <SignUpButton>Cadastre-se</SignUpButton>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default NavBar;