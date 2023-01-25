import styled from "styled-components";

const FooterStyled = styled.div`
  font-size: 0.8rem;
  padding-bottom: 50px;
  text-align: center;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
`;

function Footer(props) {
  return <FooterStyled>{props.text}</FooterStyled>;
}

export default Footer;
