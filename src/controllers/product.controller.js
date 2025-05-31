const { asyncHandler } = require("../middlewares/asyncHandler")
const {Product ,User} = require("../models")
const { ApiError } = require("../utils/apiError")
const { responseHandler } = require("../utils/responseHandler")

const create = asyncHandler(async (req,res,next)=>{
    const {image,price,size,title} = req.body
    const product = await Product.create({image,price,size,title})
    if(!product){
        throw new ApiError(400,"Product create failed")
    }
    responseHandler(res,201,"Product created successfully",product)
})

const getall = asyncHandler(async(req,res,next)=>{
    const products = await Product.findAll({
        include:[
            {
            model:User,
            as:'Users',
            attributes:['id','username','email']
        }
        ]
    })
    if(!products || products.length === 0){
        throw new ApiError(404,"No products found")
    }
    responseHandler(res,200,products,"Products")
})

const getOne = asyncHandler(async(req,res,next)=>{
    const products = await Product.findByPk(req.params.id)
    if(!products ){
        throw new ApiError(404,"No product found")
    }
    responseHandler(res,200,products,"Product found successfully")
})

const update = asyncHandler(async(req,res,next)=>{
    const products = await Product.findByPk(req.params.id)
    if(!products ){
        throw new ApiError(404,"No product found")
    }
    await products.update(req.body)
    responseHandler(res,200,products,"Product updated successfully")
})

const destroy = asyncHandler(async(req,res,next)=>{
    const products = await Product.findByPk(req.params.id)
    if(!products ){
        throw new  ApiError(404,"No product found")
    }
    await products.destroy()
    responseHandler(res,200,products,"Product destroyed successfully")
})

module.exports = {
    create,
    getOne,
    getall,
    update,
    destroy
};


