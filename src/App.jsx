import Cabecalho from "./components/Cabecalho"; /* importando o Cabecalho */

import Home from "./pages/Home";
import ClassicRock from "./pages/ClassicRock";
import HeavyMetal from "./pages/HeavyMetal";
import Container from "./components/Container";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={ClassicRock} exact path="/ClassicRock" />
            <Route Component={HeavyMetal} exact path="/HeavyMetal" />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
