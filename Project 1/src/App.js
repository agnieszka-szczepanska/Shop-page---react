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
import { useEffect } from "react";

const StyledApp = styled.div`
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  .app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
  }
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
  const [data, setData] = useState(UsersData);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(UsersData);

  const handleDelete = (id) => {
    setData(data.filter((e) => e.id !== id));
  };

  useEffect(() => {
    return () => {
      setFilteredData(
        data.filter((e) =>
          e.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    };
  }, [searchInput, data]);

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
              <>{filteredData.length === 0 && <p>Users list empty!</p>}</>
              <Users
                users={filteredData}
                handleDelete={handleDelete}
                handleSearch={setSearchInput}
              ></Users>
            </Content>
          </StyledMiddleContainer>
          <Footer text="&copy; 2023 Copyright: Agnieszka Szczepańska"></Footer>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
