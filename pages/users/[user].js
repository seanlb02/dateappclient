import React from 'react'
import Head from 'next/head'
import Navdrawer from '@/components/Navdrawer'
import Footer from '@/components/Footer'
import Useraccount from '@/components/Useraccount'

function Account() {
  return (
    <>
    <Head>
    
    </Head>
    <main className="font-roboto text-black flex flex-col h-[100vh] w-[100vw]">
        <Navdrawer/>
        <Useraccount/>
        <Footer/>

    </main>
    </>
  )
}

export default Account