import express from "express";

import {getAllActivities, createActivity} from "../controllers/activities.js"

const router = express.Router();

router.get("/", getAllActivities)
router.post("/", createActivity)

export default router;