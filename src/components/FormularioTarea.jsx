import { Button, Form } from "react-bootstrap";
import Lista from "./lista";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  return (
    <>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button variant="primary">Agregar</Button>
        </Form.Group>
      </Form>
      <Lista></Lista>
    </>
  );
};

export default FormularioTarea;
