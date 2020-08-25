import React from "react"

class WinPanel extends React.Component{
    
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
                
                {this.props.cps >= 1000 && this.state.showComponent == true? 
                
                    <div className="win" >

                        <div className="intro-text">

                            <p className="intro-style">
                                Congratulations You've successfuly transformed your humble tech start up into a fierce 
                                competitor! You can stop here, or you can keep on growing your very own silicon valley.
                            </p>

                        </div>

                        <button className="button" onClick={()=>this.handleClick()}>Continue</button>
                        
                        
                    </div>

                : null}

            </div>
        )
    }
}

export default WinPanel