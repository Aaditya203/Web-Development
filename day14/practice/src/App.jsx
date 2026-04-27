import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div>
    <HeaderButton/>
    <Header title="Hi there"/>
    <Header title="Hi there"/>
    <Header title="Hi there"/>
    <Header title="Hi there"/>
    </div>
  )
}

function HeaderButton(){
  const [title,setTitle] = useState("My name is Aditya");
  function change(){
    setTitle("My name is "+Math.random())
  }
  return <div>
    <button onClick={change}>Click me!</button>
    <Header title={ title }/>
  </div>
}

function Header(props){
  return <div>
    <h1>{props.title}</h1>
  </div>
}
export default App
