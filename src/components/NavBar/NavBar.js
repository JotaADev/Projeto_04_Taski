import "./style.css";
import React from 'react';
import { useState } from 'react';
import { SignUpButton } from '../SignUpButton/SignUpButton';
import { LoginButton } from '../LoginButton/LoginButton';
import { FiAlignRight } from "react-icons/fi";

const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    function toggleHamburguer (e) {
        e.preventDefault();
        setToggle(!toggle);
    }

    return (
        <>
            <nav>
                <a id='logo' href='/'>
                    <img src='logo_taski.png' height='100%'/>
                </a>
                <span id='hamburguer' onClick={toggleHamburguer}>
                    <FiAlignRight size='2.5rem' color='#114B5F'/>
                </span>
                <div id='button-group' style={{display: toggle ? 'flex' : 'none'}}>
                    <LoginButton>Login</LoginButton>
                    <SignUpButton>Cadastre-se</SignUpButton>
                </div>
            </nav>
        </>
    );
}

export default NavBar;