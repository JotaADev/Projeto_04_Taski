import React from 'react';
import './style.css';
import { StyledButton } from '../StyledButton/StyledButton';

const PriceCard = ({title, price, options}) => {
    return (
        <>
            <div className='price-card'>
                <h3 className='title-price-card'>{title}</h3>
                <span className='price'>{'R$ ' + price + '/Mês'}</span>
                {options.map((option) => (
                    <div className='option-price-card' key={option}>
                        <img src='img/check_icon_price.png'/>
                        <p>{option}</p>
                    </div>
                ))}
                <StyledButton width='100%'>Quero esse!</StyledButton>
            </div>
        </>
    );
}

export default PriceCard;