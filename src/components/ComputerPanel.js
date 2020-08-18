import React from "react"
import CountTracker from "./CountTracker"
import Computer from "./Computer"

const styles={
    border: "2px solid red"
}

function FrontEnd(){
    return(
        <div style={styles}>
            <h1>Clicker StartUp</h1>
            <Computer />
        </div>
    )
}

export default FrontEnd