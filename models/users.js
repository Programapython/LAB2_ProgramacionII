const mongoose = require("mongoose")

const Users = mongoose.model('person',{
    dni: Number,
    name: String,
    surname: String,
    gender: String,
    age: Number,

})

module.exports = Users