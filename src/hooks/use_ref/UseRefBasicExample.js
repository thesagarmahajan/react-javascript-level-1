import { createRef } from "react";

function UseRefBasicExample(){
    
    let input = createRef()
    // let input = useRef()

    function handleClick(){
        console.log(input.current.value)
    }

    return (<>
        <input type="text" ref={input}/>
        <button onClick={handleClick}>Submit</button>
    </>)
}

export default UseRefBasicExample;