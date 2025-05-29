const {User,Product} = require("../models")
const {asyncHandler} = require("../middlewares/asyncHandler")
const { ApiError } = require("../utils/apiError")
const { responseHandler } = require("../utils/responseHandler")

const register = asyncHandler(async(req,res,next)=>{
    const {username,email,phone,productId} = req.body
    const user = await User.create({username,email,phone,productId})
    if(!user) {
       throw new ApiError(400, "User registration failed");
    }
    responseHandler(res, 201, user, "User registered successfully");
})

const getall = asyncHandler(async (req,res,next) =>{
    const user = await User.findAll({
        include: [
    {
      model: Product,
      as: 'products',    
      attributes: ['id', 'title', 'price', 'image'], 
      through: {
        attributes: ['quantity'], 
      },
    },
  ],
    })
    if(!user || user.length === 0 ){
        throw new ApiError(404, "No users found");
    }
     responseHandler(res, 200, user, "Users retrieved successfully");
})

const getOne = asyncHandler(async(req,res,next)=>{
      const user = await User.findByPk(req.params.id,{
          include: [
    {
      model: Product,
      as: 'products',    
      attributes: ['id', 'title', 'price', 'image'], 
      through: {
        attributes: ['quantity'], 
      },
    },
  ],
      })
    if(!user || user.length === 0 ){
        throw new ApiError(404, "USer not found");
    }
     responseHandler(res, 200, user, "User retrieved successfully");
})

module.exports = {
    register,
    getall,
    getOne
};
