import React from "react"
import FormatNumbers from "./FormatNumbers"

const styles={
    border: "2px solid red"
}

function CountTracker(props){

    let count = props.count.toFixed(0)
    let countMessage = <FormatNumbers formatNumber={count} decimals={3} />

    return(
        <div >
            {/* <h1>CountTracker</h1> */}
            <h1 className="counter-style">{countMessage} Clicks</h1>
            <h3 className="counter-style">{props.cps.toFixed(1)} CPS</h3>
        </div>
    )
}

export default CountTracker