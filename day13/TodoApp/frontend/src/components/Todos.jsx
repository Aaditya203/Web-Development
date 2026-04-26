export function Todos({todos}){
    return <div>
        {todos.map((todo)=>{
            return <div key={todo._id}>
                <h2>{todo.title}</h2>
                <h4>{todo.description}</h4>
                <button onClick={()=>{
                    fetch("http://localhost:3000/completed",{
                        method:"PUT",
                        body:JSON.stringify({
                            id:todo._id
                        }),
                        headers:{
                            "Content-type":"application/json"
                        }
                    })
                }}>{todo.completed == true?"Completed":"Mark as Completed"}</button>
            </div>
        })}
    </div>
}