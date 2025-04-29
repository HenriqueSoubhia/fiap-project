import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Title from '../Title'
import Paragraph from '../Paragraph'

const StyledHeaderBanner = styled.header`
    .headerBanner-paragraph-desktop{
        width: 65%;
    }

    .headerBanner-paragraph-mobile{
        display: none;
        padding: 30px 24px;
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.pastelBlue};
    }

    @media (max-width: 768px) {
        .headerBanner-paragraph-desktop{
            display: none;
        }
        .headerBanner-paragraph-mobile{
            display: block;
        }
    }

`

const StyledHeaderBannerContainer = styled.div`

    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 80px;
    width: 100%;    
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 274px;
    padding-bottom: 248px;
    background-image: linear-gradient(90deg, #000000 30%, rgba(16, 16, 16, 0) 100%), url('/imgs/header.jpg');


    @media (max-width: 768px) {
        padding: 65px 0;
    }
    
    `

const StyledHeaderBannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 128px;
    color: ${({ theme }) => theme.colors.pastelBlue};
    
    
    span{
        display: block;
        line-height: 1.5;
    }
    

    @media (max-width: 768px) {
        padding: 0 24px;
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

    font-size: 12px;
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
            <StyledHeaderBannerContainer>
                <StyledHeaderBannerContent>
                    <Title headingSize='h1' variant='outline-pink'>
                        <span>
                            A maior faculdade
                        </span>
                        <StyledTitleSpanNormal>
                            De tecnologia
                        </StyledTitleSpanNormal>
                    </Title>
                    <Paragraph className='headerBanner-paragraph-desktop'>
                        Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que prepara profissionais para o futuro, com um ensino prático, professores atuantes no mercado e desafios reais que conectam os alunos às grandes empresas.
                    </Paragraph>
                </StyledHeaderBannerContent>

                <StyledScrollDown href='#about'>
                    <small>scroll down</small>
                    <StyledScrollDownImageContainer>
                        <Image src={"/svg/scroll-down-arrow.svg"} width={16} height={40} alt='icone seta virada para baixo' />
                    </StyledScrollDownImageContainer>
                </StyledScrollDown>
            </StyledHeaderBannerContainer>
            <Paragraph className='headerBanner-paragraph-mobile'>
                Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que prepara profissionais para o futuro, com um ensino prático, professores atuantes no mercado e desafios reais que conectam os alunos às grandes empresas.
            </Paragraph>
        </StyledHeaderBanner>
    )
}

export default HeaderBanner
