import React, {useState, useEffect} from "react"
import CountTracker from "./CountTracker"
import HireEmployees from "./HireEmployees"
import EmployeePanel from "./EmployeePanel"
import UpgradesPanel from "./UpgradesPanel"
import "../App.css"

const styles={
    border: "2px solid red"
}

function Computer(){
    // count keeps track of the total clicks that have been clicked
    const [count, setCount] = useState(10000000)
    
    // sets and remembers the state of: cost, value, and nextCost of each employee
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
    
    // sets and remembers the state of: each upgrade
    const [internUpgrade_1, setInternUpgrade_1] = useState(false)
    const [internUpgrade_2, setInternUpgrade_2] = useState(false)
    const [internUpgrade_3, setInternUpgrade_3] = useState(false)
 
    const [juniorUpgrade_1, setJuniorUpgrade_1] = useState(false)
    const [juniorUpgrade_2, setJuniorUpgrade_2] = useState(false)
    const [juniorUpgrade_3, setJuniorUpgrade_3] = useState(false)

    const [midUpgrade_1, setMidUpgrade_1] = useState(false)
    const [midUpgrade_2, setMidUpgrade_2] = useState(false)
    const [midUpgrade_3, setMidUpgrade_3] = useState(false)

    const [seniorUpgrade_1, setSeniorUpgrade_1] = useState(false)
    const [seniorUpgrade_2, setSeniorUpgrade_2] = useState(false)
    const [seniorUpgrade_3, setSeniorUpgrade_3] = useState(false)

    // functions to help make changes to states if necessary
    let upgradeInterns = () => setInternValue(prevCount => prevCount * 2)

    let upgradeJuniors = () => setJuniorValue(prevCount => prevCount * 2)

    let upgradeMids = () => setMidLevelValue(prevCount => prevCount * 2)

    let upgradeSeniors = () => setSeniorValue(prevCount => prevCount * 2)

    let internCps = () => interns*internValue

    let juniorCps = () => junior*juniorValue

    let midCps = () => midLevel*midLevelValue

    let seniorCps = () => senior*seniorValue

    let  clicksPerSecond = () => internCps() + juniorCps() + midCps() + seniorCps()

    let incrementMouse = () => setCount(prevCount => prevCount + 1)

    // helps to make the necessary state changes when an employee is bought
    function incrementInterns(){
        if (count >= internCost){
            setCount(prevCount => prevCount - internCost)
            setInterns(prevCount => prevCount + 1)
            setInternCost(internNextCost)
        }  
    }

    function incrementJunior(){
        if (count >= juniorCost){
            setCount(prevCount => prevCount - juniorCost)
            setJunior(prevCount => prevCount + 1)
            setJuniorCost(juniorNextCost)
        }
    }

    function incrementMidLevel(){
        if (count >= midLevelCost){
            setCount(prevCount => prevCount - midLevelCost)
            setMidLevel(prevCount => prevCount + 1)
            setMidLevelCost(midLevelNextCost)
        }
    }

    function incrementSenior(){
        if (count >= seniorCost){
            setCount(prevCount => prevCount - seniorCost)
            setSenior(prevCount => prevCount + 1)
            setSeniorCost(seniorNextCost)
        }
    }

    // every second sets the count of the program to a new count depending on the cps of each employee bought
    useEffect(() => {
        setInterval(() => {
            setCount(prevCount => prevCount + internCps() + juniorCps() + midCps() + seniorCps())
        }, 1000) 
    }, [interns, junior, midLevel, senior])

    const [shake, setShake] = useState(false)

    // function which helps to shake the computer image for 1 second by setting the 
    // state of shake to true then returning it to false
    function shakeImg(){
        setInterval(() => {
            setShake(prevValue => true)
        }, [1000])
        setShake(prevValue => false)
    }

    return(
        <div className="row">
            <div className="column">
                {/* renders the clicks per second of all hired employees and displays it */}
                <CountTracker count={count} cps={clicksPerSecond()}/>
               
                <div style={styles} onClick={()=>shakeImg()}> {/* image of the computer */}
                    <img className={shake ? "shake image-style" : "image-style"} src="http://pixelartmaker.com/art/96a034beedb086d.png" alt="Image of Computer" onClick={incrementMouse}></img>
                </div>
            </div>

            {/* middle panel that renders the individual employees hired */}
            <div className="column" style={{overflow: "auto", height:"auto", maxHeight:"80vh"}}>
                <div style={styles} className="row" >
                    <EmployeePanel 
                        internCount={interns}
                        juniorCount={junior}
                        midCount={midLevel}
                        seniorCount={senior}
                        />
                </div>
            </div>

            <div className="column" >
                <div style={styles} className="row" >
                    <p>Upgrades</p>
                    <UpgradesPanel 
                        count={count}
                        setCount={setCount}
                        
                        internCount={interns}
                        internUpgrade_1={internUpgrade_1}
                        internUpgrade_2={internUpgrade_2}
                        internUpgrade_3={internUpgrade_3}
                        setInternUpgrade_1={()=>setInternUpgrade_1}
                        setInternUpgrade_2={()=>setInternUpgrade_2}
                        setInternUpgrade_3={()=>setInternUpgrade_3}
                        upgradeInterns={()=>upgradeInterns()}

                        juniorCount={interns}
                        juniorUpgrade_1={juniorUpgrade_1}
                        juniorUpgrade_2={juniorUpgrade_2}
                        juniorUpgrade_3={juniorUpgrade_3}
                        setJuniorUpgrade_1={()=>setJuniorUpgrade_1}
                        setJuniorUpgrade_2={()=>setJuniorUpgrade_2}
                        setJuniorUpgrade_3={()=>setJuniorUpgrade_3}
                        upgradeJuniors={()=>upgradeJuniors()}

                        midCount={interns}
                        midUpgrade_1={midUpgrade_1}
                        midUpgrade_2={midUpgrade_2}
                        midUpgrade_3={midUpgrade_3}
                        setMidUpgrade_1={()=>setMidUpgrade_1}
                        setMidUpgrade_2={()=>setMidUpgrade_2}
                        setMidUpgrade_3={()=>setMidUpgrade_3}
                        upgradeMids={()=>upgradeMids()}

                        seniorCount={interns}
                        seniorUpgrade_1={seniorUpgrade_1}
                        seniorUpgrade_2={seniorUpgrade_2}
                        seniorUpgrade_3={seniorUpgrade_3}
                        setSeniorUpgrade_1={()=>setSeniorUpgrade_1}
                        setSeniorUpgrade_2={()=>setSeniorUpgrade_2}
                        setSeniorUpgrade_3={()=>setSeniorUpgrade_3}
                        upgradeSeniors={()=>upgradeSeniors()}
                        />
                </div>
                <div >
                    <div className="HireEmployees">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Computer