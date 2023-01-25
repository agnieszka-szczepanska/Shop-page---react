import styled from "styled-components";

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.2rem;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
