import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Todo from "../../components/Todo/Todo";
import TodoForm from "../../components/TodoForm/TodoForm";
import Search from "../../components/Search/Search";

function Organização() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Trabalho",
      description: "Criar funcionalidade X no sistema",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudos",
      description: "Estudar React",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Praticar",
      description: "Criar um sistema funcional",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const addTodo = (text, description) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        description,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <section className="header">
      <div className="menu">
        <ul>
          <li>Organização</li>
        </ul>
        <Link to={"/"} className="page1">
          Tarefas
        </Link>
      </div>

      <div className="text">
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      </div>

      <Search search={search} setSearch={setSearch} />

      <div className="list-all">
        <h1>Lista de tarefas</h1>
        <hr className="hr2" />
        <div className="option-all">
          {todos
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))}
        </div>
      </div>
      <TodoForm addTodo={addTodo} />
    </section>
  );
}
export default Organização;
