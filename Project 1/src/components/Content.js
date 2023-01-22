import styled from "styled-components";

const ContentStyled = styled.div`
  font-size: 2rem;
  height: 80vh;
  /* color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.body}; */
`;

function Content() {
  return <ContentStyled>Content</ContentStyled>;
}

export default Content;
