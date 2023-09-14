import GrandChild from "./GrandChild";
import GrandChildClass from "./GrandChildClass";

function Child(){
    return (<>
        <div style={{border:"solid orange 5px", height:"300px"}}>
            This is Child
            {/* <GrandChildClass /> */}
            <GrandChild />
            {/* <GrandChild name={props.name}/> */}
        </div>
    </>)
}
export default Child;