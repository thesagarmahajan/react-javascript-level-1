import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

function EmailValidator(){
    let [disabled, setDisabled] = useState(true)
    function handleChange(e){
        if(e.target.name=="email"){
            let str = String(e.target.value)
            let isEmail = str.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            if(isEmail!=null){
                console.log("Email Matched")
                setDisabled(false)
            }
            else{
                setDisabled(true)
            }
        }
    }
    return (<>
        <form>
            <input type="text" name="email" onChange={handleChange} placeholder="Enter Your Email" />
            <button disabled={disabled}>Submit</button>
        </form>
    </>)
}

export default EmailValidator;