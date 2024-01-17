import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export const HomePage = () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <h1>
        Home Page
      </h1>
      <hr />
      <h3>Hola {user?.name} </h3>

    </>
  )
}
