import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccessToast = (message: string) => {
  return toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,

    theme: "colored",
    style: {
      backgroundColor: "#4caf50",
      color: "#fff",
      borderRadius: "8px",
      padding: "10px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      maxWidth: "80vw",
      wordWrap: "break-word",
    },
  });
};

export const showErrorToast = (message: string) => {
  return toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,

    theme: "colored",
    style: {
      backgroundColor: "#f44336",
      color: "#fff",
      borderRadius: "8px",
      padding: "10px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      maxWidth: "80vw",
      wordWrap: "break-word",
    },
  });
};
