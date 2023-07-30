const router = require('express').Router()
const userController = require("../controllers/user.controller")
const admin = require("../Authorization/Authorization_admin")



router.post("/user/signup", userController.signup)
router.post("/user/login", userController.login)
router.put("/user/addTocart", userController.authenticateToken, userController.addTocart)

module.exports = router;
