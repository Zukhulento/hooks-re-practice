import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { ListTodo } from "./components/ListTodo";
import { AddTodo } from "./components/AddTodo";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar piedra del poder",
    done: false,
  },
];
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  // Cuando ya tengo un nuevo todo se dispara lo de abajo y recibe de parámetro el todo nuevo
  const handleNewTodo = (todo) => {
    // Se crea la action que disparará el reducer
    // Esta se debe componer del type (para saber qué hacer)
    // y la payload (carga de datos por agregar en este caso)
    const action = {
      type:"[TODO] Add Todo",
      payload:todo
    }
    // Se envía al reducer con dispatch y solo ocupa la action
    dispatch(action)
    // Al terminar el cambio de estado react vuelve a renderizar los estados modificados
  }
  return (
    <>
      <h1>Todo APP: 10,<small>pendientes: 2</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* Lista de todos */}
          <ListTodo todos={todos}/>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* Formulario de todos */}
          <AddTodo onAddTodo={handleNewTodo}/>
        </div>
      </div>
    </>
  );
};
