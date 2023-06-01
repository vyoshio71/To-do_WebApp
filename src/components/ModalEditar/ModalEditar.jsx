import React from "react";
import "./index.scss";

function Modal({ setOpenModalEdit }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModalEdit(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Deseja editar esse item?</h1>
        </div>
        <div className="body">
          <p>Colocar as descrições das tarefas aqui.</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModalEdit(false);
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

export default Modal;
