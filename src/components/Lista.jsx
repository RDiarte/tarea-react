import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const Lista = ({ listaProps }) => {
  return (
    <ListGroup>
      {listaProps.map(() => (
        <ItemTarea></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default Lista;
