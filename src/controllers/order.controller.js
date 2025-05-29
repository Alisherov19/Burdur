// controllers/order.controller.js
const { use } = require('passport');
const { asyncHandler } = require('../middlewares/asyncHandler');
const { User, Product, order } = require('../models');
const { ApiError } = require('../utils/apiError');
const { responseHandler } = require('../utils/responseHandler');

const createOrder = async (req, res) => {
  try {
    const { userId, productId, quantity  , status } = req.body;

    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (!user || !product) {
      return res.status(404).json({ message: 'User or Product not found' });
    }

   
    const existingOrder = await order.findOne({
      where: {
        userId,
        productId
      }
    });

    if (existingOrder) {
      existingOrder.quantity += quantity;
      await existingOrder.save();
      return res.status(200).json({ message: 'Order quantity updated', order: existingOrder });
    }

    const newOrder = await order.create({
      userId,
      productId,
      quantity,
      status
    });

    res.status(201).json({ message: 'New order created', order: newOrder });
  } catch (error) {
    console.error('Order create error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const getAll = asyncHandler(async (req,res)=>{
  const allOrder = await order.findAll()
  if(!allOrder){
    throw new ApiError(404,"Orders not found")
  }
  responseHandler(res,200,allOrder,"Orders found")
})

const getOne = asyncHandler(async (req,res)=>{
  const allOrder = await order.findByPk(req.params.id)
  if(!allOrder){
    throw new ApiError(404,"Order not found")
  }
  responseHandler(res,200,allOrder,"Orders found")
})

const update = asyncHandler(async(req,res)=>{
  const Order = await order.findByPk(req.params.id)
   if(!Order){
    throw new ApiError(404,"Order not found")
  }
  await Order.update(req.body)
  responseHandler(res, 203, Order,"Order updated successfully")
})

const destroy = asyncHandler(async(req,res)=>{
  const Order = await order.findByPk(req.params.id)
   if(!Order){
    throw new ApiError(404,"Order not found")
  }
  await Order.destroy()
  responseHandler(res, 203, Order,"Order destroyed successfully")
})

module.exports = {
  createOrder,
  getAll,
  getOne,
  update,
  destroy
};

