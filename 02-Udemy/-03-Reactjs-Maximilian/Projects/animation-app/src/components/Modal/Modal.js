import React from "react";
// import { Transition } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      //   classNames="fade-slide"
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;

/* <Transition
  in={props.show}
  timeout={animationTiming}
  mountOnEnter
  unmountOnExit
>
  {(state) => {
    const cssClasses = [
      "Modal",
      state === "entering"
        ? "ModalOpen"
        : state === "exiting"
        ? "ModalClosed"
        : null,
    ];
    return (
      <div className={cssClasses.join(" ")}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    );
  }}
</Transition> */
