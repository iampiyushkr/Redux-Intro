import { ADD_COUNT,DEC_COUNT,RESET_COUNT } from "./actionType.js"

export const addCount = (count) => {
    return { type: ADD_COUNT, payload: count }
}
export const decCount = (count) => {
     return { type: DEC_COUNT, payload: count }
}
export const resetCount = () => {
     return { type: RESET_COUNT }
}