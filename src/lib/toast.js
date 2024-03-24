import toast from "react-hot-toast";

export const showErrorToast = (message) => {
  toast.error(message, {
    duration: 4000,
    position: "top-center",
    style: {
      backgroundColor: "#efef8d",
    },
  });
};

export const showSuccessToast = (message) => {
  toast.success(message, {
    duration: 4000,
    position: "top-center",
    style: {
      //   backgroundColor: "#efef8d",
    },
  });
};
