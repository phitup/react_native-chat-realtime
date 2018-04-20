const mongoose = require("mongoose");
const db = require("./db");
var Schema  = mongoose.Schema;

const likeSchema = new Schema({
    author: { type:Schema.Types.ObjectId , ref: 'User' },
    like: { type:Schema.Types.ObjectId , ref: 'Like' },
});
const Like = mongoose.model('Likes' , likeSchema);
module.exports = { likeSchema };