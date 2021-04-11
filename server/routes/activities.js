import express from "express";

import {getAllActivities, createActivities} from "../controllers/activities.js"

const router = express.Router();

router.get("/", getAllActivities)
router.post("/", createActivities)

export default router;