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

//  4
export const createActivity = (activities) => async (dispatch) => {
	try {
		const { data } = await api.createActivity(activities);

		dispatch({ type: 'CREATE', payload: data });
	} catch (error) {
		console.log('error:', error);
	}
};

export const updateActivity = (id, activities) => async (dispatch) => {
	try {
		const { data } = await api.updateActivity(id, activities);

		dispatch({ type: 'UPDATE', payload: data });
	} catch (error) {
		console.log('error:', error);
	}
};