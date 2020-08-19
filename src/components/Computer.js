import React, {useState, useEffect} from "react"
import CountTracker from "./CountTracker"
import HireEmployees from "./HireEmployees"
import EmployeePanel from "./EmployeePanel"
import UpgradesPanel from "./UpgradesPanel"
import ReactTooltip from 'react-tooltip'
import "../App.css"

const styles={
    border: "2px solid red"
}

function Computer(){

    const [count, setCount] = useState(0)

    const [interns, setInterns] = useState(0)
    const [internCost, setInternCost] = useState(15)
    const [internValue, setInternValue] = useState(0.1)
    const internNextCost = Math.ceil(15 * (Math.pow(1.15, interns + 1)))

    const [junior, setJunior] = useState(0)
    const [juniorCost, setJuniorCost] = useState(100)  
    const [juniorValue, setJuniorValue] = useState(1) 
    const juniorNextCost = Math.ceil(100 * (Math.pow(1.15, junior + 1)))

    const [midLevel, setMidLevel] = useState(0)
    const [midLevelCost, setMidLevelCost] = useState(1100)  
    const [midLevelValue, setMidLevelValue] = useState(8) 
    const midLevelNextCost = Math.ceil(1100 * (Math.pow(1.15, midLevel + 1)))

    const [senior, setSenior] = useState(0)
    const [seniorCost, setSeniorCost] = useState(12000)  
    const [seniorValue, setSeniorValue] = useState(47) 
    const seniorNextCost = Math.ceil(12000 * (Math.pow(1.15, senior + 1)))

    const [internUpgrades, setInternUpgrades] = useState(1)
    const [internUpgradesCost, setInternUpgradeCost] = useState(100)
 
    const [juniorUpgrades, setJuniorUpgrades] = useState(1)
    const [juniorUpgradesCost, setJuniorUpgradeCost] = useState(100000)

    const [midUpgrades, setMidUpgrades] = useState(1)
    const [midUpgradesCost, setMidUpgradeCost] = useState(100000000)


    const [seniorUpgrades, setSeniorUpgrades] = useState(1)
    const [seniorUpgradesCost, setSeniorUpgradeCost] = useState(100000000000)

    function upgradeInterns(){
        setInternUpgrades(prevCount => prevCount + 1)
        setCount(prevCount => prevCount - internUpgradesCost)
        setInternUpgradeCost(prevCount => prevCount = internUpgradesCost*10)
        setInternValue(prevCount => prevCount * 2)
    }

    function upgradeJuniors(){
        setJuniorUpgrades(prevCount => prevCount + 1)
        setCount(prevCount => prevCount - juniorUpgradesCost)
        setJuniorUpgradeCost(prevCount => prevCount = juniorUpgradesCost*10)
        setJuniorValue(prevCount => prevCount * 2)
    }

    function upgradeMids(){
        setMidUpgrades(prevCount => prevCount + 1)
        setCount(prevCount => prevCount - midUpgradesCost)
        setMidUpgradeCost(prevCount => prevCount = midUpgradesCost*10)
        setMidLevelValue(prevCount => prevCount * 2)
    }

    function upgradeSeniors(){
        setSeniorUpgrades(prevCount => prevCount + 1)
        setCount(prevCount => prevCount - seniorUpgradesCost)
        setSeniorUpgradeCost(prevCount => prevCount = seniorUpgradesCost*10)
        setSeniorValue(prevCount => prevCount * 2)
    }

    function employeeToolTipMessage(employee){

        var cpsTotal = 0
        var cpsEach = 0

        if (employee == "intern"){
            cpsEach = internValue
            cpsTotal = internCps().toFixed(1)
        }
        else if (employee == "junior"){
            cpsEach = juniorValue
            cpsTotal = juniorCps()
        }
        else if (employee == "mid"){
            cpsEach = midLevelValue
            cpsTotal = midCps()
        }
        else if (employee == "senior"){
            cpsEach = seniorValue
            cpsTotal = seniorCps()
        }

        // the array allows me to insert an page break, otherwise \n on it's own won't break up this line into two lines
        const result = ["Each " + employee + " clicker produces " + cpsEach + " clicks per second", <br/> , "Total CPS: " + cpsTotal]

        return result

    }

    let internCps = () => interns*internValue

    let juniorCps = () => junior*juniorValue

    let midCps = () => midLevel*midLevelValue

    let seniorCps = () => senior*seniorValue

    let  clicksPerSecond = () => internCps() + juniorCps() + midCps() + seniorCps()

    let incrementMouse = () => setCount(prevCount => prevCount + 1)

    function incrementInterns(){
        if (count >= internCost){
            setCount(prevCount => prevCount - internCost)
            setInterns(prevCount => prevCount + 1)
            setInternCost(prevCount => prevCount = internNextCost)
        }  
    }

    function incrementJunior(){
        if (count >= juniorCost){
            setCount(prevCount => prevCount - juniorCost)
            setJunior(prevCount => prevCount + 1)
            setJuniorCost(prevCount => prevCount = juniorNextCost)
        }
    }

    function incrementMidLevel(){
        if (count >= midLevelCost){
            setCount(prevCount => prevCount - midLevelCost)
            setMidLevel(prevCount => prevCount + 1)
            setMidLevelCost(prevCount => prevCount = midLevelNextCost)
        }
    }

    function incrementSenior(){
        if (count >= seniorCost){
            setCount(prevCount => prevCount - seniorCost)
            setSenior(prevCount => prevCount + 1)
            setSeniorCost(prevCount => prevCount = seniorNextCost)
        }
    }

    useEffect(() => {
        setInterval(() => {
            setCount(prevCount => prevCount + internCps() + juniorCps() + midCps() + seniorCps())
        }, 1000) 
    }, [interns, junior, midLevel, senior])

    const [shake, setShake] = useState(false)

    function shakeImg(){
        
        setInterval(() => {
            setShake(prevValue => true)
        }, [1000])
        setShake(prevValue => false)
    }

    return(
        <div style={styles} className="row">
            <div className="column">
                {/* renders the clicks per second of all hired employees and displays it */}
                <CountTracker count={count} cps={clicksPerSecond()}/>
               
                <div style={styles} onClick={()=>shakeImg()}>
                    {/* image of the computer */}
                    <img className={shake ? "shake image-style" : "image-style"} src="http://pixelartmaker.com/art/96a034beedb086d.png" alt="Image of Computer" onClick={incrementMouse}></img>
                </div>
            </div>
            {/* middle panel that renders the individual employees hired */}
            <div className="column" style={styles} style={{overflow: "auto", height:"auto", maxHeight:"80vh"}}>

                <div style={styles} className="row" >
                    <EmployeePanel 
                        internCount={interns}
                        juniorCount={junior}
                        midCount={midLevel}
                        seniorCount={senior}
                        />
                </div>

            </div>
            <div className="column" style={styles}>
                <div style={styles} className="row" >
                    <p>Upgrades</p>
                    <UpgradesPanel 
                        count={count}
                        setCount={setCount}
                        
                        internCount={interns}
                        internUpgrades={internUpgrades}
                        upgradeInterns={()=>upgradeInterns}

                        juniorCount={interns}
                        juniorUpgrades={juniorUpgrades}
                        upgradeJuniors={()=>upgradeJuniors}

                        midCount={interns}
                        midUpgrades={midUpgrades}
                        upgradeMids={()=>upgradeMids}

                        seniorCount={interns}
                        seniorUpgrades={seniorUpgrades}
                        upgradeSeniors={()=>upgradeSeniors}
                        />
                </div>
                <div style={styles} >
                    <div className="HireEmployees">
                        {/* data-tip will return tooltip string, which is managed by employeeToolTipMessage()
                            data-for binds the contents of the element to a specific tooltip which is found below 
                            className determines if element is greyed out or not depending if user can affor it*/}
                            
                            
                        {/* Render the Employees and their graphic, type, cost, and total */}
                        <HireEmployees 
                            count={count}

                            internTotal={interns}
                            juniorTotal={junior}
                            midTotal={midLevel}
                            seniorTotal={senior}

                            internCost={internCost}
                            juniorCost={juniorCost}
                            midCost={midLevelCost}
                            seniorCost={seniorCost}

                            internValue={internValue}
                            juniorValue={juniorValue}
                            midLevelValue={midLevelValue}
                            seniorValue={seniorValue}

                            internCps={internCps}
                            juniorCps={juniorCps}
                            midCps={midCps}
                            seniorCps={seniorCps}

                            incrementIntern={()=>incrementInterns} 
                            incrementJunior={()=>incrementJunior}
                            incrementMidLevel={()=>incrementMidLevel}
                            incrementSenior={()=>incrementSenior}
                            />


                        {/* <div data-tip="" data-for="internTip" className={count < internCost ?  "grey-out" : ""}>

                            Render the Employees and their graphic, type, cost, and total
                            <HireEmployees 
                                incrementEmployee={()=>incrementInterns} 
                                employeeType={"intern"}
                                employeeCost={internCost}
                                employeeTotal={interns}
                                cps={internCps}
                                />
                        </div>
                        <div data-tip="" data-for="juniorTip" className={count < juniorCost ?  "grey-out" : ""}>
                            <HireEmployees 
                                incrementEmployee={()=>incrementJunior} 
                                employeeType={"junior"}
                                employeeCost={juniorCost}
                                employeeTotal={junior}
                                cps={juniorCps}
                                />
                        </div>
                        <div data-tip="" data-for="midTip" className={count < midLevelCost ?  "grey-out" : ""}>
                            <HireEmployees 
                                incrementEmployee={()=>incrementMidLevel} 
                                employeeType={"mid"}
                                employeeCost={midLevelCost}
                                employeeTotal={midLevel}
                                cps={midCps}
                                />
                        </div>
                        <div data-tip="" data-for="seniorTip" className={count < seniorCost ?  "grey-out" : ""}>
                            <HireEmployees 
                                incrementEmployee={()=>incrementSenior} 
                                employeeType={"senior"}
                                employeeCost={seniorCost}
                                employeeTotal={senior}
                                cps={seniorCps}
                                />
                        </div> */}
                        {/* binds a specific tooltip message to a specific element above */}
                        {/* <ReactTooltip id="internTip" place="left" effect="solid">
                            {employeeToolTipMessage("intern")}
                        </ReactTooltip>
                        <ReactTooltip id="juniorTip" place="left" effect="solid">
                            {employeeToolTipMessage("junior")}
                        </ReactTooltip>
                        <ReactTooltip id="midTip" place="left" effect="solid">
                            {employeeToolTipMessage("mid")}
                        </ReactTooltip>
                        <ReactTooltip id="seniorTip" place="left" effect="solid">
                            {employeeToolTipMessage("senior")}
                        </ReactTooltip> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Computer