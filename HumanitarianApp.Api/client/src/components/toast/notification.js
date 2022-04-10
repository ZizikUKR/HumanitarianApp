import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const showInfo = (message) => {
  toast.info(message, {
    position: "top-right",
    theme: "colored",
    icon: "🚀",
  });
};


// добавить 3 функции эрор саксес и варнинг 