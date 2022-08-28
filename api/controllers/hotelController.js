import Hotel from "../models/Hotel.js";

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
        //200 is request has succeeded
    } catch (err) {
        next(err)
        //500 is server error
    }
}

export const deleteHotel = async (req,res,next)=>{


}

export const deleteHotel = async (req,res,next)=>{

    
}

export const deleteHotel = async (req,res,next)=>{

    
}

export const deleteHotel = async (req,res,next)=>{

    
}
