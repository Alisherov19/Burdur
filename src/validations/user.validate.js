const {z} = require("zod")

 const registerValidation = z.object({
    body:z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    phone: z.string().min(10).max(10),
    productId: z.number().int()
    })
})

module.exports = {
    registerValidation
};
