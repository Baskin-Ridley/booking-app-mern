import express from "express"
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/userController.js"
import { verifyToken } from "../utils/verifyToken.js"
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("You are authenticated")
})

router.get("/checkuser/:id", verifyToken, (req,res,next)=>{
    res.send("You are logged in")
})

//update
router.put("/:id", updateUser)

//delete
router.delete("/:id", deleteUser)
//get
router.get("/:id", getUser)

//get all
router.get("/", getAllUsers)




export default router