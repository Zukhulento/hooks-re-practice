export const ItemTodo = ({todo}) => {
    // Desestructurando la descripción
    const {description} = todo
    // Retornando item de todo único con su descripción
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center"> {description} </span>
      <button className="btn btn-danger">Borrar</button>
    </li>
  );
};
