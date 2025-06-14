import { GlobalStyle } from '../shared/styles/GlobalStyle';

import { Header } from "../widgets/Header";
import { Main } from "../pages/Main";


function App() {

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </>
  );
}

export default App;
