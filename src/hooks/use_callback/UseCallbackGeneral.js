import { useCallback } from "react"
import { useState } from "react"

function UseCallbackGeneral(){
    let [tasks, setTasks] = useState([
        {
            id:1,
            task:"Task1",
            done:false
        },
        {
            id:2,
            task:"Task2",
            done:false
        }
    ])

    let clickFun  = function(id){
        setTasks(
            tasks.map(task=>{
                if(task.id==id){
                    task.done=true
                    return task
                }
                return task
            })
        )
    }

    let handleClick = useCallback(id=>{
        setTasks(
            tasks.map(task=>{
                if(task.id==id){
                    task.done=true
                    return task
                }
                return task
            })
        )
    }, [tasks])
    
    return (<>
        <h1>Use UseCallbackGeneral</h1>
        <ul>
            {
                tasks.map(task=>{
                    return <Item task={task} handleClick={()=>handleClick(task.id)}/>
                })
            }
        </ul>
    </>)
}

function Item(props){
    return (<>
        <li>{props.task.task} | {JSON.stringify(props.task.done)}   <button onClick={props.handleClick}>Done</button></li>
    </>)
}

export default UseCallbackGeneral;