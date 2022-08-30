import express from "express"
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/userController.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("You are authenticated")
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("You are logged in")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("You are logged in and can delete any account")
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