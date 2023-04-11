import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function Eventbody() {
  return (
    <div className="border-2 flex flex-col h-[100vh] w-[100vw]">
        <div className="flex w-full h-fit p-5 text-2xl items-center">
            <div className="flex font-mono">Find, attend, match...</div>
        </div>
        <div>
            <div className="flex p-2">Search by name</div>
            <form className="flex align-center items-center justify-center">
                <input  className=" rounded-xl p-2  m-4 mb-5 py-3 bg-slate-200 max-h-24 h-fit flex-grow flex"  placeholder="Start typing..."></input>
               <div  className="m-2 ml-0 mr-3 bg-blue-200 p-2 rounded-full pt-2 text-center cursor-pointer"><Image src='/search.png' height={25} width={25}></Image></div> 
            </form> 
        </div>
        <div className="w-full text-center p-6 bold"><strong>or</strong></div>
        <div>
            <div className="flex p-2">Search by filter</div>
        </div>
        <div className="flex flex-col items-center">
             <div className="flex p-2">Attending an event not listed here?</div>
            <div className="flex p-2 bg-green-400 w-fit h-fit rounded-2xl">Create Event</div>
        </div>
       

    </div>
  )
}

export default Eventbody