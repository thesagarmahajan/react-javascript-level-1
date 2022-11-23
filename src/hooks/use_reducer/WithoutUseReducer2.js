import { useState } from "react";

function WithoutUseReducer2(){
    let [email, setEmail] = useState("")
    let [emailValidity, setEmailValidity] = useState(false)
    
    // What if I want to make this function reusable?
    function checkEmailValidity(e){
        if(e.target.value.indexOf("@")>0){
            setEmailValidity(true)
        }
        else{
            setEmailValidity(false)
        }
    }
    
    return (<>
        <h1>Form-1</h1>
        <input type="text" onChange={checkEmailValidity}/>
        <h1>{JSON.stringify(emailValidity)}</h1>
        <Form2 />
    </>)
}

function Form2(){
    return (<>
        <h1>Form-2</h1>
        <input type="text" onChange={checkEmailValidity}/>
        <h1>{JSON.stringify(emailValidity)}</h1>
    </>)
}

export default WithoutUseReducer2;