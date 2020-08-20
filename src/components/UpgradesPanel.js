import React, {useState, useEffect} from "react"
import ReactTooltip from 'react-tooltip'

const styles = {
    border: "2px solid red"
}

class UpgradesPanel extends React.Component{

    constructor(props){
        super()

        this.showUpgrades = this.showUpgrades.bind(this)
    }

    showUpgrades(employee, upgradeName, upgradeStatus, setUpgradeStatus, updateUpgrades, cost) {

        let upgradeTip = employee + "UpgradeTip-" + upgradeName
        let costMessage= cost

        if (cost/1000000000000 >= 1){
            costMessage = cost/1000000000000 + " Trillion"
        }
        else if (cost/1000000000 >= 1){
            costMessage = cost/1000000000 + " Billion"
        }
        else if (cost/1000000 >= 1){
            costMessage = cost/1000000 + " Million"
        }
        else if (cost/1000 >= 1){
            costMessage = cost/1000 + " Thousand"
        }

        return (    
            // check if upgrade has been bought before if yes then return null otherwise render the upgrade
            upgradeStatus ? null :

            <span>
                <span   data-tip="" data-for={upgradeTip}
                        onClick={this.props.count >= cost ? () => (updateUpgrades(), setUpgradeStatus(true), this.props.setCount(prevCount => prevCount - cost)) : null} 
                        className={this.props.count < cost ?  "grey-out" : ""}>
                        
                        <img 
                            src={require("./images/" + employee + "-upgrade-" + upgradeName + ".png")}  
                            alt= "upgradeImg" 
                            style={{maxHeight: "35px"}}></img>
                </span> 
                
                {/* shows the tool tip specific to the upgrade */}
                <ReactTooltip id={employee + "UpgradeTip-" + upgradeName} place="bottom" effect="solid">
                    Doubles the clicks per second of {employee} <br/> Cost: {costMessage} 
                </ReactTooltip>
            </span> 
        )
    }

    render(){
        return (
            <div >
                <div className="row"> 
                    {/* calls the function which renders the upgrades specific for each employee type, 
                        upgrade level, and cost */}

                    {/* name, upgrade name, set upgrade status, update upgrades, cost */}
                    {this.showUpgrades("intern", 1, this.props.internUpgrade_1, this.props.setInternUpgrade_1(), this.props.upgradeInterns, 100)}
                    {this.showUpgrades("intern", 2, this.props.internUpgrade_2, this.props.setInternUpgrade_2(), this.props.upgradeInterns, 1000)}
                    {this.showUpgrades("intern", 3, this.props.internUpgrade_3, this.props.setInternUpgrade_3(), this.props.upgradeInterns, 10000)}

                    {this.showUpgrades("junior", 1, this.props.juniorUpgrade_1, this.props.setJuniorUpgrade_1(), this.props.upgradeJuniors, 100000)}
                    {this.showUpgrades("junior", 2, this.props.juniorUpgrade_2, this.props.setJuniorUpgrade_2(), this.props.upgradeJuniors, 1000000)}
                    {this.showUpgrades("junior", 3, this.props.juniorUpgrade_3, this.props.setJuniorUpgrade_3(), this.props.upgradeJuniors, 10000000)}

                    {this.showUpgrades("mid", 1, this.props.midUpgrade_1, this.props.setMidUpgrade_1(), this.props.upgradeMids, 100000000)}
                    {this.showUpgrades("mid", 2, this.props.midUpgrade_2, this.props.setMidUpgrade_2(), this.props.upgradeMids, 1000000000)}
                    {this.showUpgrades("mid", 3, this.props.midUpgrade_3, this.props.setMidUpgrade_3(), this.props.upgradeMids, 10000000000)}

                    {this.showUpgrades("senior", 1, this.props.seniorUpgrade_1, this.props.setSeniorUpgrade_1(), this.props.upgradeSeniors, 100000000000)}
                    {this.showUpgrades("senior", 2, this.props.seniorUpgrade_2, this.props.setSeniorUpgrade_2(), this.props.upgradeSeniors, 1000000000000)}
                    {this.showUpgrades("senior", 3, this.props.seniorUpgrade_3, this.props.setSeniorUpgrade_3(), this.props.upgradeSeniors, 10000000000000)}
                </div>
            </div>
        )
    }
}

export default UpgradesPanel