"use client"

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.chineseBlack};   
`

const Navbar = () => {
    return (
        <StyledNav>
            <Image src={'/svg/logo.svg'} alt='Logo FIAP' width={86} height={25} />


        </StyledNav>
    )
}

export default Navbar
