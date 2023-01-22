import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Users from "./components/Users";
import { StyledMiddleContainer } from "./Styled/MiddleContainder.style";
import { UsersData } from "./data/users-data";
import { MenuItems } from "./data/menu-items";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <StyledMiddleContainer>
        <Sidebar menuItems={MenuItems}></Sidebar>
        <Content>
          <Users users={UsersData}></Users>
        </Content>
      </StyledMiddleContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
