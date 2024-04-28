import { useEffect } from "react";

const Modal = ({ isOpen, onClose, className, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed left-0 top-0 z-50 h-screen w-screen overflow-auto bg-black bg-opacity-5"
    >
      <div className="flex h-max min-h-screen w-full items-center justify-center">
        <div
          onClick={stopPropagation}
          className={`m-10 overflow-hidden rounded-lg bg-white shadow-lg ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
