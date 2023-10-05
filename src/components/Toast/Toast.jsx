import React, { useState } from "react";

const Toast = ({ title, message }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    // <div className="w-full bg-red-primary relative">
    //   <div
    //     className={`bg-red-primary text-white rounded shadow-lg absolute w-full ${
    //       visible ? "" : "hidden"
    //     }`}
    //   >
    //     <div className="flex justify-between items-center">
    //       <div className="mr-4">
    //         <p>Ini pesan</p>
    //       </div>
    //       <button
    //         className="text-white hover:text-gray-300"
    //         onClick={handleClose}
    //       >
    //         <svg
    //           className="w-4 h-4"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M6 18L18 6M6 6l12 12"
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-red-primary w-full">
      <div className="toast toast-center">
        <div className="alert alert-error">
          <span>Message sent successfully.</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
