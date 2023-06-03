import React from "react";
import "./index.scss";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="works-all"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p id="description">({todo.description})</p>
      </div>
      <div className="button">
        <button onClick={() => completeTodo(todo.id)}>Completar</button>
        <button id="cancelar" onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Todo;
