import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next)=>{
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
        //200 is request has succeeded
    } catch (err) {
        next(err)
        //500 is server error
    }
}

export const updateHotel = async (req,res,next)=>{
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

}

export const deleteHotel = async (req,res,next)=>{
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
    
}

export const getHotel = async (req,res,next)=>{
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
    
}



export const getAllHotels = async (req,res,next)=>{
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels);
        //200 is request has succeeded
    } catch (err) {
        next(err)
        //500 is server error
    }
    
}

export const getByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list);
        //200 is request has succeeded
    } catch (err) {
        next(err)
        //500 is server error
    }
    
}