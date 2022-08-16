import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = (e) => {
    setModalIsOpen(true);
  };

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onClose={setModalIsOpen} />}
      {modalIsOpen && <Backdrop onClose={setModalIsOpen} />}
    </div>
  );
};
export default Todo;
