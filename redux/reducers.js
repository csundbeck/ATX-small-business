import { combineReducers } from 'redux'

// add switch statements in here
const businesses = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return ([...state, action.value]);
        // case 'REMOVE_CAR':
        //     let newState = state.slice();
        //     newState.splice(action.value, 1);
        //     return newState;
        default:
            return state;
    }
}

export default combineReducers({ businesses })