import ChevronFirst from "../assets/ChevronFirst"
import ChevronLast from "../assets/ChevronLast"
import logo from "../assets/logo.png"
import WalletIcon from "../assets/wallet"
import { Credits } from "./Credits"
import { createContext, useContext, useState } from "react"
const SideBarContext = createContext<any>(null);
export default function SideBar({children}:any){
    const [expanded,setExpanded] = useState(true)
    return (
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32":"w-0"}`}/>
                        <button onClick={()=> setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronFirst/>:<ChevronLast/>}
                        </button>
                    </div>
                    <SideBarContext.Provider value={{expanded}}>
                    <ul className="flex-1 px-3">{children}</ul>
                    </SideBarContext.Provider>
                    <div className="flex p-2 mt-auto">
                        <div>
                            {expanded ? <Credits/> : <div className="p-3"><WalletIcon/></div>}
                        </div>
                    </div>

                </nav>
            </aside>
        </>
    )
}

export function SideBarItem({icon,text,active,alert}:any){
    const {expanded} = useContext(SideBarContext)
    return (
        <li className={`relative  flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active? "bg-gradient-to-tr from-sky-200 to-sky-100 text-sky-800":"hover:bg-indigo-50 text-gray-600"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "ml-3":"w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-sky-400 ${expanded ? "" : "top-2"}`}>
                    
                </div>
            )}
            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-sky-100 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{text}</div>
            )}
        </li>
    )
}