import { useState } from "react";

function DataBinding(){
    let [users, setUsers] = useState([])
    let [udata, setUdata] = useState({
        name:"",
        email:"",
        gender:""
    })
    function handleChange (e) {
        setUdata({...udata,[e.target.name]:e.target.value})
        // console.log(udata)
    }
    function handleSubmit(e){
        e.preventDefault()
        setUsers([...users, udata])
        // console.log(users)
    }
    return (<>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" onChange={handleChange}/> <br />
            <input type="email" name="email" placeholder="Enter Email" onChange={handleChange}/> <br />
            Male: <input type="radio" name="gender" value="Male" onChange={handleChange}/> <br />
            Female: <input type="radio" name="gender" value="Female" onChange={handleChange} /> <br />
            <button type="submit">SUBMIT</button>
        </form><br />
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </>)
}

export default DataBinding;