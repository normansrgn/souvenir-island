import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;
