import styled from "styled-components";

const HeaderContent = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  height: 15vh;
  font-size: 2rem;
  padding-top: 40px;
  text-align: center;
  /* color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.body}; */
`;

function Header() {
  return <HeaderContent>Header</HeaderContent>;
}

export default Header;
