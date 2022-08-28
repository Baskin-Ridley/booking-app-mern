import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, getAllHotels, updateHotel, deleteHotel, getHotel } from "../controllers/hotelController.js"


const router = express.Router();

//create
router.post("/", createHotel)

//update
router.put("/:id", updateHotel)

//delete
router.delete("/:id", deleteHotel)
//get
router.get("/:id", getHotel)

//get all
router.get("/", getAllHotels)


export default router