import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Showcase from "../pages/Showcase";

import { ThemeProvider } from "styled-components";
import GlobalStyle from '../shared/styles/GlobalStyle';
import { lightTheme, darkTheme } from '../shared/styles/theme';

import Navbar from "../shared/components/Navbar";


function App() {
  const [theme, setTheme] = useState('light');

  const currTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currTheme}>
      <GlobalStyle/>
      <BrowserRouter>
      <Navbar theme={theme}/>
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>}/>
          <Route path="/about" element={<About theme={theme} setTheme={setTheme}/>}/>
          <Route path="/showcase" element={<Showcase theme={theme} setTheme={setTheme}/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
