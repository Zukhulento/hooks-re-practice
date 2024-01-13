import React, { useCallback } from "react";
import { Hijo } from "./Hijo";
import { useState } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);
  // Aquí se usa un callback para que la función que es enviada al hijo no sea diferente
  // o cambie de espacio en memoria. También se utiliza (v) para acceder al valor del estado
  const incrementar = useCallback((num) => {
    setValor((v) => v + num);
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
