"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.chineseBlack};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;   
    width: 100%;   
    position: fixed;
    top: 0;
    z-index: 1000;
    

`

const Navbar = () => {
    return (
        <StyledNav>
            <Link href={'/'}>
                <Image src={'/svg/logo.svg'} alt='Logo FIAP' width={86} height={25} />
            </Link>

        </StyledNav>
    )
}

export default Navbar
