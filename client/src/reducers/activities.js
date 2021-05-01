export default (activities = [], action) => { // state = [], action
	switch (action.type) { //action.type === CRUD
		case 'DELETE':
			return activities.filter((activity) => activity._id === action.payload);
		case 'UPDATE':
			return activities.map((activity) => activity._id === action.payload ? action.payload : activity); //spread,
		case 'FETCH_ALL':
			return action.payload; //return state
		case 'CREATE':
			return [ ...activities, action.payload ]; //spread, stored in action.payload
		default:
			return activities; //return state
	}
};