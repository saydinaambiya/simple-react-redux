import { SET_FIRST_NAME, SET_LAST_NAME } from "../types/userType";

export const handleFirstName = (value) => {
    return {
        type: SET_FIRST_NAME,
        value: value
    }
}

export const handleLastName = (value) => {
    return {
        type: SET_LAST_NAME,
        value: value
    }
}