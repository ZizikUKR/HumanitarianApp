import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const showInfo = (message) => {
  toast.info(message, {
    position: "top-right",
    theme: "colored",
    icon: "🚀",
  });
};


export const showInfoError = (message) => {
  toast.error(message, {
    position: "top-right",
    theme: "colored",
  });
};

export const showInfoSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    theme: "colored",
  });
};

export const showInfoWarn = (message) => {
  toast.warn(message, {
    position: "top-right",
    theme: "colored",
  });
};
