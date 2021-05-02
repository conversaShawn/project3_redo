export default (activities = [], action) => { // state = []
	switch (action.type) {
		case 'UPDATE':
		case 'LIKE':
			return activities.map((activities) => activities._id === action.payload ? action.payload : activities); //spread,
		case 'FETCH_ALL':
			return action.payload; //return state
		case 'CREATE':
			return [ ...activities, action.payload ]; //spread,
		default:
			return activities; //return state
	}
};
