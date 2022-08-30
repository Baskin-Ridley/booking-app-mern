import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, getAllHotels, updateHotel, deleteHotel, getHotel } from "../controllers/hotelController.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel)

//update
router.put("/:id", verifyAdmin, updateHotel)

//delete
router.delete("/:id", verifyAdmin, deleteHotel)
//get
router.get("/:id", getHotel)

//get all
router.get("/", getAllHotels)


export default router