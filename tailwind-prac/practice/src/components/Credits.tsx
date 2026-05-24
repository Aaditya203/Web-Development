import WalletIcon from "../assets/wallet"
export const Credits = () =>{
    return (
        <div className="bg-blue-500 rounded-lg">
            <div className="grid grid-cols-3 p-2 ">
                <div className="col-span-1 rounded  flex items-center justify-center">
                    <WalletIcon/>
                </div>
                <div className="col-span-2">
                    <div className="text-white text-sm">Available Credits</div>
                    <div className="font-bold text-white text-lg">224.10</div>
                </div>
            </div>
        </div>
    )
}