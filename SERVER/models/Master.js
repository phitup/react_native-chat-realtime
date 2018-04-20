const mongoose = require("mongoose");
const db = require("./db");
var Schema  = mongoose.Schema;

const MasterSchema = new Schema({
    name : {type: String , trim: true , required: true} ,
    password : { type: String , trim: true ,required: true},
    email: { type: String , trim: true , unique: true ,required: true},
    image: { type: String , trim: true },
    question : { type:Schema.Types.ObjectId , ref: 'question' },
    numberPhone: { type: Number , trim: true , required:true },
    class: { type:Schema.Types.ObjectId , ref: 'class' },
});
const Master = mongoose.model('Masters' , MasterSchema);

module.exports = { MasterSchema };