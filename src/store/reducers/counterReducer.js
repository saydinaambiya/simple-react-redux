import { INCREMENT, DECREMENT } from "../types/counterType";

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - action.value
            }

        default:
            return state;
    }
}

export default counterReducer;