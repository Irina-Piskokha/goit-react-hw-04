import s from "./ImageModal.module.css";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(90,93,93,0.9)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, isClose, src, alt }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={isClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={src} alt={alt} className={s.img} />
      </Modal>
    </div>
  );
};

export default ImageModal;
