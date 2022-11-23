import React from "react";

function Uncontrolled(){

    let name = React.createRef()
    let phone = React.createRef()
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(name.current)
        console.log(name.current.value)
        console.log(phone.current.value)
    }
    return (<>
        <h1>This is Uncontrolled</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" ref={name} />
            <input type="text" placeholder="phone" ref={phone} />

            <button>Submit</button>
        </form>
    </>)
}

export default Uncontrolled;