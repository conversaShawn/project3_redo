import express from "express";

import {getActivities, createActivity, updateActivity, likeActivity} from "../controllers/activities.js"

const router = express.Router();

router.get("/", getActivities);
router.post("/", createActivity);
router.patch("/:id", updateActivity)

// EDIT LIKES
router.patch("/:id/likeActivity", likeActivity)
export default router;