import react from "react"
import Image from "next/image"
import Link from "next/link"


export default function Snapshot() {
    return (
        <>
        <div className="w-full flex p-6 bg-white text-2xl font-Helvetica ">Hey Sean!</div>
        <div className="pl-6 h-16 bg-white">Bio </div>
        <div className="w-full h-28 p-6 flex bg-white text-l md:text-xl gap-3">
            <div className="rounded-xl pb-1 px-2 h-fit flex align-center items-center border-2">Male</div>
            <div className="rounded-xl pb-1 px-2 h-fit flex align-center items-center border-2">Waterloo</div>
            <div className="rounded-xl pb-1 px-2 h-fit flex align-center items-center border-2">Sometimes</div>
            <div className="rounded-xl pb-1 px-2 h-fit flex align-center items-center border-2">Yes</div>
            <div className="rounded-xl pb-1 px-2 h-fit flex align-center items-center border-2">No</div>
           
            

        </div>
        <div className=" flex w-[100vw] pt-2 py-2 bg-white border-b-2">
                <div className="flex gap-2 p-2  m-auto bg-slate-100 w-fit h-fit rounded-xl">
                    <Link href="/upload" className="flex gap-1">
                        <Image src="/camera.png" width={25} height={25}></Image><div className="text-black">New Photo</div>
                    </Link>
                </div>
        
                <div className="flex gap-2 p-2 bg-slate-100 m-auto w-fit h-fit rounded-xl">
                    <Link href="/edit" className="flex gap-1">
                        <Image src="/edit.png" width={25} height={25}></Image><div className="text-black">Edit Profile</div>
                    </Link>
                </div>
           
                <div className="flex gap-2 p-2 bg-slate-100 bg-white m-auto w-fit h-fit rounded-xl">
                    <Link href="/settings" className="flex gap-1">
                        <Image src="/preferences.png" width={25} height={25}></Image><div className="text-black">Preferences</div>
                    </Link>
                </div>
            
        </div>
        </>
    )
}