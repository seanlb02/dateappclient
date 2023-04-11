import react from "react"
import Image from "next/image"
import Link from "next/link"


export default function Snapshot() {
    return (
        <div className="flex flex-col w-full h-fit">
        <div className="w-full flex p-6 bg-white text-2xl font-Helvetica ">Hey Sean!</div>
        <div className="pl-6 h-16 bg-white w-auto">Bio </div>
        <div className="flex flex-row w-full h-28 bg-white text-l md:text-xl gap-3 rounded-3xl ">
            <div className="flex rounded-xl pb-1 px-2 h-fit flex align-center items-center border-2">Male</div>
            <div className="flex rounded-xl pb-1 px-2 h-fit flex align-center items-center border-2">Waterloo</div>
            <div className="flex rounded-xl pb-1 px-2 h-fit flex align-center items-center border-2">Sometimes</div>
            <div className="flex rounded-xl pb-1 px-2 h-fit flex align-center items-center border-2">Yes</div>
            {/* <div className="flex rounded-xl pb-1 px-2 h-fit flex align-center items-center border-2">No</div> */}
           
            

        </div>
        <div className=" flex justify-center items-center w-auto pt-2 gap-2 m-2 xxs:text-xs">
                <Link href="/upload" className="flex gap-0">    
                <div className="flex gap-2 items-center p-2 bg-slate-100 w-fit h-fit rounded-xl">
                    
                        <Image src="/camera.png" width={25} height={25}></Image><div className="text-black">New Photo</div>
                </div>
                </Link>
        
                <Link href="/edit" className="flex gap-1"><div className="flex gap-2 items-center p-2 bg-slate-100 m-auto w-fit h-fit rounded-xl">
                    
                        <Image src="/edit.png" width={25} height={25}></Image><div className="text-black">Edit Profile</div>
                   
                </div>
                </Link>
           
                <Link href="/settings" className="flex gap-1">
                <div className="flex gap-2 p-2 bg-slate-100 items-center m-auto w-fit h-fit rounded-xl">
                    
                        <Image src="/preferences.png" width={25} height={25}></Image><div className="text-black">Preferences</div>
                    
                </div>
                </Link>
            
        </div>
        </div>
    )
}