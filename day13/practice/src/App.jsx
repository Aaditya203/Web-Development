import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [todos, setTodo] = useState([{
    title:"Go to Gym",
    description:"Do Gym from 7-9 a.m.",
    isCompleted:false
  },{
    title:"DSA Time",
    description:"Do DSA from 9-11 a.m.",
    isCompleted:false
  }]);
  function addTodo(){
    setTodo([...todos,{
      title:"Do Web Development!!",
      description:"Start React and Create a Project"
    }])
  }
  return (
    
    <div>
      <button onClick={addTodo}>Add New Todo</button>
      {
        todos.map((todo)=>{
          return <Todo title={todo.title} description={todo.description}></Todo>
        })
      }
    </div>
  )
}

function Todo(props){
  return <div>
    <h2>{props.title}</h2>
    <h4>{props.description}</h4>
  </div>
}
function CustomButton(props){
  function onButtonPressed(){
    props.setCount(props.count+1);
  }
  return <button onClick={onButtonPressed}>Counter {props.count}</button>
}

export default App
