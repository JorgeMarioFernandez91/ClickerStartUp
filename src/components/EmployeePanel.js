import React from "react"

const styles = {
    border: "2px solid red"
}

class EmployeePanel extends React.Component{

    constructor(props){
        super(props)
        
        this.showEmployees = this.showEmployees.bind(this)
    }

    showEmployees(employee, employeeCount){

        const employeeArray = []
        // populate array with the total number of images for specific employee
        for (var i = 0; i < employeeCount; i += 1) {
            employeeArray.push(       
                <img  
                    // key makes sure that each img has a unique id associated to it, 
                        // in this case we use the current employee count of this type
                    key={i}  
                    src={require("./images/" + employee + "-clicker.png")}  
                    alt="Button" 
                    style={{maxHeight: "35px"}}></img>
                )
        }

        return (
            <div style={styles}>
                {employeeArray}
            </div>
        )
    }

    render () {
        return (
            <div>
                {this.showEmployees("intern", this.props.internCount)}
                {this.showEmployees("junior", this.props.juniorCount)}
                {this.showEmployees("mid", this.props.midCount)}
                {this.showEmployees("senior", this.props.seniorCount)}
            </div>
        )
      }
}

export default EmployeePanel