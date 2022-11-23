import { useEffect, useState } from "react";

function UseEffectGeneral(){
    
    // A State Variable
    let [count, setCount] = useState(0)

    // Creates recursion
    /* useEffect(()=>{
        setCount(count+1)
    }) */

    /* useEffect(()=>{
        setCount(count+1)
    }, []) */

    // Creates recursion
    useEffect(()=>{
        setCount(count+1)
    }, [count])

    return (<>
        <h1>Count: {count}</h1>
        <h1>This is UseEffectGeneral</h1>
    </>)
}

export default UseEffectGeneral;