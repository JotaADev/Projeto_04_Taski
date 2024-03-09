import React from 'react';
import './style.css';

// Components:
import NavBar from '../../components/NavBar/NavBar';
import { StyledButton } from '../../components/StyledButton/StyledButton';
import InfoCard from '../../components/InfoCard/InfoCard';

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
                    <InfoCard
                        title='Controle de SLA'
                        srcImage='img/campaign.png'
                        text='Com o nosso sistema, o controle de SLA é uma realidade. Nunca mais perca um prazo importante. Estabeleça tempos de resposta e resolução para cada tipo de chamado, garantindo a satisfação do cliente e a eficiência operacional.'
                    />
                    <InfoCard
                        title='Sistema colaborativo'
                        srcImage='img/meeting.png'
                        text='Fomente a colaboração entre equipes com nossa plataforma. Compartilhe informações, discuta soluções e trabalhe em conjunto para resolver os chamados de forma mais eficaz. Uma comunicação fluida leva a resultados mais rápidos e satisfatórios.'
                    />
                    <InfoCard
                        title='Acesse de qualquer dispositivo'
                        srcImage='img/mobile.png'
                        text='Acesse nosso sistema de gestão de chamados de onde estiver. Seja no escritório, em casa ou em trânsito, tenha sempre acesso às informações necessárias para gerenciar seus chamados. Não importa se é desktop, tablet ou smartphone, estamos sempre disponíveis para você.'
                    />
                </div>
            </main>
        </>
    );
}

export default Home;