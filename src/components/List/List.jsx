import React from "react";
import { useState } from "react";
import "./index.scss";
import editLogo from "../../assets/Editar.png";
import trashLogo from "../../assets/Trash.png";
import addLogo from "../../assets/Adicionar.png";
import Modal from "../../components/ModalEditar/ModalEditar";
import ModalExcluir from "../../components/ModalExcluir/ModalExcluir";
import ModalAdd from "../../components/ModalAdd/ModalAdd";

const List = () => {
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [modalOpenExcluir, setModalOpenExcluir] = useState(false);
  const [modalOpenAdd, setModalOpenAdd] = useState(false);

  return (
    <section className="todo-list">
      <div className="table">
        <p>Tarefa</p>
        <p>Status</p>
        <p>Opções</p>
      </div>
      <hr />
      <div className="option">
        <div className="works">
          <p>Limpar a casa</p>
          <p>Responder e-mails</p>
          <p>Nova tarefa...</p>
        </div>
        <div className="type">
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
        <div className="function">
          <img
            className="openModalBtn"
            onClick={() => {
              setModalOpenEdit(true);
            }}
            src={editLogo}
            alt=""
          ></img>
          {modalOpenEdit && <Modal setOpenModalEdit={setModalOpenEdit} />}
          <img
            className="openModalBtn"
            onClick={() => {
              setModalOpenEdit(true);
            }}
            src={editLogo}
            alt=""
          ></img>
          {modalOpenEdit && <Modal setOpenModalEdit={setModalOpenEdit} />}
        </div>
        <div className="function2">
          <img
            className="openModalBtn"
            onClick={() => {
              setModalOpenExcluir(true);
            }}
            src={trashLogo}
            alt=""
          ></img>
          {modalOpenExcluir && (
            <ModalExcluir setOpenModalExcluir={setModalOpenExcluir} />
          )}
          <img
            className="openModalBtn"
            onClick={() => {
              setModalOpenExcluir(true);
            }}
            src={trashLogo}
            alt=""
          ></img>
          {modalOpenExcluir && (
            <ModalExcluir setOpenModalExcluir={setModalOpenExcluir} />
          )}
          <img
            className="openModalBtn"
            onClick={() => {
              setModalOpenAdd(true);
            }}
            src={addLogo}
            alt=""
          ></img>
          {modalOpenAdd && <ModalAdd setOpenModalAdd={setModalOpenAdd} />}
        </div>
      </div>
    </section>
  );
};

export default List;
