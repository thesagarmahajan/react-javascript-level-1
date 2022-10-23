import { useState } from "react";

function SimpleCounter(){
    let [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>count==0?alert("count=0 and cannot decrease"):setCount(count-1)}>-</button>
            <button onClick={()=>setCount(0)}>RESET</button>
        </>
    );
}

export default SimpleCounter;