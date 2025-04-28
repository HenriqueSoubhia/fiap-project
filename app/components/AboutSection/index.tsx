import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <section>
            <h2>educação e tech</h2>

            <div>
                <p>
                    A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender.
                </p>

                <Image src="" alt='Logotipo FIAP Next' />

                <small>
                    Figura 1 - Logotipo da FIAP NEXT
                </small>
            </div>

            <div>
                <p>
                    Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem diversas áreas, incluindo:
                </p>


                <ul>
                    <li>
                        <span>
                            Tecnologia e Desenvolvimento
                        </span>

                        <ul>
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
                        </ul>
                    </li>
                    <li>
                        UX/UI, Marketing Digital
                    </li>
                    <li>
                        Metodologias e Gestão
                    </li>
                </ul>

                <p>
                    Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas.
                </p>
            </div>




        </section>
    )
}

export default AboutSection
