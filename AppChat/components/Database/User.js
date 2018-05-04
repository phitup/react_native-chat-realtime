const mongoose = require("mongoose");

mongoose.connect('mongoDb://localhost/AppChat')
.then(() => console.log("Database Connect"))
.catch(() => process.exit(1));

const userSchema = new mongoose.Schema({
    username: {type: String , trim: true , unique:true},
    password: {type: String , trim: true , unique:true}
});

const User = mongoose.model('User' , userSchema);

module.exports = { User };

