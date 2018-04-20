const mongoose = require("mongoose");
const db = require("./db");
var Schema  = mongoose.Schema;
const questionSchema = require("./question");

const UserSchema = new Schema({
    name : {type: String , trim: true , required: true} ,
    password : { type: String , trim: true ,required: true},
    email: { type: String , trim: true , unique: true ,required: true},
    image: { type: String , trim: true },
    numberPhone: { type: Number , trim: true , required:true },
    question: [questionSchema] 
});

const User = mongoose.model('Users' , UserSchema);

module.exports = { UserSchema };
