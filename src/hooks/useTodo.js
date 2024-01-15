import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
// Esta es el 3er parámetro que recibe el reducer y es una función
// para obtener los datos por primera vez (no sobreescribir lo del storage)
const init = () => {
  // Utiliza JSON.parse que es lo opuesto a JSON.stringify y convierte a objeto
  // lo almacenado en localStorage con nombre todos
  //? en caso de que no encuentre el item devuelve un arreglo vacío
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  // * Estos son datos para mostrarlos en el header
  // * Esta es la cantidad de todos existentes
  const todosCount = todos.length
  // * Esta es la cantidad de todos que no se han completado
  const pendingTodos = todos.filter(todo => !todo.done).length

  // TODO: En esta parte se guardan los todos al LocalStorage
  useEffect(() => {
    //* LocalStorage viene por defecto para su uso
    // Los argumentos que recibe son un nombre y el contenido serealizado
    //! LOS OBJETOS NO SE PUEDEN GUARDAR EN LOCAL STORAGE
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Cuando ya tengo un nuevo todo se dispara lo de abajo y recibe de parámetro el todo nuevo
  const handleNewTodo = (todo) => {
    // Se crea la action que disparará el reducer
    // Esta se debe componer del type (para saber qué hacer)
    // y la payload (carga de datos por agregar en este caso)
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    // Se envía al reducer con dispatch y solo ocupa la action
    dispatch(action);
    // Al terminar el cambio de estado react vuelve a renderizar los estados modificados
  };
  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };
    // Se envía al reducer con dispatch y solo ocupa la action
    dispatch(action);
  };
  const onToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };
    dispatch(action);
  };
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    todosCount,
    pendingTodos
  };
};
