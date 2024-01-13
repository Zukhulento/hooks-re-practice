import { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks";

export const FormWithCustomHook = () => {
  // *Se define la composición de este form
  const formObj = {
    username: "",
    email: "",
    password: "",
  };
  // *Se consume el hook de form y se le envía la composición
  const { formState, onChange, username, email, password, onResetForm} = useForm(formObj);
  // *Se desestructura los campos para usarlos en el componente
  //const { username, email, password } = formState;
  //! Lo de arriba es opcional, la otra manera es desde el hook ya enviar
  //! los campos desestructurados para poder usarlos en el componente
  //! Cualquiera de las dos maneras funciona!
  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="ejemplo@gmail.com"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button onClick={onResetForm} className="btn btn-danger mt-2" >Reset</button>
    </>
  );
};
