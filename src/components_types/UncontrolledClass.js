import React, { createRef } from "react";
class UncontrolledClass extends React.Component {
    
    constructor(props){
        super(props)
        this.emailRef = createRef()
        this.passwordRef = createRef()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log({"email":this.emailRef.current.value, "password":this.passwordRef.current.value})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Email" ref={this.emailRef} />
                <input type="text" placeholder="Password" ref={this.passwordRef} />
                <button>Login</button>
            </form>
        )
    }
}

export default UncontrolledClass;