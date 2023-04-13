import { StylesProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
// simport "react-image-lightbox/style.css";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {faHeart, FontAwesomeIcon} from '@fortawesome/fontawesome-svg-core'

import { SimpleGrid, Box, Fade, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import Heartclicked from "./Heartclicked";
import Heartopen from "./Heartopen";





export default function ImageGrid() {

const [filterOpen, setFilterOpen] = useState(false);

const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
const [open, setOpen] = useState(false);
const [liked, setLiked] = useState(false);
const [imageurl, SetImageurl] = useState("");
const url = "/placeholder.jpg"
const firstname = "Firstname"
const [appear, setAppear] = useState(null)
const [alert, setAlert] = useState(false)

// useEffect (() => {
// setAlert(true)
// setAlert(false)
// }, [liked])

const remove = function(ind) {
   const modifiedArr = arr.filter((_, i) => i !== ind)
   setArr(modifiedArr)
setAlert(true)
setTimeout(() => {
setAlert(false)
  }, "600")
   
   
// console.log(modifiedArr)
}

const age = "age"


    return (
    <>
    <div className={styles.grid}>
        <div className="flex justify-end w-[100vw] pr-4">
            <div onClick={() => setFilterOpen(!filterOpen)}className="flex cursor-pointer mt-4 mb-1 rounded-full bg-blue-50 h-fit w-fit p-2 px-4 shadow">Filter</div>
        </div>
        {filterOpen ?
                <>
                <div className="flex justify-center text-slate-700">Select a topic of (future) conversation</div>
                <div className="flex flex-wrap gap-1 w-[100vw] p-4">
            
                <><input type="checkbox" id="game" className="appearance-none peer/gaming"/><label for="game" id="gaming" onClick={() => setFilterValue("Gaming")} className="flex cursor-pointer peer-checked/gaming:bg-blue-300 hover:bg-blue-100 border text-slate-500 w-fit rounded-3xl p-1 px-2">Music</label></>
                <><input type="checkbox" id="game" className="appearance-none peer/gaming"/><label for="game" id="gaming" onClick={() => setFilterValue("Gaming")} className="flex cursor-pointer peer-checked/gaming:bg-blue-300 hover:bg-blue-100 border text-slate-500 w-fit rounded-3xl p-1 px-2">Gaming</label></>
                <><input type="checkbox" id="game" className="appearance-none peer/gaming"/><label for="game" id="gaming" onClick={() => setFilterValue("Gaming")} className="flex cursor-pointer peer-checked/gaming:bg-blue-300 hover:bg-blue-100 border text-slate-500 w-fit rounded-3xl p-1 px-2">Sports</label></>
                <><input type="checkbox" id="game" className="appearance-none peer/gaming"/><label for="game" id="gaming" onClick={() => setFilterValue("Gaming")} className="flex cursor-pointer peer-checked/gaming:bg-blue-300 hover:bg-blue-100 border text-slate-500 w-fit rounded-3xl p-1 px-2">Art</label></>
                <><input type="checkbox" id="game" className="appearance-none peer/gaming"/><label for="game" id="gaming" onClick={() => setFilterValue("Gaming")} className="flex cursor-pointer peer-checked/gaming:bg-blue-300 hover:bg-blue-100 border text-slate-500 w-fit rounded-3xl p-1 px-2">Comics</label></>

                </div>
                </>
        : <></>
        }
        {alert ? 
        
        <div className="flex bg-transparent absolute  top-56 right-0 z-40 w-full justify-center align-center items center">
         
            <div className="flex fixed rounded-full transition-opacity ease-in duration-300 opacity-100 bg-red-200 z-40 w-fit justify-center items-center h-18 p-5 text-xl">Like Sent!</div>
        </div> : 
        
        <></>
        }


        <SimpleGrid ChildWidth='auto' className="p-3"  minChildWidth="280px" spacing='60px'>

            {arr.map((el, index) => 
                
                <div className={appear} key={index}>
                    <Box className="relative rounded-t-2xl" bg='white' height='320px' width='320px'>
                    <label><input type="checkbox" className="peer hidden"></input><Image src={url} className="relative peer-checked:z-40 object-cover rounded-t-2xl" fill></Image><span className="absolute bg-white flex h-full w-full rounded-t-2xl peer-checked:backdrop-blur items-start pt-16 text-lg p-5 text-left font-serif text-black"><div className="flex align-center font-serif">Caption/quote goes here</div></span></label>
                    <div className="flex absolute align-center w-full rounded-b-2xl -bottom-10 h-12 left-0 right-0 p-3 bg-white text-xl">
                        <div className="flex  gap-3">
                            <div>{firstname},</div><div>Age</div>
                        </div>
                    </div> 
                
                    <div onClick={() => remove(index)} className="h-fit p-2 w-fit absolute z-40 cursor-pointer">
                    {liked ? <Heartclicked /> : <Heartopen/>}
                    </div>
                    </Box>
                </div>
            )}
    
    </SimpleGrid>

   

    </div>
    </>
  );
}

const styles = {
    hidden: "hidden",
    grid: "absolute scrollbar-hide w-full overflow-y-scroll h-[82vh] flex flex-col items-center",
    image: "h-36 w-36",
}