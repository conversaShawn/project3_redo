import mongoose from 'mongoose'

const activitySchema = mongoose.Schema({
    creator: String,
    title: String,
    message: String,
    tags: [String],
    selectedFile: String,
    rating: {
        type: Number,
        default: null
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Activity = mongoose.model('Activity', activitySchema);

export default Activity;