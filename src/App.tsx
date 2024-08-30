import { useState } from "react";
import AddTodo from "./componentes/FormAddTodo";
import Todos from "./components/Todos";

export interface Todo {
  text: string;
  complete: boolean;
}

const initialTodos: Todo[] = [
  {
    text: "Oceano",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const removeTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Todo</h1>
      <AddTodo addTodo={addTodo} />
      <div>
        <Todos
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
};
export default App;
