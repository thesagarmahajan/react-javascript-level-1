import { useRef } from "react";

function UseRefFormExample(){
    // let nameRef = useRef("");
    // let emailRef = useRef("");
    // let passwordRef = useRef("");

    let generalRef = useRef({
        name:"",
        email:"",
        password:""
    })

    // let handleSubmit = (e) => {
    //     e.preventDefault();
    //     let formData = {
    //     name: nameRef.current.value,
    //     email: emailRef.current.value,
    //     password: passwordRef.current.value
    //     };
    //     console.log(formData);
    // };

    let generalRefSubmit = (e) => {
        e.preventDefault();
        console.log(generalRef.current.value);
    };

    return (
        <>
        <form onSubmit={generalRefSubmit}>
            <input type="text" placeholder="Name" ref={generalRef.name} />
            <input type="text" placeholder="Email" ref={generalRef.email} />
            <input type="text" placeholder="Password" ref={generalRef.phone} />
            <button>SUBMIT</button>
        </form>
        </>
    );
}

export default UseRefFormExample;