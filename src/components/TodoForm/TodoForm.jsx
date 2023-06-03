import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !description) return;
    addTodo(value, description);
    setValue("");
    setDescription("");
  };
  return (
    <section>
      <div className="text-criarTarefa">
        <h1>Criar Tarefa</h1>
      </div>

      <form className="add-works">
        <div>
          <input
            type="text"
            placeholder="Digite aqui sua tarefa"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Digite a descrição da tarefa"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>

      <div className="footer-button">
        <button onClick={handleSubmit} type="submit">
          Criar tarefa
        </button>
      </div>
    </section>
  );
};

export default TodoForm;
