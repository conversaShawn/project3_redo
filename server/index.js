import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"

import activitiesRoutes from "./routes/activities.js"

const app = express();

// PARSE REGISTERED MIDDLEWARE
app.use(express.urlencoded({limit: "30mb", extended: true}));

// PARSE CORS REQUESTS
app.use(cors());

// GET ALL ROUTES
app.use("/activities", activitiesRoutes)

// PARSE HTTP REQUEST FROM JSON STRING
app.use(express.json({limit: "30mb", extended: true}));

// GRAB DB KEYS
dotenv.config()
// console.log(process.env)
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hbh5c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// PORT NUMBER
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log("error:", error.message));

mongoose.set("useFindAndModify", false);