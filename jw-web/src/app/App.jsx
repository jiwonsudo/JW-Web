import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

import { ThemeProvider } from "styled-components";
import GlobalStyle from '../shared/styles/GlobalStyle';
import { lightTheme, darkTheme } from '../shared/styles/theme';


function App() {
  const [theme, setTheme] = useState('light');

  const currTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currTheme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
