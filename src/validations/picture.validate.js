const {z} = require("zod")
const { picture } = require("../models/pictures")

const pictureScheme = z.object({
    pictures : z.string().url().nonempty()
})

module.exports = {
    pictureScheme
};
