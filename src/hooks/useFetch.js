// TODO: Este hook es para obtener datos con un fetch
import { useEffect, useState } from "react";

export const useFetch = (url) => {
    // *Se define el estado inicial del hook, considerando estado de carga
    // *data y si encontró errores
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasErrors: null,
  });
  // Se crea función para obtener los datos de la url que se obtiene como prop
  // !Esta función tiene que ser async
  const getFetch = async () => {
    // Se cambia estado a cargando sin afectar otras propiedades
    setState({
      ...state,
      isLoading: true,
    });
    // *Se hace la petición con fetch y await
    const resp = await fetch(url);
    // *Se espera la data y se convierte en json
    const data = await resp.json();
    // *Se actualizan los estados
    setState({
      data,
      isLoading: false,
      hasErrors: null,
    });
  };
  // ! Se utiliza el useEffect para activar el hook cada vez que se cambie la url,
  // ! en un dado caso sea la misma no es necesario
  useEffect(() => {
    getFetch();
  }, [url]);
//! Se hace el return de esta manera para dejarlo legible
// ? Otra opción podría ser dejarlo como (return state;)
  return {
    data:      state.data,
    isLoading: state.isLoading,
    hasErrors: state.hasErrors,
  };
};
