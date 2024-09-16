
const express = require("express");
const controllers = require("../controllers/users")
const router = express.Router();
const auth = require("../controllers/auth")

router.get("/users",auth.verifyLogin,auth.verifyToken,controllers.usersFinder);
router.post("/register",controllers.registerUsers);
router.post("/login",controllers.loginUser)
router.put("/updateUsers/:id",controllers.updateUser)
router.delete("/delete/:id",controllers.deleteUser)
router.get("/admin",auth.verifyADMIN,controllers.admin)
module.exports = router;