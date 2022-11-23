import { useReducer, useState } from "react";

function manageTasks(tasks,action){

    if(action.payload!=undefined){
        tasks.push(action.payload)
        return tasks
    }
    else if(action.id!=undefined){
        return tasks.map((task)=>{
            if(task.id==action.id){
                task.done=!task.done
                return task
            }
            return task
        })
    }

}

function WithUseReducer4(){
    let [task, setTask] = useState("")
    let [tasks, dispatch] = useReducer(manageTasks, [])

    function handleSubmit(e){
        e.preventDefault()
        dispatch({payload:{id:Date.now(), task:task, done:false}})
        setTask("")
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add New Task" value={task} onChange={(e)=>setTask(e.target.value)}/>
        </form>
        <h1>New Task = {task}</h1>
        
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map(task=>{
                        
                        return <tr>
                                    <td>{task.id}</td>
                                    <td>{task.task}</td>
                                    <td>{JSON.stringify(task.done)}</td>
                                    <td><button onClick={()=>dispatch({id:task.id})}>Done</button></td>
                                </tr>
                    })
                }
            </tbody>
        </table>
            
                
    </>)
}

export default WithUseReducer4;