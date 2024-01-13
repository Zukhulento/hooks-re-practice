import { useRef } from "react";

export const FocusScreen = () => {
  // Primero se instancia el hook
  const refInput = useRef();

  const onBtnPress = () => {
    // Para este punto el componente ya se renderizó y asignó el input al ref
    console.log(refInput)
    // Asignandole foco a lo que almacenó el ref
    refInput.current.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={refInput}
        type="text"
        className="form-control"
        placeholder="Ingrese su nombre"
      />
      <button onClick={onBtnPress} className="btn btn-primary mt-2">Focus</button>
    </>
  );
};
