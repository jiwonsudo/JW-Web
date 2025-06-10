import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../shared/i18n';

import Home from "../pages/Home";
import About from "../pages/About";
import Showcase from "../pages/Showcase";
import GlobalStyle from '../shared/styles/GlobalStyle';

import Header from "../widgets/Header";


function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/showcase" element={<Showcase/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
