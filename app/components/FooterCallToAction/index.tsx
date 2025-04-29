import styled from "styled-components"
import Button from "../Button"

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0;
`

const StyledH2 = styled.h2`
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.pastelBlue};
    margin-bottom: 3.5rem;

`

const FooterCallToAction = () => {
  return (
    <StyledFooter>
      <StyledH2>Quer saber mais?</StyledH2>

      <Button href="/">Entre em contato</Button>

    </StyledFooter>
  )
}

export default FooterCallToAction
