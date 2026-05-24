import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import SideBar, { SideBarItem } from './components/SideBar'
import { Credits } from './components/Credits'
import { Home } from './assets/home'
import Orders from "./assets/orders.png"
import Product from "./assets/windows.png"
import Delivery from "./assets/delivery.png"
import Marketing from "./assets/megaphone.png"
import Analytics from "./assets/analytics.png"
import Discount from "./assets/discount.png"
import Audience from "./assets/audience.png"
import Appearance from "./assets/appearance.png"
import Plugin from "./assets/plugin.png"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        <SideBar>
          <SideBarItem icon={<Home/>} text={"Home"}/>
          <SideBarItem icon={<img src= {Orders} className='w-5 h-5'/>} text={"Orders"} alert/>
          <SideBarItem icon={<img src= {Product} className='w-5 h-5'/>} text={"Product"} active/>
          <SideBarItem icon={<img src= {Delivery} className='w-5 h-5'/>} text={"Delivery"} alert/>
          <SideBarItem icon={<img src= {Marketing} className='w-5 h-5'/>} text={"Marketing"}/>
          <SideBarItem icon={<img src= {Analytics} className='w-5 h-5'/>} text={"Analytics"}/>
          <SideBarItem icon={<img src= {Discount} className='w-5 h-5'/>} text={"Discount"}/>
          <SideBarItem icon={<img src= {Audience} className='w-5 h-5'/>} text={"Audience"}/>
          <SideBarItem icon={<img src= {Appearance} className='w-5 h-5'/>} text={"Appearance"}/>
          <SideBarItem icon={<img src= {Plugin} className='w-5 h-5'/>} text={"Plugins"} />
        </SideBar>
      </div>
    </>
  )
}

export default App
