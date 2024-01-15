import { ItemTodo } from "./ItemTodo";

// Función recibe todos los todos
export const ListTodo = ({ todos = [],onDeleteTodo,onToggleTodo }) => {
  // Retorna la iteración de todos los todos asignando una key a cada uno y llamando a ItemTodo
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <ItemTodo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};
