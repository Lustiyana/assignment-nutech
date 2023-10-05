import React from "react";

const Modal = ({ icon }) => {
  return (
    <dialog id="my_modal_2" className="modal ">
      <div className="modal-box w-1/6">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
