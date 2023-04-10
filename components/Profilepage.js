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

        <SimpleGrid ChildWidth='auto' className="p-3" minChildWidth="280px" spacing='60px'>
  
  
        {/* <><Box onClick={() => setCamera(true)} className="relative border-2 object-contain" bg='white' height='350px'><Image className="object-contain p-20" src='/camera.png' fill sizes='auto'></Image></Box></> */}

        {arr.map(el => 
            
            <><Box  className="relative h-fit" bg='white' height='350px'><Image className="object-cover" src={imageurl} fill></Image><div className=" absolute w-full rounded-b-2xl -bottom-10 h-12 left-0 right-0 p-3 bg-white text-2xl"><div className="flex gap-2 text-md"><Image src="/bin.png" width={25} height={10}></Image><div>Delete</div></div></div></Box></>
        )}
    
    </SimpleGrid>

   

    </div>
    }
    </>
  );
}

const styles = {
    grid: " overflow-y-scroll scrollbar-hide w-full h-full",
    image: "h-36 w-36",
}