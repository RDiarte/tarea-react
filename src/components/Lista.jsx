import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const Lista = ({ listaProps }) => {
  return (
    <ListGroup>
      {listaProps.map((tareaListada, posicion) => (
        <ItemTarea key={posicion}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default Lista;
