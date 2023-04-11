import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import Navdrawer from '@/components/Navdrawer'
import Useraccount from '@/components/Useraccount'
import Footer from '@/components/Footer'
import Chatwindow from '@/components/Chatwindow'

function Chat() {
  return (
    <>
    <Head>
    
    </Head>
    <main className="font-roboto text-black flex flex-col h-[100vh] w-[100vw]">
        <Navdrawer/>
        <Chatwindow/>
        <Footer/>

    </main>
    </>
  )
}

export default Chat