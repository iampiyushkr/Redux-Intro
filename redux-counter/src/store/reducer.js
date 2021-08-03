import { ADD_COUNT,DEC_COUNT,RESET_COUNT } from "./actionType.js"
const initState = {
    count: 10,
    todo:[],
 }
export const reducerFunction = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + payload
            };
        case DEC_COUNT:
            return {
                ...state,
                count: state.count - payload
            };
        case RESET_COUNT:
            return {
                ...state,
                count: 0
            };
        default: {
            return state
        }
    };
    
}