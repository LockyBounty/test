const mongoose = require('mongoose');
//--> 1
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    //---> 2
    email: {type : String, required : true, unique : true},
    password : {type : String, required : true}
});

//--> 3
userSchema.plugin(uniqueValidator);
// --> 4
module.exports = mongoose.model('User', userSchema);