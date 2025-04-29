import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Title from '../Title'

const StyledHeaderBanner = styled.header`
    background-image: url('/imgs/header.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position:  25% center;
    height: 85vh;
    margin-top: 1rem;
    width: 100%;    
    position: relative;
    display: flex;
    justify-content: center;
`

const StyledHeaderBannerContent = styled.div`
    background: linear-gradient(90deg, #000000 30%, rgba(16, 16, 16, 0) 100%);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 6rem;
    color: ${({ theme }) => theme.colors.pastelBlue};
    
    
    span{
        display: block;
        line-height: 1.5;
    }
    
    p{
        width: 48%;
        font-size: 1rem;
    }
    `

const StyledTitleSpanNormal = styled.span`
    color: ${({ theme }) => theme.colors.pastelBlue};
    -webkit-text-stroke-color: transparent;
    -webkit-text-stroke-width: 0;
`

const StyledScrollDown = styled.a`

    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.pastelBlue};

    position: absolute;
    bottom: 80px;

    font-size: .7rem;
    line-height: 3;
    font-weight: 500;

    @media (max-width: 768px) {
        display: none;
        
    }

    
`

const StyledScrollDownImageContainer = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.pastelBlue};
    display: flex;
    justify-content: center;
    align-items: center;

`

const HeaderBanner = () => {
    return (
        <StyledHeaderBanner id='headerBanner'>
            <StyledHeaderBannerContent>
                <Title headingSize='h1' variant='outline-pink'>
                    <span>
                        A maior faculdade
                    </span>
                    <StyledTitleSpanNormal>
                        De tecnologia
                    </StyledTitleSpanNormal>
                </Title>
                <p>
                    Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que prepara profissionais para o futuro, com um ensino prático, professores atuantes no mercado e desafios reais que conectam os alunos às grandes empresas.
                </p>
            </StyledHeaderBannerContent>

            <StyledScrollDown href='#about'>
                <small>scroll down</small>
                <StyledScrollDownImageContainer>
                    <Image src={"/svg/scroll-down-arrow.svg"} width={16} height={40} alt='icone seta virada para baixo' />
                </StyledScrollDownImageContainer>
            </StyledScrollDown>

        </StyledHeaderBanner>
    )
}

export default HeaderBanner
