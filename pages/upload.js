import React from "react";

import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import { Grid, GridItem } from '@chakra-ui/react'
import Navdrawer from '@/components/Navdrawer'
import ImageGrid from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Snapshot from '@/components/Snapshot'
import Profilepage from '@/components/Profilepage'
import Eventbody from '@/components/Eventbody'
import Editprofile from '@/components/Edit'
import UploadForm from "@/components/UploadForm";

const inter = Inter({ subsets: ['latin'] })

export default function Upload() {
  return (
    <>
    <Head>
    
    </Head>
    <main className="font-roboto text-black flex flex-col h-[100vh] w-[100vw] flex-col">
        <Navdrawer/>
        <UploadForm/>
        <Footer/>

    </main>
    </>
  )
}