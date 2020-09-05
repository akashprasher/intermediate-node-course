const mangoose = require('mangoose');

const UserSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    email:{ type: String, required: true, unique: true},
    password:{ type: String, reuired: true}
});

module.exports= mongoose.model('User', UserSchema)