import { Container } from "react-bootstrap";
import "./App.css";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
      <Container className="my-5 mainPage">
        <Titulo></Titulo>
        <FormularioTarea></FormularioTarea>
      </Container>
      <footer className="text-center bg-dark text-light py-4">
        <p>Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
