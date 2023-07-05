const formatErrorsExpress = (oldErrors) => {
  const newErrors = {};
  oldErrors.forEach((errorExpres) => {
    if (newErrors[errorExpres.path]) {
      newErrors[errorExpres.path] = [
        ...newErrors[errorExpres.path],
        errorExpres.msg,
      ];
    } else {
      newErrors[errorExpres.path] = [errorExpres.msg];
    }
  });
  return newErrors;
};

module.exports = { formatErrorsExpress };
