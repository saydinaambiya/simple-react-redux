import React from "react";
import ChildC from "./ChildC";

function ChildB() {
    return (
        <>
            This is ChildB Component
            <ChildC />
            <br />
        </>
    )
}

export default ChildB;