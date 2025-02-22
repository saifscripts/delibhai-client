const generateErrorMessage = (error) => {
  return (
    error?.response?.data?.errorSources
      ?.map?.(({ message }) => message)
      ?.join?.(', ') || error.message
  );
};

export default generateErrorMessage;
