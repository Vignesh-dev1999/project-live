const management = require("../management/managementschema")
const ex = require("express")
const app = ex.Router()

app.post("/",async(req,res)=>{
    const result = await management({

        Name:req.body.name,
        Email:req.body.email,
        Password:req.body.password,
        Number:req.body.number,
        Role:req.body.role

    })
    result.save()
    res.send(result)
})

module.exports = app