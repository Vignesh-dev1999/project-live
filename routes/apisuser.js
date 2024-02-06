const user = require("../management/usermanagement")
const ex = require("express")
const app = ex.Router()

app.post("/",async(req,res)=>{
    
    const result = await user ({
        Name:req.body.name,
        Email:req.body.email,
        Password:req.body.password,
        Department:req.body.department,
        Role:req.body.role
    })

    result.save()
    res.send(result)
})

module.exports = app