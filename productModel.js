const {model, Schema} = require('mongoose');

const productSchema = new Schema({
    name:{type: String, require },
    model:{type: String, require},
    size: {type: String, require},
    description: {type:String, require}
})

const Products = new model('Product', productSchema)

module.exports=Products;