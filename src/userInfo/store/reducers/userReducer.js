import { SET_FIRST_NAME, SET_LAST_NAME } from "../types/userType";

const initialState = {
    firstName: "First Name",
    lastName: "Last Name",
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FIRST_NAME:
            return {
                ...state,
                firstName: action.value
            }
        case SET_LAST_NAME:
            return {
                ...state,
                lastName: action.value
            }
        default:
            return state;
    }
}

export default userReducer;