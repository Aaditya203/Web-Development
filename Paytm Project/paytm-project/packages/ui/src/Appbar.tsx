import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null
    },
    onSignin: () => void;
    onSignout: () => void;
}
export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
    return <div className="flex justify-between py-2 px-6 border-b border-gray-300 mt-2">
        <div className="text-lg font-bold pl-4">
            PayTM
        </div>
        <div className="flex items-center gap-4">
            <Button className = "bg-black text-white text-lg p-2 rounded-lg mr-10" onCLick={user ? onSignout : onSignin}>{user ? "Sign out" : "Sign in"}</Button>
        </div>
    </div>
}   