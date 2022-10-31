import GrandChild from "./GrandChild";

function Child(props){
    return (<>
        <div style={{border:"solid orange 5px", height:"300px"}}>
            This is Child
            <GrandChild />
            {/* <GrandChild name={props.name}/> */}
        </div>
    </>)
}
export default Child;