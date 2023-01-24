import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: gray;
    color: white;
  }
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
`;

function Button(props) {
  const changeColor = () => {
    props.setTheme(!props.theme);
  };

  return <ButtonStyled onClick={changeColor}>Change color theme</ButtonStyled>;
}

export default Button;
