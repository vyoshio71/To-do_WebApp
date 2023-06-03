import "./index.scss";
import { db } from "../../mocks/itens.mock";

const List = () => {
  return (
    <section className="todo-list">
      <div className="table">
        <p>Tarefa</p>
        <p>Descrição</p>
        <p>Status</p>
      </div>
      <hr />
      <div className="options">
        <div className="works">
          {db.map((item) => (
            <p key={item.title}>{item.title}</p>
          ))}
        </div>
        <div className="description">
          {db.map((item) => (
            <p key={item.description}>{item.description}</p>
          ))}
        </div>
        <div className="isCompleted">
          <div>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
