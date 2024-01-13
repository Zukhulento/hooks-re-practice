//! Este es un componente hijo para demostrar uso de useCallback

export const ShowIncrement = ({ increment }) => {
  // Increment es una función recibida como prop
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
        +5
    </button>
  );
};
