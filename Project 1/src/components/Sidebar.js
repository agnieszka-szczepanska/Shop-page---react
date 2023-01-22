import styled from "styled-components";

const SidebarStyled = styled.div`
  height: 80vh;
  font-size: 2rem;
  /* color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.body}; */
`;

export function Sidebar() {
  return <SidebarStyled>Sidebar</SidebarStyled>;
}

export default Sidebar;
