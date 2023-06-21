import { useContext } from "react";
import { NameContext } from "./GrandParent";

function GrandChild(props){
    let value = useContext(NameContext)
    return (<>
        <div style={{border:"solid green 5px", height:"200px"}}>
                This is GranChild
                My name is {value}
            </div>
    </>)
}
export default GrandChild;