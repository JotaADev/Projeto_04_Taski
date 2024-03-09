import React from 'react';
import './style.css';
import { optionsPrice, clientsComment, inforCardsContent } from './Data';

// Components:
import NavBar from '../../components/NavBar/NavBar';
import { StyledButton } from '../../components/StyledButton/StyledButton';
import InfoCard from '../../components/InfoCard/InfoCard';
import PriceCard from '../../components/PriceCard/PriceCard';
import SwiperComments from '../../components/SwiperComments/SwiperComments';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <NavBar/>
            <main>
                <div className='banner'>
                    <div className='content-banner'>
                        <h1 className='title-banner'>Centralize, organize e resolva: a gestão de chamados nunca foi tão fácil!</h1>
                        <StyledButton>Comece agora</StyledButton>
                    </div>
                    <div className='box-img-banner'>
                        <img className='img-banner' src='img/product_illustration.png'/>
                    </div>
                </div>
                <h2 className='subtitle'>Gestão <span className='custom-word'>customizada</span> e inteligente de chamados para você</h2>
                <div className='grid-card'>
                    {inforCardsContent.map((info) => (
                        <InfoCard key={info.id}
                            title={info.title}
                            srcImage={info.src}
                            text={info.text}
                        />
                    ))}
                </div>
                <h2 className='subtitle'>Escolha o melhor plano para você e sua <span className='custom-word'>equipe!</span></h2>
                <div className='grid-card-price'>
                    {optionsPrice.map((plan) => (
                        <PriceCard key={plan.plan}
                            title={plan.plan}
                            price={plan.price}
                            options={plan.options}
                        />
                    ))}
                </div>
                <h2 className='subtitle-price'>Sua equipe é ainda maior? Não tem problema, entre em contato com um de nossos <a href='/' className='custom-word'>especialistas!</a></h2>
                <h2 className='subtitle'>Veja o que os nossos <span className='custom-word'>clientes</span> tem a dizer!</h2>
                <div className='swiper-area'>
                    <SwiperComments comments={clientsComment}/>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home;