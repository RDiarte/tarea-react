import { Button, Form } from "react-bootstrap";
import Lista from "./lista";
import { useEffect, useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");

  let tareasLocalStorage = JSON.parse(localStorage.getItem("tareas")) || [];

  const [tareas, setTareas] = useState(tareasLocalStorage);

  //Esta version de useEffect se ejecuta en montaje y actualizacion del state Lista

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  //esta version se ejecuta en el montaje y actualizacion de todos los estados

  //useEffect(() => { console.log("Esto fue ejecutado con useEffect"), } [lista]);

  //Solo para usar useEffect en montaje

  //useEffect(() => { }

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
