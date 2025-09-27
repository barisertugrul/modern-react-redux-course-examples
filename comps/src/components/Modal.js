import { useEffect } from "react";
import ReactDOM from "react-dom";
import { GoX } from "react-icons/go";

function Modal({ isOpen, onClose, children, actionBar }) {
    // if (!isOpen) return null;

    /* return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-300 opacity-80" onClick={onClose} />
            <div className="absolute inset-40 p-10 bg-white rounded shadow-lg z-10">
                <button className="absolute top-2 right-2" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    ); */

    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        document.body.style.overflow = "hidden";
        return () => {
            document.body.classList.remove("overflow-hidden");
            document.body.style.overflow = "auto";
        };
    }, []);

    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-gray-300 opacity-80" onClick={onClose} />
            <div className="fixed inset-40 p-10 bg-white rounded shadow-lg z- h-fit">
                <button className="absolute top-2 right-2" onClick={onClose}>
                    <GoX className="text-gray-500 hover:text-gray-700 text-lg border rounded-full" />
                </button>
                <div className="flex flex-col justify-between h-full">
                    <div className="mb-4">{children}</div>
                    <div className="flex justify-end mt-4">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container")
    );
}

export default Modal;
