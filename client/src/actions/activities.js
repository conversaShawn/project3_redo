import * as api from '../api';

// Action creators - function that returns an action

// READ (FETCH_ALL)
export const getActivities = () => async (dispatch) => {
	try {
		const { data } = await api.fetchActivities();

		dispatch({ type: 'FETCH_ALL', payload: data });
	} catch (error) {
		console.log('error:', error);
	}
};

// CREATE
export const createActivity = (activity) => async (dispatch) => {
	try {
		const { data } = await api.createActivity(activity);

		dispatch({ type: 'CREATE', payload: data });
	} catch (error) {
		console.log('error:', error);
	}
};

// UPDATE
export const updateActivity = (id, activity) => async (dispatch) => {
	try {
		// response:data
		const { data } = await api.updateActivity(id, activity);

		dispatch({ type: 'UPDATE', payload: data });
	} catch (error) {
		console.log('error:', error);
	}
};

// DELETE
export const deleteActivity = (id) => async (dispatch) => {
	try {
		await api.deleteActivity(id);
		
		dispatch({ type: 'DELETE', payload: id })
	} catch (error) {
		console.log('error:', error);
	}
}

// LIKES
export const likeActivity = (id) => async (dispatch) => {
	try {
		const { data } = await api.likeActivity(id);

		dispatch({ type: 'UPDATE', payload: data });
} catch (error) {
		console.log('error:', error);
	}
}