import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Users from "./components/Users";
import { StyledMiddleContainer } from "./Styled/MiddleContainder.style";
import { UsersData } from "./data/users-data";
import { MenuItems } from "./data/menu-items";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { useState } from "react";
import Button from "./components/Button";

const StyledApp = styled.div`
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
`;
const lightTheme = {
  primary: "#1c1c1c",
  secondary: "#fff",
  third: "#2596BE",
};
const darkTheme = {
  primary: "#fff",
  secondary: "#1c1c1c",
  third: "#fff",
};

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <StyledApp>
        <div className="app">
          <Header
            title={"My First React App"}
            logoSrc="https://st2.depositphotos.com/7813472/12360/v/950/depositphotos_123602062-stock-illustration-rainbow-flower-balloon-logo-and.jpg"
          >
            <Button theme={theme} setTheme={setTheme}></Button>
          </Header>
          <StyledMiddleContainer>
            <Sidebar menuItems={MenuItems}></Sidebar>
            <Content>
              <Users users={UsersData}></Users>
            </Content>
          </StyledMiddleContainer>
          <Footer text="&copy; 2023 Copyright: Agnieszka Szczepańska"></Footer>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
