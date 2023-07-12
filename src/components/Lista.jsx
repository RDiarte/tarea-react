import { Button, ListGroup, ListGroupItem } from "react-bootstrap";

const Lista = () => {
  return (
    <ListGroup>
      <ListGroup.Item>
        Ingrese una tarea <Button variant="primary">Enviar</Button>
      </ListGroup.Item>

      <ListGroup.Item>
        Planificar <Button variant="danger">Borrar</Button>
      </ListGroup.Item>
      <ListGroup.Item>
        Maquetar <Button variant="danger">Borrar</Button>
      </ListGroup.Item>
      <ListGroup.Item>
        Codear <Button variant="danger">Borrar</Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Lista;
