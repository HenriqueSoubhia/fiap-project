import styled from "styled-components";

interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {
    children: React.ReactNode;
}

const StyledParagraph = styled.p`
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`

const Paragraph = ({ children, ...props }: ParagraphProps) => {
    return (
        <StyledParagraph {...props}>
            {children}
        </StyledParagraph>
    )
}

export default Paragraph
