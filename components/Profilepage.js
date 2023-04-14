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
const url = "/next.svg"
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

        <SimpleGrid ChildWidth='auto' className="flex flex-col overflow-y-scroll h-fit w-auto items-center align-center scrollbar-hide" minChildWidth="280px" spacing='60px'>
  
  
        {/* <><Box onClick={() => setCamera(true)} className="relative border-2 object-contain" bg='white' height='350px'><Image className="object-contain p-20" src='/camera.png' fill sizes='auto'></Image></Box></> */}

        {arr.map(el => 
            
            <Box className="relative rounded-t-2xl border border-1 border-slate-400" bg='white' height='320px' width='320px'>
                
                <label><input type="checkbox" className="peer hidden"></input><Image src='/placeholder.jpg' className="relative peer-checked:z-40 object-cover rounded-t-2xl" fill></Image><span className="absolute bg-white flex h-full w-full rounded-t-2xl peer-checked:backdrop-blur items-start pt-16 text-lg p-5 text-left font-serif text-black"><div className="flex align-center text-2xl font-serif">Caption/quote goes here</div></span></label>
                
                
                <div className="flex absolute rounded-b-2xl  border-black -bottom-10 gap-2 align-center items-center text-sm"><Image src="/bin.png" width={25} height={10}></Image><div>Delete</div></div>
            
            
            </Box>
        )}
    
    </SimpleGrid>

   

    </div>
    }
    </>
  );
}

const styles = {
    grid: "flex mt-10 flex-col items-center items-center overflow-y-scroll scrollbar-hide w-auto h-auto",
    image: "h-36 w-36",
}