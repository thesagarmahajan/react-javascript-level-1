import { Component } from "react";

class NestedClassComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
                <p style={{border: "solid blue 5px"}}>This is nested Class Component <strong>{this.props.id}</strong></p>
            </>
        )
    }
}

export default NestedClassComponent;