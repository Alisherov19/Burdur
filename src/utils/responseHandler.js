const responseHandler = (res, statusCode, data, message) => {
  if (statusCode >= 400) {
    return res.status(statusCode).json({
      success: false,
      message: message || "An error occurred",
      data: data || null,
    });
  }

  return res.status(statusCode).json({
    success: true,
    message: message || "Request was successful",
    data: data || null,
  });
}

module.exports = {
    responseHandler
};
