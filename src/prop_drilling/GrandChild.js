import { useContext } from "react";
import { NameContext } from "./Grandparent";

function GrandChild(props){
    const value = useContext(NameContext)
    return (<>
        <div style={{border:"solid green 5px", height:"200px"}}>
            This is GranChild
            My name is {value.email}
        </div>
    </>)
}
export default GrandChild;