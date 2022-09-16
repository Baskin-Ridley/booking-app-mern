import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
import cors from "cors";
import path from 'path';
import { fileURLToPath } from "url"
const app = express()
dotenv.config()

const connect = async () => {
    try {
    await mongoose.connect(process.env.MONGO);
    console.log("connection successful with mongoDB")
    } catch (error) {
    throw(error);
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected")
})


//middleware

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//error handling middleware

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.status || "Something went Wrong!";
    return res.status(500).json(
        {
            success: false,
            status: errorStatus,
            message: errorMessage,
            stack: err.stack,
        }
    )
})

app.listen(process.env.PORT || 8800, () => {
    connect()
    console.log("connected")
})

// launch app

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.static(path.resolve('../client/build')));
// Handle GET requests to /api route


// All other GET requests not handled before will return our React app
/*app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
}); */