import axios from "axios";

const url = "http://localhost:5000/activities";

export const fetchActivities = () => axios.get(url);
export const createActivity = (newActivity) => axios.post(url, newActivity);
export const updateActivity =(id, updatedActivity) => axios.patch(`${url}/${id}`, updatedActivity);