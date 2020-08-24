import React from "react"
import ReactTooltip from 'react-tooltip'
import FormatNumbers from "./FormatNumbers"

const styles = {
    border: "4px solid #5E1B45",
    maxHeight: "40px",
    marginLeft: "2px",
    marginRight: "2px"
}

const background ={
    backgroundColor: "#BC368A",
    border: "4px solid #5E1B45",
    paddingBottom: "15px"
}

class UpgradesPanel extends React.Component{

    constructor(props){
        super()

        this.showUpgrades = this.showUpgrades.bind(this)
    }

    showUpgrades(employee, upgradeName, upgradeStatus, setUpgradeStatus, updateUpgrades, cost, title) {

        let upgradeTip = employee + "UpgradeTip-" + upgradeName
        
        let costMessage = <FormatNumbers formatNumber={cost} decimals={2} />

        return (    
            // check if upgrade has been bought before if yes then return null otherwise render the upgrade
            upgradeStatus ? null :

            <span>
                <span    data-tip="" data-for={upgradeTip}
                        onClick={this.props.count >= cost ? () => (updateUpgrades(), setUpgradeStatus(true), this.props.setCount(prevCount => prevCount - cost)) : null} 
                        className={this.props.count < cost ?  "grey-out" : ""}>
                        
                        <img 
                            src={require("./images/" + employee + "-upgrade-" + upgradeName + ".png")}  
                            alt= "upgradeImg" 
                            style={styles}
                            ></img>
                </span> 
                
                {/* shows the tool tip specific to the upgrade */}
                <ReactTooltip id={employee + "UpgradeTip-" + upgradeName} place="bottom" effect="solid">
                   <h4>{title.toUpperCase()}  </h4>
                   <p> Doubles the clicks per second of {employee} <br/> Cost: {costMessage} </p>
                </ReactTooltip>
            </span> 
        )
    }

    render(){
        return (
            <div style={background}>
                
                <div className="row"> 
                    <h3 className="format-margin">Upgrades</h3>
                    {/* calls the function which renders the upgrades specific for each employee type, 
                        upgrade level, and cost */}

                    {/* name, upgrade name, set upgrade status, update upgrades, cost */}
                    {this.showUpgrades("intern", 1, this.props.internUpgrade_1, 
                        this.props.setInternUpgrade_1(), this.props.upgradeInterns, 100, "first day on the job")}
                    {this.showUpgrades("intern", 2, this.props.internUpgrade_2, 
                        this.props.setInternUpgrade_2(), this.props.upgradeInterns, 1000, "getting the hang of things")}
                    {this.showUpgrades("intern", 3, this.props.internUpgrade_3, 
                        this.props.setInternUpgrade_3(), this.props.upgradeInterns, 10000, "ready for a promotion")}

                    {this.showUpgrades("junior", 1, this.props.juniorUpgrade_1, 
                        this.props.setJuniorUpgrade_1(), this.props.upgradeJuniors, 100000, "need a pick-me-up")}
                    {this.showUpgrades("junior", 2, this.props.juniorUpgrade_2, 
                        this.props.setJuniorUpgrade_2(), this.props.upgradeJuniors, 1000000, "java java java")}
                    {this.showUpgrades("junior", 3, this.props.juniorUpgrade_3, 
                        this.props.setJuniorUpgrade_3(), this.props.upgradeJuniors, 10000000, "one with the bean")}

                    {this.showUpgrades("mid", 1, this.props.midUpgrade_1, 
                        this.props.setMidUpgrade_1(), this.props.upgradeMids, 100000000, "i can see clearly now")}
                    {this.showUpgrades("mid", 2, this.props.midUpgrade_2, 
                        this.props.setMidUpgrade_2(), this.props.upgradeMids, 1000000000, "if i can land a plane i can code")}
                    {this.showUpgrades("mid", 3, this.props.midUpgrade_3, 
                        this.props.setMidUpgrade_3(), this.props.upgradeMids, 10000000000, "i see the matrix")}

                    {this.showUpgrades("senior", 1, this.props.seniorUpgrade_1, 
                        this.props.setSeniorUpgrade_1(), this.props.upgradeSeniors, 100000000000, "late nights")}
                    {this.showUpgrades("senior", 2, this.props.seniorUpgrade_2, 
                        this.props.setSeniorUpgrade_2(), this.props.upgradeSeniors, 1000000000000, "who needs to shave anyways?")}
                    {this.showUpgrades("senior", 3, this.props.seniorUpgrade_3, 
                        this.props.setSeniorUpgrade_3(), this.props.upgradeSeniors, 10000000000000, "grand wizard")}
                </div>
            </div>
        )
    }
}

export default UpgradesPanel