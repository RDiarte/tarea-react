import { Button, Form } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const FormularioTarea = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant="primary">Agregar</Button>
        </Form.Group>
      </Form>
      <ItemTarea></ItemTarea>
    </>
  );
};

export default FormularioTarea;
