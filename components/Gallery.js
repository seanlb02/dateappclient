import { StylesProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
// simport "react-image-lightbox/style.css";
import Image from "next/image";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


import { SimpleGrid, Box } from '@chakra-ui/react'

export default function ImageGrid() {

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const [open, setOpen] = useState(false);
const [imageurl, SetImageurl] = useState("");
const url = "/next.svg"

    return (
    <div className={styles.grid}>
        <SimpleGrid ChildWidth='auto' className="p-3" minChildWidth="280px" spacing='60px'>
  
  

        {arr.map(el => 
            
            <><Box onClick={() => setOpen(true)} className="relative border-2" bg='white' height='350px'><Image src={url} fill sizes='auto'></Image><div className="absolute  w-full rounded-b-2xl -bottom-10 h-12 left-0 right-0 p-3 bg-white">name</div></Box></>
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
    grid: "w-full h-full",
    image: "h-36 w-36",
}