import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

export default function Likeslist(){

const [arr, setArr] = useState([1,1,1,1,1,1,1,1,1,1,1,1,11,1,,1,1,1,1,1,1,1,1,1,1,1,1]);

  return (
    <>
    
    <div className=" overflow-y-scroll scrollbar-hide w-full h-full md:w-[30vw]justify-center lg:rounded-3xl">
    {arr.map(el => 
        <div className="flex align-center w-full h-fit p-3 items-center gap-3">
            <div className="relative flex h-12 w-12 rounded-full border-1 border-black">
                <Image src="/placeholder.jpg" fill className="absolute rounded-full object-cover"/>
            </div>
            <div>Name, age</div>
        </div>
    )}
    </div>

    


</>
  
  )}
