// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import { useEffect, useState } from "react"

// function App(){
//   let count = 4
//   const [todos,setTodos] = useState([{
//     id:3,
//     title:'Do GYM',
//     description:"Go to gym at 6 in morning"
//   },{
//     id:1,
//     title:'Solve DSA',
//     description:"Do DSA at 10 in morning"
//   },{
//     id:2,
//     title:'Do web dev',
//     description:"Do web dev and create some projects"
//   }])
//   function addTodo(){
//     setTodos([...todos,{
//       id:count++,
//       title:Math.random(),
//       description:Math.random()
      
//     }])
//   }
//   return (
//     <div>
//       <button onClick={addTodo}>Add a Todo</button>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
//     </div>
//   )
// }
// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h3>{description}</h3>
//   </div>
// }


// function App(){
//   return <div>
//     <CardWrapper>
//       <CardWrapper>
//       Hi there
//       </CardWrapper>
//     </CardWrapper>
//     <CardWrapper>
//       Hello How are you!
//     </CardWrapper>
//   </div>
// }

// function CardWrapper({children}){
//   return <div style={{border: '2px solid black',padding:20,marginBottom:10}}>
//     {children}
//   </div>
// }
// function App(){
//   useEffect(()=>{
//     alert("Hi")
//   },[]);
//   return <div>
//     hi there
//   </div>
// }

function App(){
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    const fetchTodos = async ()=>{
      const res = await fetch("http://localhost:3000/todos")
      const jsoN = await res.json();
      const data = jsoN.todos
      setTodos(data)

    }
    fetchTodos()
    const interval = setInterval(()=>{
      fetchTodos()
    },10000)

    return () => clearInterval(interval)
  },[])

  return <div>
    {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description}/> )}
  </div>
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}
export default App;