import mongoose from 'mongoose';
import Activity from '../models/activities.js'

// READ
export const getActivities = async (req, res) => {
    try {
        const postActivity = await Activity.find();
        res.status(200).json(postActivity);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

// CREATE
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

// UPDATE
export const updateActivity = async (req, res) => {
    const {id: _id } = req.params;
    const activity = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No activity with that id');

    const updatedActivity = await Activity.findByIdAndUpdate(_id, { ...activity, _id}, {new: true});

    res.json(updatedActivity);
}

// DELETE
export const deleteActivity = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No activity with that id");

    await Activity.findByIdAndRemove(id);

    console.log('Delete')

    res.json({ message: "Post deleted successfully" });
}

// LIKES
export const likeActivity = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No activity with that id");

    const activity = await Activity.findById(id);
    const updatedActivity = await Activity.findByIdAndUpdate(id, {likeCount: activity.likeCount + 1 }, {new: true});

    res.json(updatedActivity);
}