import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const Lista = ({ listaProps, borrarTarea }) => {
  return (
    <ListGroup>
      {listaProps.map((tarea, posicion) => (
        <ItemTarea
          key={posicion}
          nombreTarea={tarea}
          borrarTarea={borrarTarea}
        ></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default Lista;
