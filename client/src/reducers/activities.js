export default (activities = [], action) => { // state = []
    switch(action.type) {
        case "FETCH_ALL":
            return action.payload; //return state
        case "CREATE":
            return [...activities, action.payload]; //spread, 
        default:
            return activities; //return state
    }
}