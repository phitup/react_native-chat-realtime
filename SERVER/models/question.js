
const mongoose = require("mongoose");
const db = require("./db");
var Schema  = mongoose.Schema;

const questionSchema = new Schema({
    author: { type:Schema.Types.ObjectId , ref: 'User' },
    comment: { type:Schema.Types.ObjectId , ref: 'Comment' },
    like: { type:Schema.Types.ObjectId , ref: 'Like' },
    content: { type:String , trim: true , required: true},
    image: { type:String },
    class: { type:Schema.Types.ObjectId , required: true }
});
const Question = mongoose.model('Questions' , questionSchema);

module.exports = { questionSchema };