import styled from "styled-components";
import Users from "./Users";

const ContentStyled = styled.div`
  font-size: 1.2rem;
  height: 60vh;
  padding: 20px;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
`;

function Content(props) {
  return <ContentStyled>{props.children}</ContentStyled>;
}

export default Content;
