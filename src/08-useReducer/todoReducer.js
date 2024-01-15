export const todoReducer = (initialState = [], action) => {
  // Esta es la primera action y agrega un nuevo todo
  switch (action.type) {
    case "[TODO] Add Todo":
      // Se utiliza el operador spread para mantener datos anteriores y sólo se le agrega la payload
      return [...initialState, action.payload];
    case "[TODO] Remove Todo":
      // Se utiliza el filter para "Crear" un nuevo arreglo de todos sin el que se envía con ID
      //! Se asume que la payload es estrictamente el ID
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] Toggle Todo":
      // En este caso se utilizó map para recorrer los todos y encontrar el que sea de la misma id
      return initialState.map((todo) => {
        if (todo.id === action.payload) { // Si encuentra el todo con la misma id
          return { ...todo, done: !todo.done }; // En esta linea se modifica el done del todo
        }
        // Caso que no sea el mismo todo
        return todo; 
      });

    default:
      return initialState;
  }
};
