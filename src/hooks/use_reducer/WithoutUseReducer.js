import { useState } from "react";


function WithoutUseReducer(){
    let [count, setCount] = useState(0)

    // What if I want to make this function reusable?
    function counting(action){
        switch(action){
            case "+":
                setCount(count+1)
                break;
            case "-":
                setCount(count-1)
        }
    }
    
    return (<>
        <h1>{count}</h1>
        <button onClick={()=>counting("+")}>+</button>
        <button onClick={()=>counting("-")}>-</button>
    </>)
}

export default WithoutUseReducer;