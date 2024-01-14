export const todoReducer = (initialState = [], action) => {
  // Esta es la primera action y agrega un nuevo todo
  switch (action.type) {
    case "[TODO] Add Todo":
      // Se utiliza el operador spread para mantener datos anteriores y sólo se le agrega la payload
      return [...initialState, action.payload]

    default:
      return initialState;
  }
};
