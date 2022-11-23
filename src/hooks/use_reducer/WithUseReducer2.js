import { useReducer, useState } from "react";

function checkEmailValidity(emailValidity, email){
    if(email.indexOf("@")>0){
        return true
    }
    else{
        return false
    }
}

function WithUseReducer2(){
    let [email, setEmail] = useState("")
    let [emailValidity, dispatch] = useReducer(checkEmailValidity, false)    
    
    function doSomething(e){
        setEmail(e.target.value)
        dispatch(e.target.value)
    }
    return (<>
        <h1>Form-1</h1>
        <input type="text" onChange={doSomething}/>
        <h1>{JSON.stringify(emailValidity)}</h1>
        <Form2 />
    </>)
}

function Form2(){
    let [email, setEmail] = useState("")
    let [emailValidity, dispatch] = useReducer(checkEmailValidity, false)    
    
    function doSomething(e){
        setEmail(e.target.value)
        dispatch(e.target.value)
    }
    
    return (<>
        <h1>Form-2</h1>
        <input type="text" onChange={doSomething}/>
        <h1>{JSON.stringify(emailValidity)}</h1>
    </>)
}

export default WithUseReducer2;