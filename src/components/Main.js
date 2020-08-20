import React from "react"
import Computer from "./Computer"

const styles={
    textAlign: "center"
}

function Main(){
    return(
        <div style={styles}>
            <h1>Clicker StartUp</h1>
            <Computer />
        </div>
    )
}

export default Main