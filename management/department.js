const mongodb =require("mongoose")

const departmentschema =new mongodb.Schema({
    DeptName:String,
    Deptid:Number
})

const department = mongodb.model("department",departmentschema)

module.exports = department;


