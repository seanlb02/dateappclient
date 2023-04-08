import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import { Grid, GridItem } from '@chakra-ui/react'
import Navdrawer from '@/components/Navdrawer'
import ImageGrid from '@/components/Gallery'

const inter = Inter({ subsets: ['latin'] })

export default function Feed() {
  return (
    <>
    <Head>
    
    </Head>
    <main className="flex min-h-screen flex-col">
    <Grid className="min-h-screen overflow-y-hidden"
  templateAreas={{ base:`"header header" "nav main" "nav footer"`,
                   md:`"header header" "nav main" "nav main"`
              }}
  gridTemplateRows={'0.6fr 5fr 0.5fr'}
  gridTemplateColumns={' 0.6fr 4fr'}
  
  gap='0'
  color='blackAlpha.700'

>
  <GridItem pl='2' className="flex  items-center" bg='whiteAlpha.200' area={'header'}>
    <div className="mr-auto"><Navdrawer/></div>
    
    <div className="mr-auto">Logo</div>
  </GridItem>
  <GridItem className="md:flex xxs:hidden flex gap-2  pr-12 pt-12 pl-12" pl='2' bg='pink.300' area={'nav'}>
    <div>icon</div>
    Nav item
    
  </GridItem>
  <GridItem pl='0' overflowY="scroll" maxHeight="80vh" minHeight="640px" className="overflow-y-scroll scrollbar-hide md:w-full xxs:w-[100vw]" bg='green.50' area={'main'}>
    <ImageGrid/>
  </GridItem>
  <GridItem pl='0' className="md:hidden xs:block" bg='white.50' area={'footer'}>
    Footer
  </GridItem>
</Grid>
    </main>
    </>
  )
}