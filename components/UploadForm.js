import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { SimpleGrid, Box } from '@chakra-ui/react'


function UploadForm() {

    const [arr, setArr] = useState([1, 2])


    const [height, setHeight] = useState(Array.from({length: (120)}, (_, i) => 120 + i * 1))

    
    const [chosenLoc, setChosenLoc] = useState("");
    

    


  return (
    <div className="flex flex-col h-[100vh] w-[100vw] overflow-y-scroll scrollbar-hide">
        <div className="flex w-full h-fit p-5 text-2xl items-center">
            <div className="flex font-mono">Upload</div>
        </div>
        
        <SimpleGrid ChildWidth='100%' className="flex flex-col overflow-y-scroll scrollbar-hide h-fit w-[100vw] items-center justify-center align-center scrollbar-hide" minChildWidth="280px" spacing='10px'>
            <><Box className="relative gap-2 flex h-fit border-2 rounded-2xl flex-col items-center justify-center align-center" bg='white' height='200px' width='340px'>
                <div><Image src='/pen.png' height={40} width={40}/></div>
                <div className="flex w-full h-auto items-center justify-center text-slate-400">Tap to write card</div>
            </Box></>

            <><Box className=" gap-2 flex flex-wrap h-fit border-2 rounded-2xl flex-col items-center justify-center align-center" bg='white' width='340px'>
                <div className="flex">Help us filter the feed</div>
                <div className="flex w-full h-auto items-center justify-center text-slate-400">Select a category</div>
                <div className="flex flex-wrap gap-1  p-4">
            
                    <><input type="checkbox" id="game" className="appearance-none peer/gaming"/><label for="game" id="gaming" onClick={() => setFilterValue("Music")} className="flex cursor-pointer peer-checked/gaming:bg-blue-300 hover:bg-blue-100 border text-slate-500 w-fit rounded-3xl p-1 px-2">Music</label></>
                    <><input type="checkbox" id="game" className="appearance-none peer/gaming"/><label for="game" id="gaming" onClick={() => setFilterValue("Gaming")} className="flex cursor-pointer peer-checked/gaming:bg-blue-300 hover:bg-blue-100 border text-slate-500 w-fit rounded-3xl p-1 px-2">Gaming</label></>
                    <><input type="checkbox" id="game" className="appearance-none peer/gaming"/><label for="game" id="gaming" onClick={() => setFilterValue("Sports")} className="flex cursor-pointer peer-checked/gaming:bg-blue-300 hover:bg-blue-100 border text-slate-500 w-fit rounded-3xl p-1 px-2">Sports</label></>
                    <><input type="checkbox" id="game" className="appearance-none peer/gaming"/><label for="game" id="gaming" onClick={() => setFilterValue("Art")} className="flex cursor-pointer peer-checked/gaming:bg-blue-300 hover:bg-blue-100 border text-slate-500 w-fit rounded-3xl p-1 px-2">Art</label></>
                    <><input type="checkbox" id="game" className="appearance-none peer/gaming"/><label for="game" id="gaming" onClick={() => setFilterValue("Comics")} className="flex cursor-pointer peer-checked/gaming:bg-blue-300 hover:bg-blue-100 border text-slate-500 w-fit rounded-3xl p-1 px-2">Comics</label></>

                </div>
            </Box></>

            <><Box className="relative gap-2 flex h-fit border-2 rounded-2xl flex-col items-center justify-center align-center" bg='white' height='340px' width='340px'>
                <div><Image src='/camera.png' height={40} width={40}/></div>
                <div className="flex w-full h-auto items-center justify-center text-slate-400">Tap to upload a photo</div>
            </Box></>
        </SimpleGrid>

        <div className="w-full flex justify-center p-2"><div className="flex w-fit h-fit p-2 px-3 bg-green-100 rounded-xl">Upload</div></div>

    </div>
  )
}

export default UploadForm