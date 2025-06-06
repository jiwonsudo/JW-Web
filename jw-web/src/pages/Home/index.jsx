import Header from "./Header";
import Background from "../../shared/styles/Background";
import Navbar from "../../shared/styles/Navbar";

const Home = ({ theme, setTheme }) => {
  return (
      <Background>
        <Navbar theme={theme}></Navbar>
        <Header/>
      </Background>
    );
}

export default Home;