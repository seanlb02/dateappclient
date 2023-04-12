import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';


export default function Likeslist(){

const [arr, setArr] = useState([1,1,1,1,1,1,1,1,1,1,1,1,11,1,,1,1,1,1,1,1,1,1,1,1,1,1]);

  return (
    <>
    
    <div className=" overflow-y-scroll scrollbar-hide w-full h-[83vh] md:w-[30vw]justify-center lg:rounded-3xl">
    {arr.map(el => 
        <div className="flex align-center w-full h-fit p-3 items-center gap-3">
            <Link href="/users/xyz" className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 rounded-full border-1 border-black">
                <Image src="/placeholder.jpg" fill className="absolute rounded-full object-cover"/>
            </div>
            <div>Name, age</div>
            </Link>
            <div className="flex items-center ml-auto mr-1 bg-black px-2 py-1 border-1 border-white text-white rounded-lg">Match</div>
        </div>
    )}
    </div>

    


</>
  
  )}
