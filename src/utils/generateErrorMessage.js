const generateErrorMessage = (error) => {
  return error.response.data.errorSources
    .map(({ message }) => message)
    .join(", ");
};

export default generateErrorMessage;
