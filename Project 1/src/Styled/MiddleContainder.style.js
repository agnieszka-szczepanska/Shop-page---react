import styled from "styled-components";

export const StyledMiddleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: cenetr;
  font-size: 20px;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
`;
