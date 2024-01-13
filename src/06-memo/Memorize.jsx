//! El useMemo se utiliza para no volver a renderizar funciones o componentes pesados si no es necesario
//! o sea, si no han cambiado sus props
import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, sumar } = useCounter(0);
  const [show, setShow] = useState(true)
  return (
    <>
      <h1>
        Counter: <Small counter={counter}/>
      </h1>
      <hr />
      {/* Si no se envía vacío el onClick detecta el evento y no me interesa */}
      <button className="btn btn-primary" onClick={() => sumar()}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
