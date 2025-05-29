const { asyncHandler } = require("../middlewares/asyncHandler");
const { phone } = require("../models");
const { ApiError } = require("../utils/apiError");
const { responseHandler } = require("../utils/responseHandler");


const Phone = phone;

const create = asyncHandler(async (req, res, next) => {
  const { number, aboutId } = req.body;
  if (!number || !aboutId) throw ApiError(400, "Number va aboutId kerak");

  const newPhone = await Phone.create({ number, aboutId });
  responseHandler(res, 201, "Phone created successfully", newPhone);
});

const getAll = asyncHandler(async (req, res, next) => {
  const phones = await Phone.findAll();
  responseHandler(res, 200, "Phones found", phones);
});

const getOne = asyncHandler(async (req, res, next) => {
  const phone = await Phone.findByPk(req.params.id);
  if (!phone) throw ApiError(404, "Phone not found");
  responseHandler(res, 200, "Phone found", phone);
});

const update = asyncHandler(async (req, res, next) => {
  const phone = await Phone.findByPk(req.params.id);
  if (!phone) throw ApiError(404, "Phone not found");

  await phone.update(req.body);
  responseHandler(res, 200, "Phone updated successfully", phone);
});

const destroy = asyncHandler(async (req, res, next) => {
  const phone = await Phone.findByPk(req.params.id);
  if (!phone) throw ApiError(404, "Phone not found");

  await phone.destroy();
  responseHandler(res, 200, "Phone deleted successfully", phone);
});

module.exports = {
  create,
  getAll,
  getOne,
  update,
  destroy,
};
