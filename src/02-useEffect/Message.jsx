import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
    //   console.log(coords);
      console.log(" ;) ")
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      // esto se ejecuta cuando ya el componente deja de existir
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []); // Debido a que no hay dependencia se ejecuta la primera vez que se monta el componente

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
