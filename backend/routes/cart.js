
const express = require('express');
const Cart = require('../model/cartItems');
const router = express.Router();

router.post('/', async (req, res) => {
    const { productId, quantity } = req.body;
    
    try {
      let cart = await Cart.findOne();
      
      if (!cart) {
        cart = new Cart({ items: [] });
      }
      
      const existingItem = cart.items.find(item => item.productId.toString() === productId);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
      
      await cart.save();
      res.status(200).json({ success: true, message: 'Item added to cart', cart });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error adding to cart', error });
    }
  });

module.exports = router;
