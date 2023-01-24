import styled from "styled-components";

const SidebarStyled = styled.div`
  height: 60vh;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;

  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
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
