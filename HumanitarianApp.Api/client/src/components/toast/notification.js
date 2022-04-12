import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const showInfo = (message) => {
  toast.info(message, {
    position: "top-right",
    theme: "colored",
    icon: "🚀",
  });
};


export const showError = (message) => {
  toast.error(message, {
    position: "top-right",
    theme: "colored",
  });
};

export const showSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    theme: "colored",
  });
};

export const showWarn = (message) => {
  toast.warn(message, {
    position: "top-right",
    theme: "colored",
  });
};
