import React from 'react'
import styled from 'styled-components';
import Title from '../Title';
import Paragraph from '../Paragraph';
import ImageModal from './ImageModal';

const StyledSection = styled.section`
    display:flex;
    flex-direction:column;
    gap: 75px;
    padding: 200px 128px;
    background-color: ${({ theme }) => theme.colors.cultured};
    
    @media (max-width: 768px) {
        gap: 50px;
        padding: 100px 24px;
    }
`;


const StyledArticle = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 90px; 
    gap: 120px;
    color: ${({ theme }) => theme.colors.davysGrey};
    text-align: justify;
    
    @media (max-width: 768px) {
        gap: 50px;
        grid-template-columns: 1fr;
        padding: 0;
    }

`

const StyledImageDiv = styled.div`
    display: flex;
    flex-direction: column ;
    gap:50px;
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
    font-size: 20px;

    > li::before{
        content: '/';
        margin: 0 16px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.magenta};
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
    
`
const StyledTechList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    

    li{
        font-size: 18px;
        color: ${({ theme }) => theme.colors.magenta};
        &::before{
            content: '-';
            margin-left: 32px;
            margin-right: 12px;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.magenta};
        }
    }

    @media (max-width: 768px) {
        li{            
            font-size: 16px;
        }
    }
    
`




const AboutSection = () => {



    return (
        <StyledSection id='about'>

            <Title headingSize='h2' variant='black'>educação e tech</Title>


            <StyledArticle>
                <StyledImageDiv>
                    <Paragraph>
                        A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender.
                    </Paragraph>

                    <ImageModal />


                </StyledImageDiv>

                <StyledListDiv>
                    <Paragraph>
                        Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem diversas áreas, incluindo:
                    </Paragraph>


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

                    <Paragraph>
                        Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas.
                    </Paragraph>
                </StyledListDiv>

            </StyledArticle>





        </StyledSection>
    )
}

export default AboutSection
