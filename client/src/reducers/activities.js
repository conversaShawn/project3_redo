export default (activities = [], action) => { // state = []
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload; //return state
		case 'CREATE':
			return [ ...activities, action.payload ]; //spread,
		case 'UPDATE':
			return activities.map((activity) => activities._id === action.payload ? action.payload : activity); //spread,
		default:
			return activities; //return state
	}
};
