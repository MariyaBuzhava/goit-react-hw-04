import c from "./ImageModal.module.css";
import ReactModal from "react-modal";
const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      overlayClassName={c.modalOverlay}
    >
      <div className={c.modalBody}>
        <img src={imageUrl} alt="Large format" />
      </div>
    </ReactModal>
  );
};

export default ImageModal;
