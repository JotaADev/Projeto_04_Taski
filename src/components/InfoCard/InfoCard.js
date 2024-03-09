import React from 'react';
import './style.css';

const InfoCard = ({title, srcImage, text}) => {
    return (
        <>
            <div className='box-info-card'>
                <h3 className='title-info-card'>{title}</h3>
                <img src={srcImage} width='80%'/>
                <p className='text-info-card'>{text}</p>
            </div>
        </>
    );
}

export default InfoCard;