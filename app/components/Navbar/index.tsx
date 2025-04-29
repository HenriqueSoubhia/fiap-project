"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.chineseBlack};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;   
    width: 100%;   
    position: fixed;
    top: 0;
    z-index: 50;
`

const StyledprogressBar = styled.div<{ $progress: number }>`
    background-color: ${({ theme }) => theme.colors.magenta};
    width: ${({ $progress }) => $progress}%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease-in-out;
`



const Navbar = () => {

    const [scrollProgress, setScrollProgress] = React.useState(0);

    useEffect(() => {
        const handleScroll = () => {

            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollBottom = documentHeight - windowHeight;
            const scrollPercent = (scrollTop / scrollBottom) * 100;

            setScrollProgress(scrollPercent);

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <StyledNav>
            <Link href={'#headerBanner'}>
                <Image src={'/svg/logo.svg'} alt='Logo FIAP' width={86} height={25} />
            </Link>
            <StyledprogressBar $progress={scrollProgress} />
        </StyledNav>
    )
}

export default Navbar
