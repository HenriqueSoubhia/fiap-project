import styled, { css } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const buttonStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.magenta};
  border: 2px solid ${({ theme }) => theme.colors.magenta};
  border-radius: 0;
  outline: none;
  text-transform: uppercase;
  padding: 20px 60px;
  font-weight: 500;
  display: inline-block;
  text-align: center;
  text-decoration: none;

  font-size: 30px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.magenta};
    color: white;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const StyledLink = styled.a`
  ${buttonStyles}
`;

const Button = ({ children, href, onClick, ...props }: ButtonProps) => {
  if (href) {
    return <StyledLink {...props} href={href}>{children}</StyledLink>;
  }

  return <StyledButton {...props} onClick={onClick}>{children}</StyledButton>;
};

export default Button;
