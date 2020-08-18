import React from "react"

const styles = {
    border: "2px solid red"
}

class EmployeePanel extends React.Component{

    constructor(props){
        super(props)
    }

    

    render () {
        
        const employeeArray = []
        
        // render img for each item in the array, each item will be specific to each employee
        // because we are creating a new employeePanel component for each employee type
        for (var i = 0; i < this.props.employeeTotal; i += 1) {
            employeeArray.push(
            
                <img  
                    // key makes sure that each img has a unique id associated to it, 
                    // in this case we use the current employee count of this type
                    key={i}  
                    src={require("./images/" + this.props.employeeType + "-clicker.png")}  
                    alt="Button" 
                    style={{maxHeight: "35px"}}></img>
                )
        }
        
    
        return (
            employeeArray
        )
      }
}

export default EmployeePanel