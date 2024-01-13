import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavySuff = (valor) =>{
for(let i=0;i<valor;i++)
{
  console.log("Imprimiendo")
}
return `${valor} impresas`
}

export const MemoHook = () => {
  const { counter, sumar } = useCounter(0);
  const [show, setShow] = useState(true)
  const heavyValue = useMemo(() => heavySuff(counter), [counter])
  return (
    <>
      <h1>
        Counter: <small> {counter} </small>
      </h1>
      <hr />
      <h4>{heavyValue} </h4>
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
