import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import Image from 'next/image';

function Chatwindow() {
  return (
    <div className=" flex flex-col h-[82vh] h-[100vw]">
    <div id="header" className="flex gap-3 p-5 text-2xl">
        <div>Name</div>
    </div>
    <div  className="flex flex-col h-[75vh] bg-blue-50 w-full">

            <div className="border-2 flex h-[70vh] w-[100vw]"></div>
            
            <form className="flex align-center items-center justify-center bg-blue-50">
                <TextareaAutosize type="text"  minRows={1} maxRows={4} className=" rounded-xl p-2  m-4 mb-5 py-3 bg-slate-200 max-h-24 h-fit flex-grow flex"  placeholder="Type a message..."></TextareaAutosize>
               <div  className="m-2 ml-0 mr-3 bg-blue-200 p-2 rounded-full pt-2 text-center cursor-pointer"><Image src='/search.png' height={25} width={25}></Image></div> 
            </form> 
    </div>

</div>
  )
}

export default Chatwindow