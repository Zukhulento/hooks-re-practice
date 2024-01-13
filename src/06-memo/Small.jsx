import {memo} from 'react'

// !El memo evita que se renderice el componente
// !a menos que se modifiquen las props

export const Small = memo(({counter}) => {
    console.log("Me rendericé")
  return (
    <small> {counter} </small>
  )
})
