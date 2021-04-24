export default (activities = [], action) => { // state = []
    switch(action.type) {
        case "FETCH_ALL":
            return action.payload; //return state
        case "CREATE":
            return activities; //return state
        default:
            return activities; //return state
    }
}