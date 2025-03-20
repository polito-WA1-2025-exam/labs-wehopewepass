import connectDB from "../dbConfig.mjs"
import dayjs from "dayjs"

export const fetchOrders = async (req,res)=>{
    
    const db = await connectDB()
  
    
    
    try{
        const items = await db.all(`SELECT * FROM orders`).then((data)=>
            {console.log(data)})

        res.status(200).json(items)

    }
    catch(err){
        console.log("Error Fetching Data::",err);
        
    }
    finally{
        await db.close()
    }
}


export const fetchOrdersById = async (req,res) =>{
    const db = await connectDB()
    const orderId = req.params.id
    try{
        
            const item = await db.get(`SELECT * FROM orders WHERE id=${orderId}`).then((data)=>
            {console.log(data)})

        res.status(200).json(item)

    }
    catch(err){
        console.log("Error Fetching Data::",err);
        
    }
    finally{
        await db.close()
    }
}

export const fetchOrdersByAmount = async (req,res) =>{
    const db = await connectDB()
    //const time = req.body
    req.body = {
        amount: 12
    }
    
    try{
        
            const item = await db.all(`SELECT * FROM orders WHERE totalAmount=${req.body.amount}`).then((data)=>
            {console.log(data)})

        res.status(200).json(item)

    }
    catch(err){
        console.log("Error Fetching Data::",err);
        
    }
    finally{
        await db.close()
    }
}

export const createOrders = async(req,res) =>{
    const db = await connectDB()
    //const order = req.body.order
    const order = req.body.order = {
        userId: 3,
        timestamp: dayjs(), 
        message: "Extra Meat",
        totalAmount: 30
    }
    
    try{
        const sql = `INSERT INTO orders (userId, timestamp, message, totalAmount) VALUES (?, ?, ?, ?)`;
        const result = await db.run(sql, [
            order.userId,
            order.timestamp.format("YYYY-MM-DD HH:mm:ss"), 
            order.message.toString(), 
            order.totalAmount
        ]);

        res.status(201).json(result)

    }
    catch(err){
        console.log("Error Fetching Data::",err);
        
    }
    finally{
        await db.close()
    }
}

export const updateOrderByAmount = () =>{

}

export const updateOrderById = () =>{
    
}

export const deleteOrder = () =>{
    
}
