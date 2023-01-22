import styled from "styled-components";
import Users from "./Users";

const ContentStyled = styled.div`
  font-size: 2rem;
  height: 70vh;
  /* color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.body}; */
`;

function Content(props) {
  return <ContentStyled>{props.children}</ContentStyled>;
}

export default Content;
