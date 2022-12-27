import React from "react";
import ChildA from "./ChildA";
import { handleFirstName, handleLastName } from "../store/actions/userAction";
import { connect, useDispatch } from "react-redux";

function Parent() {

    const dispatch = useDispatch();

    const onSetFirstName = (e) => {
        dispatch(handleFirstName(e.target.value))
    }

    const onSetLastName = (e) => {
        dispatch(handleLastName(e.target.value))
    }

    return (
        <>
            <div>This is Parent Component</div>
            <br />
            <form>
                <input placeholder="First Name" onChange={onSetFirstName} />
                <input placeholder="Last Name" onChange={onSetLastName} />
            </form>
            <br />
            <ChildA />
        </>
    )
}
export default Parent;