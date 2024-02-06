const department = require("../management/department")
const ex =require("express")
const app = ex.Router()

const dept = require("../velidations/validation")

app.post("/",async(req,res)=>{
    const value = dept(req.body)
    if(value != undefined ) return res.send(value)

    const result= await department({
        DeptName:req.body.deptname,
        Deptid:req.body.deptid
    })

    result.save()
    res.send(result)
})

app.get("/",async(req,res)=>{
    const result = await department.find()
    res.send(result)
})

app.put("/:id",async(req,res)=>{
    const result = await department.findById({
        _id:req.params.id
    })
    console.log(result);
    result.DeptName = req.body.deptname
    result.save()
    res.send(result)
})
module.exports = app