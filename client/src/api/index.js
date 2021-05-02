import axios from 'axios';

const url = 'http://localhost:5000/activities';

// READ
export const fetchActivities = () => axios.get(url);
// CREATE
export const createActivity = (newActivity) => axios.post(url, newActivity);
// UPDATE
export const updateActivity =(id, updatedActivity) => axios.patch(`${url}/${id}`, updatedActivity);
// DELETE
export const deleteActivity =(id) => axios.delete(`${url}/${id}`);