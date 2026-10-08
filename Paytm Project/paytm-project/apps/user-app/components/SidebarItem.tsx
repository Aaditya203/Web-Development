"use client"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface SidebarItemProps{
    title: string;
    href: string;
    icon: React.ReactNode;
}

export default function SidebarItem({href,title,icon}: SidebarItemProps){
    const router = useRouter();
    const pathName = usePathname();
    const selected = pathName === href

    return <div className={`flex ${selected ? "text-[#6a51a6]":"text-slate-500"} cursor-pointer p-2 pl-8`} onClick={()=>{
        router.push(href);
    }}>
        <div className="pr-2">
            {icon}
        </div>
        <div className={`font-bold ${selected ? "text-[#6a51a6]" : "text-slate-500"}`}>
            {title}
        </div>
        
    </div>

}