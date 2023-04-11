import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';

export default function Matchlist(){

const [arr, setArr] = useState([1,1,1,1,1,1]);

  return (
    <>
    
    <div className=" overflow-y-scroll scrollbar-hide w-full h-full">
    {arr.map(el => 
        <div className="flex align-center w-full h-fit p-3 items-center gap-3">
            <Link href="/chat/xyx" className="flex align-center w-full h-fit p-3 items-center gap-3">
            <div className="relative flex h-12 w-12 rounded-full border-1 border-black">
                <Image src="/placeholder.jpg" fill className="absolute rounded-full object-cover"/>
            </div>            
            <div>Name, age</div>
            </Link>
            <div className="flex items-center ml-auto mr-1 bg-black px-2 py-1 bg-red-400 border-1 border-white text-white rounded-lg">Unmatch</div>
        </div>
    )}
    </div>

    


</>
  
  )}
