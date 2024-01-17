import { useState } from "react"
import { UserContext } from "./UserContext"

//! Lo que se hace aquí es envolver todo dentro del provider
//! Esto para poder acceder a esa info desde cualquier lado
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
  )
}
