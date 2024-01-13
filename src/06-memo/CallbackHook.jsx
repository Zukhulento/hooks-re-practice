import { useCallback, useState } from "react";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFuntion = useCallback((step) => {
    setCounter((value) = value + step); // TODO esta es otra manera de acceder al valor del state sin usar "counter"
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
