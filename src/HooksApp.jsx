import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-example/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayout/Layout";
import { CallbackHook } from "./06-memo/CallbackHook";
import { MemoHook } from "./06-memo/MemoHook";
import { Memorize } from "./06-memo/Memorize";
import { Padre } from "./07-tarea-memo/Padre";

export const HooksApp = () => {
  return (
    <>
      <div>HooksApp</div>
      {/* <CounterApp /> */}
      <Padre />
    </>
  );
};
