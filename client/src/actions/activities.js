import * as api from '../api';

// Action creators
export const getActivities = () => async (dispatch) => {
	try {
		const { data } = await api.fetchActivities();

		dispatch({ type: 'FETCH_ALL', payload: data });
	} catch (error) {
		console.log('error:', error);
	}
};

export const createActivity = (activity) => async (dispatch) => {
	try {
		const { data } = await api.createActivity(activity);

		dispatch({ type: 'CREATE', payload: data });
	} catch (error) {
		console.log('error:', error);
	}
};

export const updateActivity = (id, activity) => async (dispatch) => {
	try {
		const { data } = await api.updateActivity(id, activity);

		dispatch({ type: 'UPDATE', payload: data });
	} catch (error) {
		console.log('error:', error);
	}
};

// likes
export const likeActivity = (id) => async (dispatch) => {
	try {
		const { data } = await api.likeActivity(id);

		dispatch({ type: 'UPDATE', payload: data });
	} catch (error) {
		console.log('error:', error);
	}
}