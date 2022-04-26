import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showInfo = (message:string) => {
  toast.info(message, {
    position: "top-right",
    theme: "colored",
    icon: "🚀",
  });
};

export const showError = (message:string) => {
  toast.error(message, {
    position: "top-right",
    theme: "colored",
  });
};

export const showSuccess = (message:string) => {
  toast.success(message, {
    position: "top-right",
    theme: "colored",
  });
};

export const showWarn = (message:string) => {
  toast.warn(message, {
    position: "top-right",
    theme: "colored",
  });
};
