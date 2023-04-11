import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import { Grid, GridItem } from '@chakra-ui/react'
import Navdrawer from '@/components/Navdrawer'
import ImageGrid from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import Likeslist from '@/components/Likeslist'
import Matchlist from '@/components/Matchlist'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Feed() {
  return (
    <>
    <Head>
    
    </Head>
    <main className="flex min-h-screen flex-col">
    <Grid className="min-h-screen overflow-y-hidden"
  templateAreas={{ base:`"header header" "nav main" "nav footer"`,
                   md:`"header header" "nav main" "nav main"`,
                   lg:`"header header" "nav main" "nav main"`
              }}
  gridTemplateRows={'0.6fr 6fr 0.6fr'}
  gridTemplateColumns={' 0.6fr 4fr'}
  
  gap='0'
  color='blackAlpha.1000'
>
  <GridItem pl='2' className="flex  items-center" bg='whiteAlpha.200' area={'header'}>
    <div className="mr-auto"><Navdrawer/></div>
    
  </GridItem>
  <GridItem className="md:flex xxs:hidden flex-col gap-4 pr-12 pt-12 pl-12" pl='2' bg='gray.100' area={'nav'}>
    <Navbar/>

  </GridItem>
  <GridItem  overflowY="scroll" maxHeight="650px" minHeight="100%" className=" overflow-y-scroll scrollbar-hide md:w-full md:h-full xxs:w-[100vw]" bg='green.50' area={'main'}>
    <Matchlist/>
  </GridItem>
  <GridItem pl='0' className=" xs:flex md:hidden flex items-center justify-center" bg='white.50' area={'footer'}>
    <Footer/>
  </GridItem>
</Grid>
    </main>
    </>
  )
}