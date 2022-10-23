import React, { Component } from "react";

class MountingComponent extends Component{
    componentDidMount(){
        console.log("Mounting Component - Did Mount")
    }
    componentWillUnmount(){
        console.log("Mounting Component - Will Unmount")
    }
    render(){
        return (
            <h1>Mounting Component</h1>
        )
    }
}

class LifecycleMethods extends Component {
    // Mounting
    constructor(props){
        super(props)
        console.log("Constructor")
        this.state = {
            count:0,
            mountingComponent:false
        }
    }

    componentDidMount(){
        console.log("Did Mount")
    }

    increaseCount = () => {
        this.setState({count:this.state.count+1})
    }

    handleComponentMount = () => {
        if(this.state.mountingComponent){
            this.setState({mountingComponent:false}) 
        }
        else{
            this.setState({mountingComponent:true}) 
        }
        
    }

    // Updating
    render(){
        let mountingComponent;
        // Render comes under Updating as well as Mounding
        if(this.state.mountingComponent){
            mountingComponent=<MountingComponent />
        }
        console.log("Render")
        return(
            <div>
                <h1>Lifecycle Methods</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.increaseCount}>Click Me</button>
                <button onClick={this.handleComponentMount}>Mount MountingComponent</button>
                {mountingComponent}
            </div>
        )
    }

    componentDidUpdate(){
        console.log("Did Update")
    }

    // Unmounting
    componentWillUnmount(){
        console.log("Will Unmount")
    }

    // Error Handling
    componentDidCatch(){
        console.log("Did Catch")
    }

}

export default LifecycleMethods;