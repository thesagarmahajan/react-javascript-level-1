import { useCallback, useState } from "react"
import ShowTodoList from "./ShowTodoList"

export default function UseCallbackExample1() {
    let [todo, setTodo] = useState({
        title:"",
        status:false
      })
    
      let [list, setList] = useState([])

      let getList = useCallback(() => {
        return list
      }, [])
    // let getList = () => {
    //     return list
    //   }
    return (
        <>
            {JSON.stringify(todo)}
            <form onSubmit={(e)=>{e.preventDefault();setList([...list, todo])}}>
                <input type='text' placeholder='Add Todo' name="title" onChange={(e)=>setTodo({...todo, title:e.target.value})} />
                <button>+</button>
            </form>
            <ShowTodoList getList={getList} />
        </>
    )
}