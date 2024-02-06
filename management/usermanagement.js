const mongodb = require("mongoose")

const usermanagement = new mongodb.Schema({
    Name:String,
    Email:String,
    Password:String,
    Department:String,
    Role:String
})

const user= mongodb.model("user",usermanagement)

module.exports=user;