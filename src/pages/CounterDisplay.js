import React from "react";
import CounterControl from "./components/CounterControl";
import CounterOutput from "./components/CounterOutput";
import { connect, useDispatch } from "react-redux";
import { onIncrement, onDecrement } from "../store/actions/counterActions";

const CounterDisplay = (props) => {
    const dispatch = useDispatch();
    return (
        <>
            <CounterOutput />
            <div>
                <CounterControl label="Increment" onClick={() => dispatch(onIncrement())} />
                <CounterControl label="Decrement" onClick={() => dispatch(onDecrement())} />
            </div>
        </>
    )
}

export default CounterDisplay;