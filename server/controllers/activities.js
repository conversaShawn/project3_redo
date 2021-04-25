import Activity from "../models/activities.js"

export const getActivities = async (req, res) => {
    try {
        const postActivity = await Activity.find();
        res.status(200).json(postActivity);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createActivity = async (req, res) => {
    const activity = req.body;
    const newActivity = new Activity(activity);
    try {
        await newActivity.save();
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};