import React from "react";
import "./index.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="menu">
        <h1>Organização</h1>
        <ul>
          <li>Tarefas</li>
        </ul>
      </div>

      <div className="text">
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      </div>
    </section>
  );
};

export default Header;
