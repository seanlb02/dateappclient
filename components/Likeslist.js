import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

export default function Likeslist(){

const [arr, setArr] = useState([1,1,1,1,1,1,1,1,1,1,1,1,11,1,,1,1,1,1,1,1,1,1,1,1,1,1]);

  return (
    <>
    
    <div className=" overflow-y-scroll scrollbar-hide w-full h-full">
    {arr.map(el => 
        <div className="flex align-center w-full h-fit p-3 items-center gap-3">
            <div className="h-fit w-fit rounded-full border-2"><Image src="/placeholder.jpg" height={30} width={50} className="rounded-full object-fit"/></div>
            <div>Name, age</div>
        </div>
    )}
    </div>

    


</>
  
  )}
