import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../shared/i18n';

import Home from "../pages/Home";
import About from "../pages/About";
import Showcase from "../pages/Showcase";
import GlobalStyle from '../shared/styles/GlobalStyle';

import Navbar from "../shared/components/Navbar/Navbar";


function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/showcase" element={<Showcase/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
