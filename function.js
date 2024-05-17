const Products = require('./productModel')

const handleGetRequest = async (req,res)=> {
    const products = await Products.find()
    return res.status(200).json({message: `Successful, ${products}, ${products.length}` })
}

const handlePostRequest = async (req,res) => {
    const {name, model, size, description} = req.body

    const newProduct = new Products({name, model, size, description})
    await newProduct.save()
    return res.status(200).json({
        message:"Product Added",
        product: newProduct

    })
}

const handleEditRequest = async(req,res) => {
    const {id} = req.params
    const {name, model, size, description} = req.body
    const editedProduct = await Products.findByIdAndUpdate(
        id, 
        {name, model, size, description},
        {new: true}
    )
       
    return res.status(200).json({
        message:"This Product Has Been Edited",
        product: editedProduct
    })
}

const handleGetOneProduct = async(req,res)=>{
    const {id} = req.params
    const oneProduct = await Products.findById(id)
    return res.status(200).json({message:`This is Your Product ${oneProduct}`})

}
const handleDeleteRequest = async (req,res) => {
   try{ const {id} = req.params

    const deleteProduct = await Products.findByIdAndDelete(id)
    return res.status(200).json({message: 'Product Deleted'})
}
catch(error) {
    return res.status(500).json({message: error.message})
}
}
module.exports = { 
    handleGetRequest,
    handlePostRequest,
    handleEditRequest,
    handleGetOneProduct,
    handleDeleteRequest

}