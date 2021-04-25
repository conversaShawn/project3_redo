import * as api from "../api"

// Action creators
export const getActivities = () => async (dispatch) => {
    try {
        const { data } = await api.fetchActivities();

        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log("error:", error.message)
    }
}

export const createActivity = (post) => async (dispatch) => {
    try {
        const { data } = await api.createActivity(post);

        dispatch({ type: "CREATE", payload: data })
    } catch (error) {
        console.log("error:", error.message)
    }
}

