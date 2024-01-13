import { useCounter } from "../hooks"

export const CounterWithCustomHook = () => {
    const {counter,sumar,reset,restar} = useCounter()

    return (
    <>
    <h1>Counter with custom hook: {counter} </h1>
    <hr />
    <button className="btn btn-primary" onClick={ () =>  sumar(1) }>+1</button>
    <button className="btn btn-primary" onClick={reset}>Reset</button>
    <button className="btn btn-primary" onClick={() => restar(1) }>-1</button>
    </>
  )
}
