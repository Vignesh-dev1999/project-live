const mongodb = require("mongoose")

const managementschema = new mongodb.Schema({
    Name:String,
    Email:String,
    Password:String,
    Number:Number,
    Role:[String]
})

const management = mongodb.model("management",managementschema)



module.exports = management;