import React from "react"

class StateInClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
        console.log("Constructure")
        this.incrementCount()
        // this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount = ()=>{
        console.log("This is IncrementCount")
        this.setState({ count: this.state.count + 1 });

    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCount}>Click Me!</button>
            </div>
            
        )
    }
}

export default StateInClass;