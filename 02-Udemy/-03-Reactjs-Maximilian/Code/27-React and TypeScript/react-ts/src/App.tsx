import "./App.css";
import TodosContextProvider from "./context/todos-context";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
