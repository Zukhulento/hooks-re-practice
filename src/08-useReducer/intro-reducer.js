//* Primero definimos el estado inicial, con esto empieza la app
const initialState = [
  { id: 1, todo: "Recolectar las gemas del infinito,", done: false },
];
//* Luego se crea un reducer para controlar los verbos a nivel de estado
const todoReducer = (state = initialState, action = {}) => {
  // Se valida el action type
  if (action.type == "[TODO] Add todo") {
    // De esta manera se actualiza el estado agregando el payload
    return [...state, action.payload];
  }
};
// En este caso se utiliza una variable para llamar almacenar la respuesta del
// reducer
let todos = todoReducer();
// Se crea un nuevo todo
const newTodo = {
  id: 2,
  todo: "Recolectar la gema del poder,",
  done: false,
};
// Se crea una nueva const para almacenar el action
// y se le carga con el payload y el tipo de action
const addTodoAction = { type: "[TODO] Add todo", payload: newTodo };

// Luego se llama al reducer y se le pasa la action creada recién
todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
