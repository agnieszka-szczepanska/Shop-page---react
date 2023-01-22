import styled from "styled-components";

const FooterStyled = styled.div`
  font-size: 1rem;
  height: 15vh;
  text-align: center;
  /* color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.body}; */
`;

function Footer() {
  return <FooterStyled>Footer</FooterStyled>;
}

export default Footer;
