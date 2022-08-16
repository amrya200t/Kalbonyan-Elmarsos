const Backdrop = (props) => {
  const closeHandler = () => {
    props.onClose(false);
  };
  return <div className="backdrop" onClick={closeHandler} />;
};

export default Backdrop;
