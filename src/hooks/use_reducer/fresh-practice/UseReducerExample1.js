import { useReducer } from "react";
import { CountReducer } from "./allReducers";

let initialState = {
    count:0
}



function UseReducerExample1(){

    let [state, dispatch] = useReducer(CountReducer, initialState)
    // console.log(state)
    return (
        <>
        <h1>Hi</h1>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:"+"})}>+</button>
        </>
    )
}

export default UseReducerExample1;