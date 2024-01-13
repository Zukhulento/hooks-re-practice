export const ShowIncrement = ({ increment }) => {
  // Increment es una función recibida como prop
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    ></button>
  );
};
