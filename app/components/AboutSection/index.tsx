import React from 'react'
import styled from 'styled-components';

const StyledSection = styled.section`
    display:flex;
    flex-direction:column;
    gap: 3rem;
    padding: 200px 90px;
    background-color: ${({ theme }) => theme.colors.cultured};
`;

const StyledH2 = styled.h2`
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};

`

const StyledArticle = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 90px; 
    gap: 120px;
    color: ${({ theme }) => theme.colors.davysGrey};
    text-align: justify;

`

const StyledImageDiv = styled.div`
    display: flex;
    flex-direction: column ;
    gap:50px;
`

const StyledFigure = styled.figure`
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: "Roboto";
    font-weight: 400;

    img{
        cursor: url('/svg/cursor-open.svg'), pointer;

    }
`

const StyledListDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const StyledMainList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;

    > li::before{
        content: '/';
        margin: 0 16px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.magenta};
    }
    
`
const StyledTechList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    

    li{
        font-size: .9rem;
        color: ${({ theme }) => theme.colors.magenta};
        &::before{
            content: '-';
            margin-left: 32px;
            margin-right: 12px;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.magenta};
        }
    }
    
`

const StyledDialog = styled.dialog`
    border: none;
    outline: none;
    margin: auto auto;
    
    &::backdrop {
        background: rgba(0, 0, 0, 0.5);
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
    }

    img{
        height: 600px;
        cursor: url('/svg/cursor-close.svg'), pointer;
    }




`


const AboutSection = () => {

    const dialogRef = React.useRef<HTMLDialogElement>(null);

    const handleDialog = () => {
        if (!dialogRef.current) return;

        dialogRef.current.open ? dialogRef.current.close() : dialogRef.current.showModal();
    }

    return (
        <StyledSection id='about'>
            <StyledH2>educação e tech</StyledH2>

            <StyledArticle>
                <StyledImageDiv>
                    <p>
                        A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender.
                    </p>

                    <StyledFigure>
                        <img onClick={handleDialog} src="/imgs/fiap-next.jpg" alt='Logotipo FIAP Next' />

                        <figcaption>
                            Figura 1 - Logotipo da FIAP NEXT
                        </figcaption>
                    </StyledFigure>


                </StyledImageDiv>

                <StyledListDiv>
                    <p>
                        Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem diversas áreas, incluindo:
                    </p>


                    <StyledMainList>
                        <li>
                            Tecnologia e Desenvolvimento

                            <StyledTechList>
                                <li>
                                    Desenvolvimento de Software
                                </li>
                                <li>
                                    Inteligência Artificial
                                </li>
                                <li>
                                    Data Science
                                </li>

                                <li>
                                    Cibersegurança
                                </li>
                            </StyledTechList>
                        </li>
                        <li>
                            UX/UI, Marketing Digital
                        </li>
                        <li>
                            Metodologias e Gestão
                        </li>
                    </StyledMainList>

                    <p>
                        Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas.
                    </p>
                </StyledListDiv>

            </StyledArticle>

            <StyledDialog ref={dialogRef}>
                <button onClick={handleDialog} >x</button>
                <img onClick={handleDialog} src="/imgs/fiap-next.jpg" alt='Logotipo FIAP Next' />
            </StyledDialog>



        </StyledSection>
    )
}

export default AboutSection
