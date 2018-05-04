const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/AppChat')
.then(() => console.log('connected'))
.catch(() => process.exit(1));

const UserSchema = new mongoose.Schema({
    name : {type: String , trim: true , required: true ,unique: true} ,
    password : { type: String , trim: true ,required: true ,unique: true},
    email: { type: String , trim: true , unique: true ,required: true},
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };