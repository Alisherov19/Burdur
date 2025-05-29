
const { z } = require("zod");



const productSchema = z.object({
  image: z.string().url(), // Rasm URL bo'lishi kerak
  title: z.string().min(3).max(100), // Sarlavha 3 dan 100 belgigacha
  size: z.enum(["S", "M", "L", "XL", "XXL"]), // Ruxsat etilgan o'lchamlar
  price: z.string().regex(/^\d+(\.\d{1,2})?$/) // Narx raqam formatida, masalan: "9.99"
});

module.exports = {
    productSchema
};
