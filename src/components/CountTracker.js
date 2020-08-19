import React, {useState} from "react"

const styles={
    border: "2px solid red"
}

function CountTracker(props){

    let count = props.count.toFixed(0)
    let countMessage = count

    let cps = props.cps.toFixed(1)
    let cpsMessage = cps

    if (count/1000000000000 >= 1){
        countMessage = (count/1000000000000).toFixed(3) + " Trillion"
    }
    else if (count/1000000000 >= 1){
        countMessage = (count/1000000000).toFixed(3) + " Billion"
    }
    else if (count/1000000 >= 1){
        countMessage = (count/1000000).toFixed(3) + " Million"
    }
        

    if (cps/1000000000000 >= 1){
        cpsMessage = (cps/1000000000000).toFixed(3) + " Trillion"
    }
    else if (cps/1000000000 >= 1){
        cpsMessage = (cps/1000000000).toFixed(3) + " Billion"
    }
    else if (cps/1000000 >= 1){
        cpsMessage = (cps/1000000).toFixed(3) + " Million"
    }

    return(
        <div style={styles}>
            {/* <h1>CountTracker</h1> */}
            <h1 className="counter-style">{countMessage} Clicks</h1>
            <h3 className="counter-style">{props.cps.toFixed(1)} CPS</h3>
        </div>
    )
}

export default CountTracker