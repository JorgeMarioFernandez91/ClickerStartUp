import React from "react"
import ReactTooltip from 'react-tooltip'
import "../App.css"

const styles={
    border: "2px solid red"
}

class HireEmployees extends React.Component{

    constructor(props){
        super(props)
        this.showEmployeeButton = this.showEmployeeButton.bind(this)
    }

    showEmployeeButton(employee, total, cost, cpsTotal, cpsEach, func){

        let costMessage = cost

        if (cost/1000000000000 >= 1){
            costMessage = (cost/1000000000000).toFixed(2) + " Trillion"
        }
        else if (cost/1000000000 >= 1){
            costMessage = (cost/1000000000).toFixed(2) + " Billion"
        }
        else if (cost/1000000 >= 1){
            costMessage = (cost/1000000).toFixed(2) + " Million"
        }
        else if (cost/1000 >= 1){
            costMessage = (cost/1000).toFixed(2) + " Thousand"
        }
        
        return(
            // display data-tip for each employee
            <div data-tip="" data-for={employee + "Tip"} >
                {/* on click update employee count */}
                <div className="row-hire-button" onClick={()=>func()}>
                    {/* grey out button if we do not have enough currency */}
                    <div className="row" className={this.props.count < cost ?  "grey-out" : ""}>

                        <div className="column-1-hire-image" >
                            <img  src={require("./images/" + employee + "-clicker.png")}  alt="Button" style={{maxHeight: "85px"}}></img>
                        </div>

                        <div className="column-2-hire-name-cost">
                            <div className="row"> <h3>{employee} Clicker</h3> </div>
                            <div className="row-hire-cost"> {costMessage} </div>
                        </div>
                        
                        <div className="column-3-hire-total"> <h1>{total}</h1> </div>
                    </div>
                </div>
                 {/* binds the tooltip message to the correct employee button */}
                <ReactTooltip id={employee + "Tip"} place="left" effect="solid">
                    Each {employee} clicker produces {cpsEach} clicks per second <br/> Total CPS: {cpsTotal}
                </ReactTooltip>
            </div>
        )
    }

    render(){
        return(

            <div>
                {/* params: name, total, cost, cpsTotal, cpsEach, updateFunction */}
                {this.showEmployeeButton("intern", this.props.internTotal, this.props.internCost, this.props.internCps().toFixed(1), this.props.internValue, this.props.incrementIntern())}
                {this.showEmployeeButton("junior", this.props.juniorTotal, this.props.juniorCost, this.props.juniorCps(),  this.props.juniorValue, this.props.incrementJunior())}
                {this.showEmployeeButton("mid", this.props.midTotal, this.props.midCost, this.props.midCps(),  this.props.midLevelValue, this.props.incrementMidLevel())}
                {this.showEmployeeButton("senior", this.props.seniorTotal, this.props.seniorCost, this.props.seniorCps(),  this.props.seniorValue, this.props.incrementSenior())}
            </div>
        )
    }
}

export default HireEmployees