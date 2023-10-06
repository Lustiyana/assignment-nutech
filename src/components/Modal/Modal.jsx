import React from "react";

const Modal = ({
  icon,
  text1,
  text2,
  textClick,
  cancelButton,
  onClick,
  id,
}) => {
  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box flex justify-center">
        <div className="flex flex-col items-center">
          <img src={icon} alt={icon} className="w-14 mb-8" />
          <p className="mb-2">{text1}</p>
          <h3 className="font-bold text-2xl">{text2}</h3>
          <div className="modal-action">
            <form method="dialog" className="w-full flex flex-col gap-8">
              <button onClick={onClick} className="text-red-primary w-full">
                {textClick}
              </button>
              {cancelButton ? (
                <button className="w-full" id={`close-${id}`}>
                  Close
                </button>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
