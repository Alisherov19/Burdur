const {picture} = require("../models")
const {asyncHandler} = require("../middlewares/asyncHandler")
const { ApiError } = require("../utils/apiError")
const { responseHandler } = require("../utils/responseHandler")
const { pick } = require("zod/v4-mini")
const create = asyncHandler(async (req,res)=>{
    const {pictures} =req.body
    const created = await picture.create({pictures})
    if(!created) { 
        throw new ApiError(400,"Picture create failed")
    }
    responseHandler(res,201,created,"picture created successfully")
})

const getAll = asyncHandler(async(req,res)=>{
    const pictures = await picture.findAll()
    if(!pictures){
        throw new ApiError(404,"No pictures found")
    }
    responseHandler(res,200,"Pictures found",pictures)
})

const getOne = asyncHandler(async(req,res)=>{
    const pictures = await picture.findByPk(req.params.id)
    if(!pictures){
        throw new ApiError(404," picture not found")
    }
    responseHandler(res,200,"Picture found",pictures)
})

const update = asyncHandler(async(req,res)=>{
    const pictures = await picture.findByPk(req.params.id)
    if(!pictures){
        throw new ApiError(404," picture not found")
    }
    await pictures.update(req.body)
    responseHandler(res,200,"Picture updated successfully",pictures)
})


const destroy = asyncHandler(async(req,res)=>{
    const pictures = await picture.findByPk(req.params.id)
    if(!pictures){
        throw new ApiError(404," picture not found")
    }
    await pictures.destroy()
    responseHandler(res,200,"Picture destroyed successfully",pictures)
})

module.exports = {
    create,
    getAll,
    getOne,
    update,
    destroy
};
