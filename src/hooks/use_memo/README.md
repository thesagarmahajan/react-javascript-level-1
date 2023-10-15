# React.useMemo() hook

## Example-1 (Caching result of a function)

- In this example, there was a function countCompletedTodos() which return number of todos having status: true.
- If we do not memoize it then while changing the value inside textbox that is on onChange event also the countCompletedTodos() functions gets invoked.
- To avoid such unwanted invocations I used useMemo. So, the function will be invoked only if "todos" state variable gets update.

### Without Memoizating the function:
```javascript
let completedTodos = countCompletedTodos();
let countCompletedTodos = () => {
        let completedTodos = todos.filter(currentTodo=>{
                if(currentTodo.status){
                    return currentTodo
                }
            })
            return completedTodos.length
        }
```

### Memoizing the function:
```javascript
let completedTodos = useMemo(() => {
    let completedTodos = todos.filter(currentTodo=>{
            if(currentTodo.status){
                return currentTodo
            }
        })
        return completedTodos.length
    }, [todos])
```

## Example-2 (Avoiding re-rending of child component)

- onChange of input text box the child component ListItem gets re-rendered.
- Need to avoid re-render of the child if the set of props being passed are unchanged.
- Though we are passing two props, currentTodo and handleCheck, let's just assume that we are passing only currentTodo.
- By memoizing the entire child component we can resolve this issue.

### Without Memoizing Component
```javascript
let ListItem = ({currentTodo, handleCheck}) =>  {
    return (
        <li key={currentTodo.id}>
            {Math.floor(Math.random() * 1000)}
            <input type="checkbox" checked={currentTodo.status} onChange={()=>handleCheck(currentTodo.id)} />
            {"  "}
            {currentTodo.id+" = "+currentTodo.title}
        </li>
    )
}
```
### Memoizing Component
```javascript
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
```

## Example-3 (Avoiding re-rending of child component if a function is being passed as prop)

- onChange of input text box the child component ListItem gets re-rendered.
- Need to avoid re-render of the child if the set of props being passed are unchanged.
- We are passing two props, currentTodo and handleCheck.
- For the currentTodo prop we have seen the solution already in Example-2 Now let's resolve the re-rendering issue when we are passing handleCheck function as a prop.

### Without Memoizing the function
```javascript
let handleCheck =  (todoId)=>{
    console.log("Hi:"+todoId)
    let changedTodos = todos.map(currentTodo=>{
        if(currentTodo.id==todoId){
            currentTodo.status = !currentTodo.status
        }
        return currentTodo
    })
    setTodos(changedTodos)
}
```

### Memoizing the function
```javascript
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
```
