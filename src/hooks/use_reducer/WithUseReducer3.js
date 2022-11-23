import { useReducer, useState } from "react";
import { Form } from "react-bootstrap";

function checkEmailValidity(emailValidity, action){
    if(action.payload.indexOf("@")>0){
        return {email:action.payload, isvalid:true}
    }
    else{
        return {email:action.payload, isvalid:false}
    }
}

function WithUseReducer3(){

    let [email, dispatch] = useReducer(checkEmailValidity, 
        {email:"", isvalid:false}
    )    

    return (<>
        <h1>Form-1</h1>
        <input type="text" onChange={(e)=>dispatch({payload:e.target.value})}/>
        <h1>{JSON.stringify(email)}</h1>
        <Form2 />
    </>)
}

function Form2(){

    let [email, dispatch] = useReducer(checkEmailValidity, 
        {email:"", isvalid:false}
    )    

    return (<>
        <h1>Form-1</h1>
        <input type="text" onChange={(e)=>dispatch({payload:e.target.value})}/>
        <h1>{JSON.stringify(email)}</h1>
    </>)
}



export default WithUseReducer3;