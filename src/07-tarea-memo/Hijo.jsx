// Aqui el memo está haciendo que se mantenga la renderización si el número (estado)
//  o la función no han cambiado
import React from "react";
export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
