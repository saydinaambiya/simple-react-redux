import React from "react";
import { connect, useSelector } from "react-redux";

function ChildC() {
    const { firstName: fName, lastName: lName } = useSelector(state => state.user)
    return (
        <>
            This is ChildC Component
            <br />
            <h3>Data from parent component is as follows:</h3>
            <h4>{fName}, {lName}</h4>
        </>
    )
}

export default ChildC;