import React from 'react';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { StyledDialog, StyledFigure } from './styles';



const ImageModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { contextSafe } = useGSAP({ scope: dialogRef });

  const handleDialog = contextSafe(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (dialog.open) {
      gsap.to(dialog, { opacity: 0, duration: 0.5, onComplete: () => dialog.close() });
      document.body.style.overflow = '';
    } else {
      dialog.show();
      gsap.fromTo(dialog, { opacity: 0, duration: 0.5 }, { opacity: 1 });
      document.body.style.overflow = 'hidden';
    }
  });



  return (
    <>
      <StyledFigure>
        <img onClick={handleDialog} src='/imgs/fiap-next.jpg' alt='Logotipo FIAP Next'/>

        <figcaption>Figura 1 - Logotipo da FIAP NEXT</figcaption>
      </StyledFigure>
      <StyledDialog ref={dialogRef}>
        <button onClick={handleDialog}>x</button>
        <img onClick={handleDialog} src='/imgs/fiap-next.jpg' alt='Logotipo FIAP Next' />
      </StyledDialog>
    </>
  );
};

export default ImageModal;
