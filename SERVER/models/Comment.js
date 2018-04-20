const mongoose = require("mongoose");
const db = require("./db");
var Schema  = mongoose.Schema;

const commentSchema = new Schema({
    author: { type:Schema.Types.ObjectId ,  unique: true ,ref: 'User' },
    comment: { type:Schema.Types.ObjectId , ref: 'Comment' },
    like: { type:Schema.Types.ObjectId , ref: 'Like' },

});
const Comment = mongoose.model('Comments' , commentSchema);

module.exports = { commentSchema };