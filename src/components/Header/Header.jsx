import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <div className="menu">
        <Link to={"/organização"} className="page1">
          Organização
        </Link>
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
