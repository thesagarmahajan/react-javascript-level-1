import { useReducer } from "react";

function handleChange(currentEmail, action){
   return action
}
function WithUseReducer(){
    let [email, dispatch] = useReducer(handleChange, "")
    return (<>
        <h1>With Use Reducer</h1>
        <h1>{email}</h1>
        <input type="text" onChange={(e)=>dispatch(e.target.value)} />
    </>)
}
export default WithUseReducer;