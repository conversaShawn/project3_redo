import PostActivity from "../models/postActivity.js"

export const getAllActivities = async (req, res) => {
    try {
        const postActivities = await PostActivity.find();
        res.status(200).json(postActivities);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createActivity = async (req, res) => {
    const activity = req.body;
    const newActivity = new PostActivity(activity);
    try {
        await newActivity.save();
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};