const {Router} = require("express")
const profRouters = Router()
const profCtrl = require("../controller/user.controller")

profRouters.get("/profesionales" , profCtrl.getProf)
profRouters.post("/profesionales" , profCtrl.addProf)
profRouters.put("/profesionales" , profCtrl.editProf)
profRouters.delete("/profesionales", profCtrl.deleteProf)

module.exports = profRouters

