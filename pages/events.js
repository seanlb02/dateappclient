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

const inter = Inter({ subsets: ['latin'] })

export default function Feed() {
  return (
    <>
    <Head>
    
    </Head>
    <main className="font-roboto text-black flex flex-col h-[100vh] w-[100vw] flex-col">
        <Navdrawer/>
        <Eventbody/>
        <Footer/>

    </main>
    </>
  )
}