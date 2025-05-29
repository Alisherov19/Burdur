const { asyncHandler } = require("../middlewares/asyncHandler");
const { about, phone } = require("../models");
const { ApiError } = require("../utils/apiError");
const { responseHandler } = require("../utils/responseHandler");

const create = asyncHandler(async (req, res, next) => {
  const { phoneId, email, address } = req.body;

  if (!phoneId || !email || !address) {
    throw new ApiError(400, "phoneId, email va address kerak");
  }

  const newAbout = await about.create({ phoneId, email, address });
  responseHandler(res, 201, "About created successfully", newAbout);
});

const getAll = asyncHandler(async (req, res, next) => {
  const abouts = await about.findAll({
    include: [
      {
        model: phone,
        as: "phones", // ALIAS kerak bo'ladi
        attributes: ["id", "number", "aboutId"],
      },
    ],
  });
  responseHandler(res, 200, "Abouts found", abouts);
});

const getOne = asyncHandler(async (req, res, next) => {
  const aboutInstance = await about.findByPk(req.params.id, {
    include: [
      {
        model: phone,
        as: "phones",
        attributes: ["id", "number", "aboutId"],
      },
    ],
  });
  if (!aboutInstance) throw new ApiError(404, "About not found");
  responseHandler(res, 200, "About found", aboutInstance);
});

const update = asyncHandler(async (req, res, next) => {
  const aboutInstance = await about.findByPk(req.params.id);
  if (!aboutInstance) throw new ApiError(404, "About not found");

  await aboutInstance.update(req.body);
  responseHandler(res, 200, "About updated successfully", aboutInstance);
});

const destroy = asyncHandler(async (req, res, next) => {
  const aboutInstance = await about.findByPk(req.params.id);
  if (!aboutInstance) throw new ApiError(404, "About not found");

  await aboutInstance.destroy();
  responseHandler(res, 200, "About deleted successfully", aboutInstance);
});

module.exports = {
  create,
  getAll,
  getOne,
  update,
  destroy,
};
