import React from "react"

class IntroPanel extends React.Component{

    constructor(props){
        super()

        this.state = {
            showComponent: true,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState( prevState => ({ showComponent: prevState.showComponent = false }))
    }

    render(){
        return(
            

            <div >
                
                {this.state.showComponent === true ? 
                
                    <div className="intro" >

                        <div className="intro-text">

                            <p className="intro-style">
                                Congratulations! You've just inherited a small tech company. Your job is to 
                                click on the computer to give it commands. The more you click on the computer the 
                                better your company will become! You can use the clicks you've accumulated to hire 
                                employees of various skill levels to do the clicking for you! Isn't that great?
                            </p>
                            <p className="intro-style">
                                To win you must have 1,000 Clicks Per Second (CPS), it'll take a while but all 
                                good companies start from humble beginnings. Good Luck!
                            </p>

                        </div>

                        
                        <button className="button" onClick={()=>this.handleClick()}>Start</button>
                        
                        
                    </div>

                : null}

            </div>
        )
    }
    
}

export default IntroPanel