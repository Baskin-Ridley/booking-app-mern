import express from "express"
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/userController.js"
const router = express.Router();

//update
router.put("/:id", updateUser)

//delete
router.delete("/:id", deleteUser)
//get
router.get("/:id", getUser)

//get all
router.get("/", getAllUsers)




export default router