import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import { Grid, GridItem } from '@chakra-ui/react'
import Navdrawer from '@/components/Navdrawer'
import ImageGrid from '@/components/Gallery'
import Profilepage from '@/components/Profilepage'
import Snapshot from '@/components/Snapshot'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Profile() {
  return (
    <>
    <Head>
    
    </Head>
    <main className="flex min-h-screen flex-col">
    <Grid className="min-h-screen overflow-y-hidden"
  templateAreas={{ base:`"header header" "nav main" "nav main"`,
                   md:`"header header" "nav main" "nav main"`,
                   lg:`"header header" "nav main" "nav main"`
              }}
  gridTemplateRows={'0.6fr 9fr '}
  gridTemplateColumns={' 0.6fr 4fr'}
  
  gap='0'
  color='blackAlpha.700'

>
  <GridItem pl='2' className="flex  items-center" bg='whiteAlpha.200' area={'header'}>
    <div className="mr-auto"><Navdrawer/></div>
    
    <div className="mr-auto">Logo</div>
  </GridItem>
  <GridItem className="md:flex xxs:hidden h-full flex-col gap-4 pr-12 pt-12 pl-12" pl='2' bg='gray.100' area={'nav'}>
    <Navbar/>
  </GridItem>
  <GridItem  maxHeight="650px" minHeight="" className=" md:w-full md:h-full xxs:w-[100vw]" bg='green.50' area={'main'}>
    <Snapshot/>
    <Profilepage/>
  </GridItem>
  {/* <GridItem pl='0' className=" xs:flex md:hidden flex items-center justify-center" bg='white.50' area={'footer'}>
    <div>Footer</div>
  </GridItem> */}
</Grid>
    </main>
    </>
  )
}