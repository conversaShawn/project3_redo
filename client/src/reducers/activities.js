export default (activities = [], action) => { // state = [], action
	switch (action.type) { //action.type === CRUD
		case 'UPDATE':
			return activities.map((activities) => activities._id === action.payload ? action.payload : activities); //spread,
		case 'FETCH_ALL':
			return action.payload; //return state
		case 'CREATE':
			return [ ...activities, action.payload ]; //spread,
		default:
			return activities; //return state
	}
};
