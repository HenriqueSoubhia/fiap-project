import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <Image src={'/svg/logo.svg'} alt='Logo FIAP' width={86} height={25} />

            
        </nav>
    )
}

export default Navbar
