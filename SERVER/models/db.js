var mongoose = require("mongoose");
var Schema  = mongoose.Schema;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/AppChat' , {useMongoClient: true})
.then(() => console.log('connected'))
.catch((error) => console.log(error.message));