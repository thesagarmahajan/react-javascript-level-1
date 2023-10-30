import { createContext, useRef, useState } from "react";
import NextContainer from "./NextContainer";


export const FormContext = createContext()


function Form(){
    let nameRef = useRef("");
    let emailRef = useRef("");
    let passwordRef = useRef("");

    let [formData, setFormData] = useState({})
    let handleSubmit = (e) => {
        e.preventDefault();
        // let formData = ;
        setFormData({
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
            })
        console.log(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" ref={nameRef} />
                <input type="text" placeholder="Email" ref={emailRef} />
                <input type="text" placeholder="Password" ref={passwordRef} />
                <button>SUBMIT</button>
            </form>
            <FormContext.Provider value={formData}>
                <NextContainer />
            </FormContext.Provider>
        </>
    );
}

export default Form;