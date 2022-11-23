import { useReducer } from "react";

let initialState = {count:0}

function myreducer(state, action){
    return {count:state.count+1} 
}

// function AnotherComponent(){
//     let [state, dispatch] = useReducer(myreducer, initialState)
//     return (<>
//         <h1>{state.count}</h1>
//     </>)
// }
function UseReducerGeneral(){

    let [count, dispatch] = useReducer(myreducer, initialState)
    console.log(state)
    
    return (<>
        <h1>{state.count}</h1>
        <AnotherComponent />
        <button onClick={()=>dispatch()}>+</button>
    </>)
}

export default UseReducerGeneral;