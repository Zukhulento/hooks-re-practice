import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });
  const { username, email } = formState;

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // ! Es buena práctica hacer un useEffect por cada uno de los items que quiero escuchar
  useEffect(() => {
    // console.log("Se renderizó el componente");
  }, []); //Si las dependencias están vacías es porque el useEffect se llama solo cuando se renderiza
  useEffect(() => {
    // console.log("Form state se cambió");
  }, [formState]);
  useEffect(() => {
    // console.log("Se cambió el email");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onChange}
      />
      { username === "abc" && <Message/>  }
      <input
        type="email"
        className="form-control mt-2"
        placeholder="ejemplo@gmail.com"
        name="email"
        value={email}
        onChange={onChange}
      />
    </>
  );
};
