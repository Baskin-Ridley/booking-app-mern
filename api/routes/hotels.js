import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//create
router.post("/", async (req,res,next) => {

    const newHotel = new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
        //200 is request has succeeded
    } catch (err) {
        next(err)
        //500 is server error
    }
})

//update
router.put("/:id", async (req, res,next) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {new: true }
        );
        res.status(200).json(updatedHotel);
        //200 is request has succeeded
    } catch (err) {
        next(err)
        //500 is server error
    }
})
//delete
router.delete("/:id", async (req, res,next) => {
    try{
        await Hotel.findByIdAndDelete(
            req.params.id

        );
        res.status(200).json("deleted hotel");
        //200 is request has succeeded
    } catch (err) {
        next(err)
        //500 is server error
    }
})
//get
router.get("/:id", async (req, res,next) => {
    try{
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel);
        //200 is request has succeeded
    } catch (err) {
        next(err)
        //500 is server error
    }
})

//get all
router.get("/", async (req, res,next) => {

    const failed = true
    const err = new Error()
    err.status = 404;
    err.message = "Sorry, not found!"
    if (failed) return next(err);

    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels);
        //200 is request has succeeded
    } catch (err) {
        next(err)
        //500 is server error
    }
})


export default router