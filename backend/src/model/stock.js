const mongoose=require('mongoose')
//const Product=require('productsModel.js')
const Schema=mongoose.Schema

const stockSchema=new Schema({
    prodID: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },
    expDate : Date,
    offShelf_Life: Number,
    Desc:[String],
    NoOfUnits: Number,
    retailPrice: Number,
    wholesalePrice: Number,
    discountedAt: Number,
    Image: String
},{timestamps:true})

module.exports = mongoose.model('Stocks', stockSchema)