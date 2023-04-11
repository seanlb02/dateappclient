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
    <div className={styles.grid}>
        {alert ? 
        
        <div className="flex bg-transparent absolute top-56 right-0 z-40 w-full  justify-center align-center items center">
         
            <div className="flex rounded-full transition-opacity ease-in duration-300 opacity-100 bg-red-200 z-40 w-fit justify-center items-center h-18 p-5 text-xl">Like Sent!</div>
        </div> : 
        
        <></>
}
        <SimpleGrid ChildWidth='auto' className="p-3"  minChildWidth="280px" spacing='60px'>

  


        {arr.map((el, index) => 
            
            <div className={appear} key={index}>
                <Box className="relative" bg='white' height='320px' width='320px'>
                <label><input type="checkbox" className="peer hidden"></input><Image src={url} className="relative object-cover rounded-t-2xl" fill></Image><span className="absolute hidden peer-checked:flex h-full w-full rounded-t-2xl peer-checked:backdrop-blur justify-center items-end pb-24 text-white">Caption goes here</span></label>
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

    <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={
            [{src: {url}}]
        }
        
      />

    </div>
  );
}

const styles = {
    hidden: "hidden",
    grid: "absolute scrollbar-hide w-full overflow-y-scroll h-[82vh] flex flex-col items-center",
    image: "h-36 w-36",
}