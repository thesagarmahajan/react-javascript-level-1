import { memo, useEffect, useMemo, useState } from "react"

let ListItem = memo(({currentTodo, handleCheck}) =>  {
    return (
        <li key={currentTodo.id}>
            {Math.floor(Math.random() * 1000)}
            <input type="checkbox" checked={currentTodo.status} onChange={()=>handleCheck(currentTodo.id)} />
            {"  "}
            {currentTodo.id+" = "+currentTodo.title}
        </li>
    )
})

export default function UseMemoExample1(){

    let [todoId, setTodoId] = useState(0)
    let [todos, setTodos] = useState([])
    let [todo, setTodo] = useState({id:0, title:"", status:false});

    // useEffect(()=>{
    //     setTodoId(todoId+1)
    // }, [todos])

    let completedTodos = useMemo(() => {
        console.log("hi")
        let completedTodos = todos.filter(currentTodo=>{
            if(currentTodo.status){
                return currentTodo
            }
        })
        return completedTodos.length
    }, [todos])
    // let completedTodos = countCompletedTodos(); 

    let handleChange = (e)=> {
        setTodo({id:todoId, title: e.target.value, status:false})
    }

    let handleAdd = () => {
        setTodos(todos=>{setTodoId(todoId+1); return [...todos, todo]})
        setTodo({id:0, title:"", status:false})
    }

    let handleCheck = useMemo(() => {

        return (todoId)=>{
            console.log("Hi:"+todoId)
            let changedTodos = todos.map(currentTodo=>{
                if(currentTodo.id==todoId){
                    currentTodo.status = !currentTodo.status
                }
                return currentTodo
            })
            setTodos(changedTodos)
        }
        
    }, [todos])

    return (
        <>  
            Completed Todos:<strong>{completedTodos}</strong> | Incompleted Todos: <strong>{todos.length-completedTodos}</strong>
            <br />
            <br />
            <input type="text" placeholder="Add Todo" value={todo.title} onChange={handleChange}/>
            <button onClick={handleAdd}>+</button>
            <br />
            <br />
            <h5>List:</h5>
            <ul>
                {
                    todos.length==0?<li>-</li>:
                    todos.map(currentTodo=>{
                        return (
                            <ListItem currentTodo={currentTodo} handleCheck={handleCheck} />
                        )
                    })
                }
            </ul>
        </>
    )
}

