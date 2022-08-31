import Room from "../models/Room.js";
import Hotel from "../models/Room.js";
import { createError } from "../utils/error.js"

export const createRoom = async (req, res, next) => {
    const hotelId = req.parms.hotelId;
    const newRoom = new Room (req.body)

    try {
        const savedRoom = await newRoom.save();
        try {
          await Hotel.findByIdAndUpdate(hotelId, {
            $push: { rooms: savedRoom._id },
          });
        } catch (err) {
          next(err);
        }
        res.status(200).json(savedRoom);
      } catch (err) {
        next(err);
      }
    };
    
    export const updateRoom = async (req,res,next)=>{
      try{
          const updatedRoom = await Room.findByIdAndUpdate(
              req.params.id,
              { $set: req.body },
              {new: true }
          );
          res.status(200).json(updatedRoom);
          //200 is request has succeeded
      } catch (err) {
          next(err)
          //500 is server error
      }
  
  }
  
  export const deleteRoom = async (req,res,next)=>{
      try{
          await Room.findByIdAndDelete(
              req.params.id
  
          );
          res.status(200).json("deleted Room");
          //200 is request has succeeded
      } catch (err) {
          next(err)
          //500 is server error
      }
      
  }
  
  export const getRoom = async (req,res,next)=>{
      try{
          const room = await Room.findById(
              req.params.id
          );
          res.status(200).json(room);
          //200 is request has succeeded
      } catch (err) {
          next(err)
          //500 is server error
      }
      
  }
  
  
  
  export const getAllRooms = async (req,res,next)=>{
      try{
          const Rooms = await Room.find()
          res.status(200).json(rooms);
          //200 is request has succeeded
      } catch (err) {
          next(err)
          //500 is server error
      }
      
  }
  