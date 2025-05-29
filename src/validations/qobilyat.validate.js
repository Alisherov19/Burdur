const { z } = require("zod");
const {qobilyat} = require("../models")
const qobilyatSchema = z.object({
  picture: z.string()
    .url("Rasm uchun haqiqiy URL kiriting") // agar URL bo‘lsa
    .min(5, "Rasm havolasi juda qisqa")
    .max(500, "Rasm havolasi juda uzun"),

  title: z.string()
    .min(3, "Sarlavha kamida 3 ta belgidan iborat bo‘lishi kerak")
    .max(100, "Sarlavha juda uzun"),

  body: z.string()
    .min(5, "Tavsif kamida 5 ta belgidan iborat bo‘lishi kerak")
    .max(1000, "Tavsif juda uzun")
});



module.exports = {
  qobilyatSchema,
};
