import { Button, Form } from "react-bootstrap";
import Lista from "./lista";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar la tarea en el array tareas//
    setTareas([...tareas, tarea]);
    // limpiar el value del input//
    setTarea("");
  };

  // crear una funcion para borrar tarea//
  const borrarTarea = (tareaBorrar) => {
    let listaTareaFiltrada = tareas.filter(
      (itemTarea) => itemTarea !== tareaBorrar
    );
    setTareas(listaTareaFiltrada);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <Lista listaProps={tareas} borrarTarea={borrarTarea}></Lista>
    </>
  );
};

export default FormularioTarea;
