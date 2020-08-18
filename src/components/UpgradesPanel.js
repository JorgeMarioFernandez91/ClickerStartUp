import React from "react"
import ReactTooltip from 'react-tooltip'

const styles = {
    border: "2px solid red"
}

class UpgradesPanel extends React.Component{

    constructor(props){
        super()
        this.showUpgrades = this.showUpgrades.bind(this)
    }

    showUpgrades(employee, upgradeLevel, cost) {

        let upgradeName = employee + "UpgradeTip-" + upgradeLevel
        let updateUpgrades = () => null
        let checkUpgrades = () => null

        if (employee == "intern"){
            updateUpgrades = () => this.props.upgradeInterns()
            checkUpgrades = () => this.props.internUpgrades
        }
        else if (employee == "junior"){
            updateUpgrades = () => this.props.upgradeJuniors()
            checkUpgrades = () => this.props.juniorUpgrades
        }
        else if (employee == "mid"){
            updateUpgrades = () => this.props.upgradeMids()
            checkUpgrades = () => this.props.midUpgrades
        }
        else if (employee == "senior"){
            updateUpgrades = () => this.props.upgradeSeniors()
            checkUpgrades = () => this.props.seniorUpgrades
        }

        return (    
            // check if upgrade has been bought before if yes then return null otherwise render the upgrade
            checkUpgrades() <= upgradeLevel ?

            <span>
                
                <span   data-tip="" data-for={upgradeName}
                        onClick={this.props.count >= cost ? updateUpgrades() : null} 
                        className={this.props.count < cost ?  "grey-out" : ""}>
                        
                        <img 
                            src={require("./images/" + employee + "-upgrade-" + upgradeLevel + ".png")}  
                            alt= "upgradeImg" 
                            style={{maxHeight: "35px"}}></img>
                </span> 
                
                {/* shows the tool tip specific to the upgrade */}
                <ReactTooltip id={employee + "UpgradeTip-" + upgradeLevel} place="bottom" effect="solid">
                    Doubles the clicks per second of {employee} <br/> Cost: {cost} 
                </ReactTooltip>
                
            </span> : null
        )
    }

    render(){
        return (
            <div >
                <div className="row"> 
                    {/* calls the function which renders the upgrades specific for each employee type, 
                        upgrade level, and cost */}
                    {this.showUpgrades("intern", 1, 100)}
                    {this.showUpgrades("intern", 2, 1000)}
                    {this.showUpgrades("intern", 3, 10000)}

                    {this.showUpgrades("junior", 1, 100000)}
                    {this.showUpgrades("junior", 2, 1000000)}
                    {this.showUpgrades("junior", 3, 10000000)}

                    {this.showUpgrades("mid", 1, 1000000)}
                    {this.showUpgrades("mid", 2, 10000000)}
                    {this.showUpgrades("mid", 3, 100000000)}
                    
                    {this.showUpgrades("senior", 1, 10000000)}
                    {this.showUpgrades("senior", 2, 100000000)}
                    {this.showUpgrades("senior", 3, 1000000000)}
                </div>
            </div>
        )
    }
}

export default UpgradesPanel