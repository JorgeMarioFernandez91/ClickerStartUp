import React from "react"

const blueBorder = {
    border: "8px solid #368ABC",
    marginBottom: "10px",
}

const internBackground ={
    border: "6px solid #298D4E",
    backgroundColor: "#36BC68",
    marginBottom: "10px",
    marginRight: "10px",
    paddingTop: "8px",
    paddingBottom: "2px"
}

const juniorBackground = {
    border: "6px solid #298D80",
    backgroundColor: "#36BCAB",
    marginBottom: "10px",
    marginRight: "10px",
    paddingTop: "8px",
    paddingBottom: "2px"
}

const midLevelBackground = {
    border: "6px solid #29688D",
    backgroundColor: "#368ABC",
    marginBottom: "10px",
    marginRight: "10px",
    paddingTop: "8px",
    paddingBottom: "2px"
}

const seniorBackground = {
    border: "6px solid #29358D",
    backgroundColor: "#3647BC",
    marginBottom: "10px",
    marginRight: "10px",
    paddingTop: "8px",
    paddingBottom: "2px"
}

const arr = [internBackground, juniorBackground, midLevelBackground, seniorBackground]

class EmployeePanel extends React.Component{

    constructor(props){
        super(props)
        
        this.showEmployees = this.showEmployees.bind(this)
        this.getBackground = this.getBackground.bind(this)

    }

    getBackground(employee){
        
        if (employee == "intern"){
            return 0
        }
        else if (employee == "junior"){
            return 1
        }
        else if (employee == "mid"){
            return 2
        }
        else if (employee == "senior"){
            return 3
        }
    }

    showEmployees(employee, employeeCount){
        
        let index = this.getBackground(employee)

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
            <div style={employeeArray.length == 0 ? blueBorder : arr[index]} >
                {employeeArray}
            </div>
        )
    }

    render () {
        return (
            <div >
                {this.showEmployees("intern", this.props.internCount)}
                {this.showEmployees("junior", this.props.juniorCount)}
                {this.showEmployees("mid", this.props.midCount)}
                {this.showEmployees("senior", this.props.seniorCount)}
            </div>
        )
      }
}

export default EmployeePanel