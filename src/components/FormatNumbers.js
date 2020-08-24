import React from "react"
import "../App.css"

class FormatNumbers extends React.Component{

    constructor(){
        super()
        this.format = this.format.bind(this)
    }

    format(x, decimals) {

        if (x/1000000000000 >= 1){
            return (x/1000000000000).toFixed(decimals) + " Trillion"
        }
        else if (x/1000000000 >= 1){
            return (x/1000000000).toFixed(decimals) + " Billion"
        }
        else if (x/1000000 >= 1){
            return (x/1000000).toFixed(decimals) + " Million"
        }
        else {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  // regex to find the place to put the comma, it's set at 3 digits
        }

    }

    render(){
        return(
            <section>
                {this.format(this.props.formatNumber, this.props.decimals)}
            </section>
        )
    }
}

export default FormatNumbers