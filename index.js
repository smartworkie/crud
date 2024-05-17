const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const {handleGetRequest, handlePostRequest, handleEditRequest, handleGetOneProduct, handleDeleteRequest} = require('./function')

dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000

app.use(express.json())
app.listen(PORT, ()=>{
    console.log(`server listening on this port, ${PORT}`)
})
mongoose.connect(process.env.MONGODB_URI).then(()=> 
console.log("Connected to MongoDB"))

app.get('/getproduct', handleGetRequest)

app.post('/postProduct', handlePostRequest)

app.put('/editProduct/:id', handleEditRequest)

app.get("/getOneProduct/:id", handleGetOneProduct)

app.delete('/deleteProduct/:id', handleDeleteRequest)