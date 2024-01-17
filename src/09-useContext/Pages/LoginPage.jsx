import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Login</h1>
      <hr />
      { JSON.stringify(user) }
      <button
        className="btn btn-primary"
        onClick={ () => setUser( {
          name:"Luis",
          email:"Luis@gmail.com"
        } ) }
      >
        Set user
      </button>
    </>
  );
};
