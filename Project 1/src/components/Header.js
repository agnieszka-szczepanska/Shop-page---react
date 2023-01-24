import styled from "styled-components";

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  font-size: 2rem;
  padding: 20px;

  color: ${(props) => props.theme.third};
  background-color: ${(props) => props.theme.secondary};
  img {
    width: 200px;
  }
`;

function Header(props) {
  return (
    <HeaderContent>
      <img src={props.logoSrc} />
      {props.title}
      {props.children}
    </HeaderContent>
  );
}

export default Header;
