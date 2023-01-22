import styled from "styled-components";

const SidebarStyled = styled.div`
  height: 70vh;
  font-size: 2rem;
  display: flex;
  flex-direction: column;

  /* color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.body}; */
`;

export function Sidebar(props) {
  return (
    <SidebarStyled>
      {props.menuItems.map((e) => (
        <a href="{e.link}" key="e.name">
          {e.name}
        </a>
      ))}
    </SidebarStyled>
  );
}

export default Sidebar;
