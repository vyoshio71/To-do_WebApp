import React from "react";
import "./index.scss";
import { db } from "../../mocks/itens.mock";

function ModalAdd({ setOpenModalAdd }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModalAdd(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Deseja adiconar algum item?</h1>
        </div>
        <div className="body">
          <div className="itemTitle">
            <h4>Tarefas</h4>
            {db.map((item) => (
              <li>
                <ul>{item.title}</ul>
              </li>
            ))}
          </div>
          <div className="itemDesciption">
            <h4>Descrição</h4>
            {db.map((item) => (
              <li>
                <ul>{item.description}</ul>
              </li>
            ))}
          </div>
          <div className="itemResolution">
            {db.map((item) => (
              <li>
                <ul>{item.completed}</ul>
              </li>
            ))}
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModalAdd(false);
            }}
            id="cancelBtn"
          >
            Cancelar
          </button>
          <button>Continuar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalAdd;
