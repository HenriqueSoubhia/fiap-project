import Image from 'next/image';
import React from 'react';
import Title from '../Title';
import Paragraph from '../Paragraph';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import {
  StyledHeaderBanner,
  StyledHeaderBannerContainer,
  StyledHeaderBannerContent,
  StyledScrollDown,
  StyledScrollDownImageContainer,
  StyledTitleSpanNormal,
} from './styles';

const HeaderBanner = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      const fadeInLeftElements = gsap.utils.toArray('.fade-in-left');

      tl.fromTo(
        fadeInLeftElements,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: .8,
          stagger: { each: 0.2 }, 
        },
        '<' 
      ).fromTo(
        '.fade-in',
        { opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        '<50%'
      );
    },
    { scope: container },
  );


  return (
    <StyledHeaderBanner id='headerBanner'>
      <StyledHeaderBannerContainer ref={container}>
        <StyledHeaderBannerContent>
          <Title headingSize='h1' variant='outline-pink'>
            <span className='fade-in-left'>A maior faculdade</span>
            <StyledTitleSpanNormal className='fade-in-left'>De tecnologia</StyledTitleSpanNormal>
          </Title>
          <Paragraph className='headerBanner-paragraph-desktop fade-in-left'>
            Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que prepara
            profissionais para o futuro, com um ensino prático, professores atuantes no mercado e
            desafios reais que conectam os alunos às grandes empresas.
          </Paragraph>
        </StyledHeaderBannerContent>

        <StyledScrollDown className='fade-in' href='#about'>
          <small>scroll down</small>
          <StyledScrollDownImageContainer>
            <Image
              src={'/svg/scroll-down-arrow.svg'}
              width={16}
              height={40}
              alt='icone seta virada para baixo'
            />
          </StyledScrollDownImageContainer>
        </StyledScrollDown>
      </StyledHeaderBannerContainer>
      <Paragraph className='headerBanner-paragraph-mobile'>
        Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que prepara
        profissionais para o futuro, com um ensino prático, professores atuantes no mercado e
        desafios reais que conectam os alunos às grandes empresas.
      </Paragraph>
    </StyledHeaderBanner>
  );
};

export default HeaderBanner;
