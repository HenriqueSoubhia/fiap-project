import React from 'react';
import Title from '../Title';
import Paragraph from '../Paragraph';
import ImageModal from './ImageModal';
import {
  StyledArticle,
  StyledImageDiv,
  StyledListDiv,
  StyledMainList,
  StyledSection,
  StyledTechList,
} from './styles';

const AboutSection = () => {
  return (
    <StyledSection id='about'>
      <Title headingSize='h2' variant='black'>
        educação e tech
      </Title>

      <StyledArticle>
        <StyledImageDiv>
          <Paragraph>
            A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de
            inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a
            instituição é referência quando se trata de formar profissionais capacitados para os
            desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um
            ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de
            ponta ou até mesmo empreender.
          </Paragraph>

          <ImageModal />
        </StyledImageDiv>

        <StyledListDiv>
          <Paragraph>
            Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina
            apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem
            diversas áreas, incluindo:
          </Paragraph>

          <StyledMainList>
            <li>
              Tecnologia e Desenvolvimento
              <StyledTechList>
                <li>Desenvolvimento de Software</li>
                <li>Inteligência Artificial</li>
                <li>Data Science</li>
                <li>Cibersegurança</li>
              </StyledTechList>
            </li>
            <li>UX/UI, Marketing Digital</li>
            <li>Metodologias e Gestão</li>
          </StyledMainList>

          <Paragraph>
            Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras
            abordagens inovadoras que fazem parte do dia a dia de grandes empresas.
          </Paragraph>
        </StyledListDiv>
      </StyledArticle>
    </StyledSection>
  );
};

export default AboutSection;
