import { Container } from "react-bootstrap";
import "./App.css";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import Lista from "./components/lista";

function App() {
  return (
    <Container>
      <Titulo></Titulo>
      <Lista></Lista>
    </Container>
  );
}

export default App;
