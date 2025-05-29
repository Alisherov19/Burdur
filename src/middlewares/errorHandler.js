const errorHandler = (err, req, res, next) => {

    if(err.name === "SequelizeValidationError"){
        res.status(409).json({ 
            sucess: false,
            message: "Validation Error",
            errors: err.errors.map(error => ({
                field: error.path,
                message: error.message
            }))
             });
             return;
    }

    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message || "An unexpected error occurred"
    });
}

module.exports = {
    errorHandler
};
