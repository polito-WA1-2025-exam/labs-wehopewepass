import express from "express"

import {
    fetchOrders,
    fetchOrdersById,
    fetchOrdersByAmount,
    createOrders,
    updateOrderByAmount,
    updateOrderById,
    deleteOrder
    
} from "../controllers/orderController.mjs"
 
const router = express.Router()


router.route("/fetchAll").get(fetchOrders)
router.route("/fetchOrder/:id").get(fetchOrdersById)
router.route("/fetchOrder").get(fetchOrdersByAmount)


router.route("/createOrder").post(createOrders)

export default router