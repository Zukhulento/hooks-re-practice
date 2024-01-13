import { useCounter, useFetch} from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, sumar } = useCounter(1);
  // Consumiento hook
  const { data, hasErrors, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  // ? En esta linea el !!data significa que niega dos veces un undefined en caso que no venga data
  // ? de otra manera desestructura los campos de data[0]
  //   const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />
      <button onClick={() => sumar(1)} className="btn btn-primary">
        More quotes?
      </button>
      {/* Ternario para mostrar en caso que haya terminado de cargar */}
      {isLoading ? (
        <LoadingQuote/>
      ) : (
        // Si hay quotes las imprime una por una
        data.map((info) => (
          <Quote key={info.quote} author={info.author} quote={info.quote}/>
        ))
      )}
    </>
  );
};
