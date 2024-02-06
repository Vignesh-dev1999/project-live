const joi = require("joi");
const { validate } = require("../management/department");



const validat= (data)=>{
    const val = joi.object({
        deptname: joi.string().alphanum().min(3).max(10).required(),
        deptid:joi.string().min(3).max(10).required()
    })
     return val.validate(data);
}

module.exports=validat
