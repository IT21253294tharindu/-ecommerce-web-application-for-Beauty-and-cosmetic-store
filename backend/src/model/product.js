const mongoose = require('mongoose')

const Schema = mongoose.Schema


const prodSchema= new Schema({
   
    name: String,
    descr: [String],
    type: String,
    sub_type: String
},{timestamps: true})

module.exports = mongoose.model('Products', prodSchema, 'Inventory')