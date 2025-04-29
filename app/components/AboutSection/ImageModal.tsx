import React from "react";
import styled from "styled-components";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const StyledFigure = styled.figure`
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: "Roboto";
    font-weight: 400;

    img{
        cursor: url('/svg/cursor-open.svg'), pointer;

    }

    figcaption{
        font-size: 16px;
    }

    @media (max-width: 768px) {
        figcaption{
            font-size: 12px;
        }
    }
`

const StyledDialog = styled.dialog`
    border: none;
    outline: none;

    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: 101;

    justify-content: center;
    align-items: center;

    &[open]{
        display: flex;
    }
    

    button{
        position: fixed;
        top: 32px;
        right: 32px;
        background: transparent;
        border: none;
        color: white;
        font-size: 3rem;
        cursor: pointer;
        z-index: 101;
    }

    img{
        height: 600px;
        cursor: url('/svg/cursor-close.svg'), pointer;
    }

    @media (max-width: 768px) {
        img{
            height: auto;
            width: 100vw;
        }
    }


`

const ImageModal = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const { contextSafe } = useGSAP({ scope: dialogRef });

    const handleDialog = contextSafe(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (dialog.open) {
            gsap.to(dialog, { opacity: 0, duration: .5, onComplete: () => dialog.close() })

        } else {
            dialog.show()
            gsap.fromTo(dialog, { opacity: 0, duration: .5 }, {opacity: 1})
        }

    })


    


    return (
        <>
            <StyledFigure>
                <img onClick={handleDialog} src="/imgs/fiap-next.jpg" alt='Logotipo FIAP Next' />

                <figcaption>
                    Figura 1 - Logotipo da FIAP NEXT
                </figcaption>
            </StyledFigure>
            <StyledDialog open ref={dialogRef}>
                <button onClick={handleDialog} >x</button>
                <img onClick={handleDialog} src="/imgs/fiap-next.jpg" alt='Logotipo FIAP Next' />
            </StyledDialog>

        </>
    )
}

export default ImageModal
