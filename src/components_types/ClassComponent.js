import { Component } from "react";
import NestedClassComponent from "./NestedClassComponent";

class ClassComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={{border: "solid red 5px"}}>
                <h1>This is class component.</h1>
                <NestedClassComponent id="1"/>
                <NestedClassComponent id="2"/>
                <NestedClassComponent id="3"/>
            </div>
        )
    }
}

export default ClassComponent;