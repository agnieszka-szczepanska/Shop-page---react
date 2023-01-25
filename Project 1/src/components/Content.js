import styled from "styled-components";
import Users from "./Users";

const ContentStyled = styled.div`
  font-size: 1.2rem;
  padding: 20px;
  width: 40%;
`;

function Content(props) {
  return <ContentStyled>{props.children}</ContentStyled>;
}

export default Content;
