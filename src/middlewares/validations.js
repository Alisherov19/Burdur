const ZodError = require("zod")

 const validate = (schema) => {
  return (req, res, next) => {
    const validation = schema.safeParse(req.body);
    try{
        if(schema.body) schema.body.parse(req.body);
        if(schema.query) schema.query.parse(req.query);
        if(schema.params) schema.params.parse(req.params);
        next();
    }catch (error){
        if(error instanceof ZodError){
            res.status(400).json({
                success: false,
                message: "Validation Error",
                errors: error.errors.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message
                }))
            });
            return
        }
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message || "An unexpected error occurred"
        });
    }
}};

module.exports = {
    validate
};
