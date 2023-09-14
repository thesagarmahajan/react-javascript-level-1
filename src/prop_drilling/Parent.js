import { useContext } from "react";
import Child from "./Child";

function Parent(){
    

    return (<>
        <div style={{border:"solid blue 5px", height:"400px"}}>
            This is Parent
            <Child />
            {/* <Child name={props.name}/> */}
        </div>
    </>)
}
export default Parent;