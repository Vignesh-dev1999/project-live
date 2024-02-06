const mongodb = require('mongoose')
mongodb.connect("mongodb://localhost:27017/management").then(()=>console.log("mongodb connect")).catch(()=>console.log("Not connect"))

module.exports=mongodb.connection
