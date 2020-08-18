import React from "react"

const styles={
    border: "2px solid red"
}

class HireEmployees extends React.Component{

    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div>
                <div className="row-hire-button" onClick={this.props.incrementEmployee()}>
                    <div className="row" >

                        <div className="column-1-hire-image" >
                            <img  src={require("./images/" + this.props.employeeType + "-clicker.png")}  alt="Button" style={{maxHeight: "85px"}}></img>
                        </div>

                        <div className="column-2-hire-name-cost">
                            <div className="row">
                                <h3>{this.props.employeeType} Clicker</h3>
                            </div>
                            <div className="row-hire-cost">
                                {this.props.employeeCost}
                            </div>
                        </div>
                        
                        <div className="column-3-hire-total">
                            <h1 >{this.props.employeeTotal}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HireEmployees