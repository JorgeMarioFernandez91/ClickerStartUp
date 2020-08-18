import React from "react"
import Upgrades from "./Upgrades"
import HireEmployees from "./HireEmployees"

const styles={
    border: "2px solid red"
}

function BackEnd(){
    return(
        <div style={styles}>
            <h1>Hire Panel</h1>
            <Upgrades />
            <HireEmployees />
        </div>
    )
}

export default BackEnd