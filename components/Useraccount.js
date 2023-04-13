import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import UserImagelist from './UserImagelist'


function Useraccount() {
  return (
    <div className=" flex flex-col h-[82vh] h-[100vw]">
        <div id="header" className="flex gap-3 p-5 text-2xl">
            <div>Name,</div><div>Age</div>
            <div className="flex items-center ml-auto mr-1 bg-black px-2 py-1 border-1 border-white text-lg text-white rounded-lg">Match</div>
        </div>
        <div  className="flex flex-col">
            <UserImagelist/>
        </div>

    </div>
  )
}

export default Useraccount