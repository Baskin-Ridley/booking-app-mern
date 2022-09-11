import express from "express"

const router = express.Router();
import { createRoom, getAllRooms, updateRoom, deleteRoom, getRoom, updateRoomAvailability } from "../controllers/roomController.js"
import { verifyAdmin } from "../utils/verifyToken.js"

//create
router.post("/:hotelId", verifyAdmin, createRoom)

//update
router.put("/:id", verifyAdmin, updateRoom)
router.put("/availability/:id",  updateRoomAvailability)
//delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)
//get
router.get("/:id", getRoom)

//get all
router.get("/", getAllRooms)



export default router