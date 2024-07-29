const express = require('express');
const router = express.Router();
const {
    createOrder,
    getOrders,
    deleteOrder,
} = require("../controllers/orderController")
// Create a new order
router.post('/',createOrder);

// Get all orders
router.get('/', getOrders);

// Delete an order by ID
router.delete('/:orderId', deleteOrder);

module.exports = router;
