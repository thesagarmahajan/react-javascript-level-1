import { createContext, useState } from "react";
import Parent from "./Parent";

export const NameContext = createContext()

function GrandParent(){
    let [name, setName] = useState("")
    let [givenName, setGivenName] = useState({
        name:"sagar",
        email:"sagar@gmail.com"
    })
    function handleChange(e){
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        setGivenName(name)
    }
    return (<>
        <div style={{border:"solid red 5px", height:"500px", padding:"10px"}}>
            <form onSubmit={handleSubmit}>
                <label>Enter Data and Transfer to the GrandChild: </label>
                <input type="text" onChange={handleChange}/>
                <button type="submit">SUBMIT</button>
            </form>
            <NameContext.Provider value={name}>
                <Parent />
            </NameContext.Provider>
        </div>
    </>)
}
export default GrandParent;