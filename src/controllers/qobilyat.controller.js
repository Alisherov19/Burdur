const { qobilyat } = require("../models");
const { asyncHandler } = require("../middlewares/asyncHandler");
const { ApiError } = require("../utils/apiError");
const { responseHandler } = require("../utils/responseHandler");

// 🟢 CREATE
const create = asyncHandler(async (req, res) => {
  const { picture, title, body } = req.body;

  const created = await qobilyat.create({ picture, title, body });

  if (!created) {
    throw new ApiError(400, "Qobiliyat yaratilmadi");
  }

  responseHandler(res, 201, created, "Qobiliyat muvaffaqiyatli yaratildi");
});

// 🔵 GET ALL
const getAll = asyncHandler(async (req, res) => {
  const qobilyatlar = await qobilyat.findAll();

  if (!qobilyatlar || qobilyatlar.length === 0) {
    throw new ApiError(404, "Hech qanday qobiliyat topilmadi");
  }

  responseHandler(res, 200, qobilyatlar, "Barcha qobiliyatlar");
});

// 🟡 GET ONE
const getOne = asyncHandler(async (req, res) => {
  const one = await qobilyat.findByPk(req.params.id);

  if (!one) {
    throw new ApiError(404, "Qobiliyat topilmadi");
  }

  responseHandler(res, 200, one, "Qobiliyat topildi");
});

// 🟠 UPDATE
const update = asyncHandler(async (req, res) => {
  const found = await qobilyat.findByPk(req.params.id);

  if (!found) {
    throw new ApiError(404, "Qobiliyat topilmadi");
  }

  await found.update(req.body);

  responseHandler(res, 200, found, "Qobiliyat muvaffaqiyatli yangilandi");
});

// 🔴 DELETE
const destroy = asyncHandler(async (req, res) => {
  const found = await qobilyat.findByPk(req.params.id);

  if (!found) {
    throw new ApiError(404, "Qobiliyat topilmadi");
  }

  await found.destroy();

  responseHandler(res, 200, found, "Qobiliyat o‘chirildi");
});

module.exports = {
  create,
  getAll,
  getOne,
  update,
  destroy,
};
