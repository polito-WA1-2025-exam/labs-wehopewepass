import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import orderRouter from "./routes/order.mjs"

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


app.use('/order',orderRouter)

app.listen(PORT,()=>{
    console.log(`Server listening on port http://localhost:${PORT}`)
})