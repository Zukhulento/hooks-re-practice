import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
// ! El useCallback hook se utiliza para guardar una función en memoria
// ! con la pequeña desventaja de que se debe editar estados de manera diferente


export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFuntion = useCallback((step) => {
    setCounter((c) => c + step); // TODO esta es otra manera de modificar el valor del state sin usar "counter"
  }, []);

  // const incrementFuntion = () =>
  // {
  //     setCounter(counter + 1)
  // }
  return (
    <>
      <h1>useCallback: {counter} </h1>
      <hr />
      <ShowIncrement increment={incrementFuntion} />
    </>
  );
};
