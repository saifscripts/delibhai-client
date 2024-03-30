/* eslint-disable react/prop-types */

const Modal = ({ isOpen, onClose, className, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Modal overlay */}
      <div className="fixed inset-0 bg-black opacity-5" onClick={onClose}></div>
      {/* Modal container */}
      <div className={`z-50 rounded-lg bg-white shadow-lg ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
