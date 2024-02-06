require("./database/mongodb")
const express= require("express")
const app = express();
app.use(express.json())

const apps = require("./routes/apis")
app.use(apps)
app.listen(process.env.PORT || 8080)

const dept = require("./routes/apisdept")
app.use("/dept",dept)

const user = require("./routes/apisuser")
app.use("/user",user)