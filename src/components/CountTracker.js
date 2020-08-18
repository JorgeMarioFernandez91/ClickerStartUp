import React, {useState} from "react"

const styles={
    border: "2px solid red"
}

function CountTracker(props){

    return(
        <div style={styles}>
            {/* <h1>CountTracker</h1> */}
            <h1 className="counter-style">{props.count.toFixed(0)} Clicks</h1>
            <h3 className="counter-style">{props.cps.toFixed(1)} CPS</h3>
        </div>
    )
}

export default CountTracker