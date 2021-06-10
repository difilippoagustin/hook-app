import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// import { HookApp } from "./HookApp/HookApp";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWithCustomHook } from "./components/01-useState/CounterApp";
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm";
// import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./components/04-useRef/FocusScreen";
// import { RealExapleRef } from "./components/04-useRef/RealExapleRef";
// import { Layout } from "./components/05-useLayoutEffect/Layout";
// import { Memoize } from "./components/06-memos/Memoize";
// import { MemoHook } from "./components/06-memos/MemoHook";
// import { CallbackHook } from "./components/06-memos/CallbackHook";
// import { Padre } from "./components/07-tarea-memo/Padre";
import { TodoApp } from "./components/08-useReducer/TodoApp";

ReactDOM.render(<TodoApp />, document.getElementById("root"));
