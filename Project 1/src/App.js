import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { StyledMiddleContainer } from "./Styled/MiddleContainder.style";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <StyledMiddleContainer>
        <Sidebar></Sidebar>
        <Content></Content>
      </StyledMiddleContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
