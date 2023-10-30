import { useContext } from "react";
import { FormContext } from "./Form";

function NextContainer(){
    let formData = useContext(FormContext)
    console.log(formData)
    return (
        <>
            <h1>
                name: {formData.name}
                email: {formData.email}
                password: {formData.password}
            </h1>        
        </>
    )
}

export default NextContainer;