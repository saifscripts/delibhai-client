import { useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import cn from "../lib/cn";
import getScrollbarWidth from "../utils/getScrollbarWidth";

const Modal = ({ isOpen, onClose, children, closeBtn, headerText }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = getScrollbarWidth() + "px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "0";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 h-screen w-screen bg-black bg-opacity-10"
    >
      <div className="flex h-full w-full items-center justify-center">
        <div
          onClick={stopPropagation}
          className={`max-h-screen max-w-[640px] overflow-hidden rounded-3xl bg-white shadow-lg sm:max-h-[90vh]`}
        >
          {(headerText || closeBtn) && (
            <div className="relative z-50 flex h-16 items-center justify-between p-5 shadow-sm">
              <p className="text-xl font-semibold">{headerText}</p>
              <div
                onClick={onClose}
                className="group relative cursor-pointer text-xl"
              >
                <div className="absolute -inset-2 -z-10 rounded-full group-hover:bg-neutral"></div>
                {closeBtn && <TfiClose />}
              </div>
            </div>
          )}

          <div
            className={cn(
              "hide-scrollbar max-h-screen overflow-y-scroll p-5 sm:max-h-[90vh]",
              {
                "max-h-[calc(100vh-4rem)] sm:max-h-[calc(90vh-4rem)]":
                  headerText || closeBtn,
              },
            )}
          >
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
