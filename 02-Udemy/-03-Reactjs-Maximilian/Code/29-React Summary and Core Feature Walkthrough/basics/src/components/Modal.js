const Modal = (props) => {
  const closeHandler = () => {
    props.onClose(false);
  };

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={closeHandler}>
        Cancel
      </button>
      <button className="btn" onClick={closeHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
