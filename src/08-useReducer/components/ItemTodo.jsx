export const ItemTodo = ({ todo, onDeleteTodo, onToggleTodo }) => {
  // Desestructurando la descripción
  const { description } = todo;
  // Retornando item de todo único con su descripción
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {" "}
        {description}{" "}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
