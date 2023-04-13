import { StylesProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
// simport "react-image-lightbox/style.css";
import Image from "next/image";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import { SimpleGrid, Box } from '@chakra-ui/react'

export default function Profilepage() {

const arr = [1, 2, 3, 4, 5]
const [camera, setCamera] = useState(false);
const [imageurl, setImageurl] = useState("/placeholder.jpg");
const url = "/placeholder.jpg"
const firstname = "Firstname"
const age = "age"


function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    setCamera(false)
  }


    return (
        <>
    {
        camera ?  <Camera className="h-72 w-full" 
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
      /> :
    
    <div className={styles.grid}>

        <SimpleGrid ChildWidth='auto' className="flex flex-col overflow-y-scroll scrollbar-hide h-fit w-auto items-center align-center scrollbar-hide" minChildWidth="280px" spacing='60px'>
  
  
        {/* <><Box onClick={() => setCamera(true)} className="relative border-2 object-contain" bg='white' height='350px'><Image className="object-contain p-20" src='/camera.png' fill sizes='auto'></Image></Box></> */}

        {arr.map(el => 
            
            <><Box  className="relative h-fit rounded-t-2xl" bg='white' height='340px' width='340px'><Image className="object-cover" src={imageurl} fill></Image><div className=" absolute w-full rounded-b-2xl -bottom-10 h-12 left-0 right-0 p-3 bg-white text-2xl"><div className="flex gap-2 text-sm"></div></div>
                <label><input type="checkbox" className="peer hidden"></input><Image src={url} className="relative peer-checked:z-40 object-cover rounded-ful" fill></Image><span className="absolute bg-white flex h-full w-full border border-slate-300 rounded-t-2xl peer-checked:backdrop-blur items-start pt-16 text-lg p-5 text-left font-serif text-black"><div className="flex align-center font-serif">Caption/quote goes here</div></span></label>
            </Box></>
        )}
    
    </SimpleGrid>

   

    </div>
    }
    </>
  );
}

const styles = {
    grid: "absolute flex flex-col items-center overflow-y-scroll scrollbar-hide w-full h-auto",
    image: "h-36 w-36",
}