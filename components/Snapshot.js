import react from "react"
import Image from "next/image"
import Link from "next/link"
import {useEffect, useState} from 'react'


export default function Snapshot() {

    const [hidden, setHidden] = useState(true);

    return (
        <div className="flex flex-col w-full h-fit">
            <div id="GreetContainer" className="flex m-auto items-center w-[100vw]">
                <div className="w-full flex px-6 pt-6 bg-white text-2xl font-Helvetica ">Hey Sean!</div>
                {hidden ? <div onClick={() => setHidden(!hidden)} className="w-full cursor-pointer flex pr-0 px-6 pt-6 bg-white text-center justify-center text-slate-600 text-sm font-Helvetica ">Expand</div>
                    : 
                <div onClick={() => setHidden(!hidden)} className="w-full cursor-pointer flex pr-0 px-6 pt-6 bg-white text-center justify-center text-slate-600 text-sm font-Helvetica ">Hide</div>
                }

            </div>
        
        {hidden ? <></> : <div className="pl-4 pt-3 h-16 bg-white w-auto">Bio rendered here</div>}
        {hidden ? <></> : 
            <div className="flex flex-wrap w-full p-3 h-28 bg-white text-sm text-slate-500 md:text-lg gap-1 rounded-3xl ">
                <div className="flex rounded-xl pb-1 pt-1 px-2 h-fit flex align-center items-center border-2">Male</div>
                <div className="flex rounded-xl pb-1 pt-1 px-2 h-fit flex align-center items-center border-2 gap-1"> <Image src="/location.png" height={18} width={18}/><div>Waterloo</div></div>
                <div className="flex rounded-xl pb-1 pt-1 px-2 h-fit flex align-center items-center border-2"> <Image src="/height.png" height={20} width={20}/><div>| 177cm</div></div>
                <div className="flex rounded-xl pb-1 pt-1 px-2 h-fit flex align-center items-center border-2 gap-2"> <Image src="/smoke.png" height={20} width={20}/><div>| No</div></div>
                <div className="flex rounded-xl pb-1 pt-1 px-2 h-fit flex align-center items-center border-2">  <Image src="/drink.png" height={20} width={20}/><div>| Sometimes</div></div>
                <div className="flex rounded-xl pb-1 pt-1 px-2 h-fit flex align-center items-center border-2 gap-1"> <Image src="/pram.png" height={20} width={20}/><div>| No</div></div>
            </div>
        }
        <div className=" flex justify-center items-center w-auto pt-2 gap-2 m-2 xxs:text-xs">
                <Link href="/upload" className="flex gap-0">    
                <div className="flex gap-2 items-center p-2 bg-slate-100 w-fit h-fit rounded-xl">
                    
                        <Image src="/camera.png" width={25} height={25}></Image><div className="text-black">New Upload</div>
                </div>
                </Link>
        
                <Link href="/edit" className="flex gap-1"><div className="flex gap-2 items-center p-2 bg-slate-100 m-auto w-fit h-fit rounded-xl">
                    
                        <Image src="/edit.png" width={25} height={25}></Image><div className="text-black">Edit Profile</div>
                   
                </div>
                </Link>
           
                <Link href="/preferences" className="flex gap-1">
                <div className="flex gap-2 p-2 bg-slate-100 items-center m-auto w-fit h-fit rounded-xl">
                    
                        <Image src="/preferences.png" width={25} height={25}></Image><div className="text-black">Preferences</div>
                    
                </div>
                </Link>
            
        </div>
        </div>
    )
}