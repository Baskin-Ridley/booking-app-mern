import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//create
router.post("/", async (req,res)=>{

    const NewHotel = new Hotel(req.body)

    try{
        const savedHotel = await NewHotel.save()
        res.status(200).json(savedHotel)
        //200 is request has succeeded
    }catch(err){
        res.status(500).json(err)
        //500 is server error
    }
})




export default router