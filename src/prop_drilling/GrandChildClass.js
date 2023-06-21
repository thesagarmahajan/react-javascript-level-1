import React from "react";
import { NameContext } from "./GrandParent";

class GrandChildClass extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <NameContext.Consumer>
                    {
                        value=><h1>{value}</h1>
                    }
                </NameContext.Consumer>
            </>
        )
    }
}

export default GrandChildClass;