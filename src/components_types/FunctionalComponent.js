function NestedFunctionalComponent(props){
    return (
        <div style={{border: "solid blue 5px"}}>
            <p>This is a Nested Functional Component <strong>{props.title}</strong></p>
        </div>
    )
}

function FunctionalComponent(){
    return (
        <div style={{border: "solid red 5px"}}>
            <h1>This is a Functional Component</h1>
            <NestedFunctionalComponent title="One"/>
            <NestedFunctionalComponent title="Two"/>
        </div>
    )
}

export default FunctionalComponent;