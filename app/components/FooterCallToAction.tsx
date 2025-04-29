import styled from "styled-components"
import Button from "./Button"
import Title from "./Title"

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0;
`


const FooterCallToAction = () => {
  return (
    <StyledFooter>

      <Title style={{marginBottom: 75}} headingSize='h2' variant='pastelBlue'>Quer saber mais?</Title>


      <Button href="/">Entre em contato</Button>

    </StyledFooter>
  )
}

export default FooterCallToAction
