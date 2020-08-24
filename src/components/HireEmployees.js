import React from "react"
import ReactTooltip from 'react-tooltip'
import FormatNumbers from "./FormatNumbers"
import "../App.css"

const styles={
    border: "2px solid red"
}

class HireEmployees extends React.Component{

    constructor(props){
        super(props)
        this.highlightButton = this.highlightButton.bind(this)
        this.unHighlighButton = this.unHighlighButton.bind(this)
        this.getClassName = this.getClassName.bind(this)

        this.state = {
            highlightIntern :   "row-hire-button",
            highlightJunior :   "row-hire-button",
            highlightMid :      "row-hire-button",
            highlightSenior :   "row-hire-button",
        }
    }

    // highlight employee button by changing the state
    highlightButton(employee) {
        if (employee == "intern"){
            this.setState( prevState => ({ highlight: prevState.highlightIntern = "row-hire-button-highlight" }))
        }
        else if (employee == "junior"){
            this.setState( prevState => ({ highlight: prevState.highlightJunior = "row-hire-button-highlight" }))
        }
        else if (employee == "mid"){
            this.setState( prevState => ({ highlight: prevState.highlightMid = "row-hire-button-highlight" }))
        }
        else if (employee == "senior"){
            this.setState( prevState => ({ highlight: prevState.highlightSenior = "row-hire-button-highlight" }))
        }
        
    }

    // unhighlight employee button by changing state
    unHighlighButton(employee) {
        if (employee == "intern"){
            this.setState( prevState => ({ highlight: prevState.highlightIntern = "row-hire-button" }))
        }
        else if (employee == "junior"){
            this.setState( prevState => ({ highlight: prevState.highlightJunior = "row-hire-button" }))
        }
        else if (employee == "mid"){
            this.setState( prevState => ({ highlight: prevState.highlightMid = "row-hire-button" }))
        }
        else if (employee == "senior"){
            this.setState( prevState => ({ highlight: prevState.highlightSenior = "row-hire-button" }))
        }
    }

    //return the state of the employee's background so className can make use of it
    getClassName(employee) {
        if (employee == "intern"){
            return this.state.highlightIntern
        }
        else if (employee == "junior"){
            return this.state.highlightJunior
        }
        else if (employee == "mid"){
            return this.state.highlightMid
        }
        else if (employee == "senior"){
            return this.state.highlightSenior
        }
    }

    showEmployeeButton(employee, total, cost, cpsTotal, cpsEach, incrementFunc){
        
        // the component FormatNumbers will return a nicely formatted number string to display
        let costMessage = <FormatNumbers formatNumber={cost} decimals={3} />

        return(

            <section    data-tip="" data-for={employee + "Tip"}                 // display data-tip for each employee
                        className={this.getClassName(employee)}                 // display background depending on employee
                        onMouseEnter={() => this.highlightButton(employee)}     // change background state depending on mouse entering or leaving area
                        onMouseLeave={() => this.unHighlighButton(employee)}    
                        onClick={()=>incrementFunc()}                           // increment employee number on click
                        >                          
                
                <div  className={this.props.count < cost ?  "grey-out" : ""}>
                    {/* grey out button if we do not have enough currency */}
                    <div className="row">

                        <div className="column-1-hire-image" >
                            <img  src={require("./images/" + employee + "-clicker.png")}  alt="Button" style={{maxHeight: "85px"}}></img>
                        </div>

                        <div className="column-2-hire-name-cost">
                            <div className="row-employee-name "> <h3 className="font-style">{employee.toUpperCase()} CLICKER</h3> </div>
                            <div className="row-employee-hire-cost"> <p className="font-style">{costMessage}</p> </div>
                        </div>
                        
                        <div className="column-3-hire-total "> <h1>{total}</h1> </div>
                    </div>
                    {/* binds the tooltip message to the correct employee button */}
                    <ReactTooltip id={employee + "Tip"} place="left" effect="solid">
                        <p>Each {employee} clicker produces {cpsEach} clicks per second</p>
                        <p>Total CPS: {cpsTotal}</p>
                    </ReactTooltip>
                </div>
            </section>

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