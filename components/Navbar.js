import Link from "next/link"
import react from "react"
import Image from "next/image"


export default function Navbar() {
    return(
        <div className="flex h-full flex-col gap-12  pl-2 pt-12 ">
                        <div>
                            <Link href='/explore'><div className="flex gap-3 align-center items-center mb-3 text-2xl"><div><Image priority src="/search.png" height={28} width={28}/></div><div>Explore</div></div></Link>
                            <Link href='/profile'><div className="flex gap-3 align-center items-center mb-3 text-2xl"><div><Image priority src="/home.png" height={30} width={30}/></div><div>Profile</div></div></Link>
                            <Link href='/likes'><div  className="flex gap-3 align-center items-center mb-3 text-2xl"><div><Image priority src="/heart.png" height={32} width={32}/></div><div>Likes</div></div></Link>
                            <Link href='/matches'><div  className="flex gap-3 align-center items-center mb-3 text-2xl"><div><Image priority src="/matches.png" height={30} width={30}/></div><div>Matches</div></div></Link>
                            <Link href='/settings'><div  className="flex gap-3 align-center items-center mb-3 text-2xl"><div><Image priority src="/settings.png" height={29} width={29}/></div><div>Settings</div></div></Link>
                        </div>

                        <div className="mt-auto pb-12">
                            <div className="flex gap-4 text-2xl"><div><Image src="/logout.png" height={30} width={30}/></div><div>Log out</div></div>
                        </div>
        </div>
    )
}