import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className="flex h-auto py-4 w-[100vw] justify-center items-center align-center m-auto gap-20">
        <Link href='/explore'><Image src='/search.png' priority height={38} width={38}></Image></Link>
        <Link href='/profile'><Image src='/home.png' priority height={40} width={40}></Image></Link>
        <Link href='/matches'><Image src='/matches.png' priority height={40} width={40}></Image></Link>

    </div>
  )
}

export default Footer