import mongoose from 'mongoose';
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

export const updateActivity = async (req, res) => {
    const {id: _id } = req.params;
    const activity = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

    const updatedActivity = await Activity.findByIdAndUpdate(_id, { ...activity, _id}, {new: true});

    res.json(updatedActivity);
}