// TODO: Este hook es para establecer un contador que puede sumar
// TODO: restar y restablecer valores

import { useState } from "react"

// * Un hook es una función que retorna algo
export const useCounter = (initialValue = 10 ) => {
    // Se define estado para el contador con un valor inicial opcional (Por defecto es 10)
    const [counter, setCounter] = useState(initialValue)
    // Función de sumar para modificar el estado del contador
    const sumar = (value = 1) => {
        setCounter(counter + value )
    }
    // Función de restar para modificar el estado del contador
    const restar = (value = 1) => {
        if(counter <= 0) return
        setCounter(counter - value )
    }
    // Función de resetear para modificar el estado del contador
    const reset = () => {
        setCounter(10)
    }
    // !El hook retorna acceso al valor del contador y las funciones
  return {
    counter,
    sumar,
    restar,
    reset,
  }
}
