import { ADD_COUNT,DEC_COUNT,RESET_COUNT,MULT_COUNT,DEV_COUNT } from "./actionType.js"

export const addCount = (count) => {
    return { type: ADD_COUNT, payload: Number(count) }
}
export const decCount = (count) => {
     return { type: DEC_COUNT, payload: count }
     
}

export const multCount = (count) => {
    return { type: MULT_COUNT, payload: count }
}
export const devCount = (count) => {
     return { type: DEV_COUNT, payload: count }

}
export const resetCount = () => {
     return { type: RESET_COUNT }
}