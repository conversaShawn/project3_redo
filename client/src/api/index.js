import axios from "axios";

const url = "/";

export const fetchActivities = () => axios.get(url);
export const createActivity = (newActivity) => axios.post(url, newActivity)