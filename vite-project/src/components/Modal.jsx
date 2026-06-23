import classes from "./Modal.module.css";

function Modal({ children }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.Modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
