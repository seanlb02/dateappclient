import Link from "next/link"
import { useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
  } from '@chakra-ui/react'
import Image from "next/image"

import { useRouter } from 'next/router'



export default function Navdrawer() {

    const router = useRouter();
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
          
            return (
              <div className="md:hidden items-center align-center flex ">
                <div className="">
                    <div className=" p-2 pt-3 flex m-auto items-center w-[100vw]">
                        <Image ref={btnRef} priority className="flex mr-auto ml-2" onClick={onOpen} src='/sidemenu.png' width={30} height={30}></Image>
                        <div className="flex w-[100vw] m-auto z-40 justify-center">Logo</div>

                        <Image onClick={() => router.back()} className="flex mr-4 ml-auto" src="/undo.png" height={25} width={25}/>
                    </div>
                </div>
                
                <Drawer
                  isOpen={isOpen}
                  placement='left'
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader className="bg-green-50">logo</DrawerHeader>
                    
          
                    <DrawerBody>
                    <div className="flex h-full flex-col gap-12  pl-2 pt-12 ">
                        <div>
                            <Link href='/explore'><div className="flex gap-3 align-center items-center mb-3 text-2xl"><div><Image src="/search.png" height={28} width={28}/></div><div>Explore</div></div></Link>
                            <Link href='/events'><div  className="flex gap-3 align-center items-center mb-3 pl-10 text-2xl"><div><Image src="/events.png" height={25} width={25}/></div><div>Events</div></div></Link>

                            <Link href='/profile'><div className="flex gap-3 align-center items-center mb-3 text-2xl"><div><Image src="/home.png" height={30} width={30}/></div><div>Profile</div></div></Link>
                            <Link href='/likes'><div  className="flex gap-3 align-center items-center mb-3 text-2xl"><div><Image src="/heart.png" height={32} width={32}/></div><div>Likes</div></div></Link>
                            <Link href='/matches'><div  className="flex gap-3 align-center items-center mb-3 text-2xl"><div><Image src="/matches.png" height={30} width={30}/></div><div>Matches</div></div></Link>
                            <Link href='/settings'><div  className="flex gap-3 align-center items-center mb-3 text-2xl"><div><Image src="/settings.png" height={29} width={29}/></div><div>Settings</div></div></Link>
                        </div>

                        <div className="mt-auto pb-12">
                            <div className="flex gap-4 text-2xl"><div><Image src="/logout.png" height={30} width={30}/></div><div>Log out</div></div>
                        </div>
        </div>
                    </DrawerBody>
          
                    <DrawerFooter>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            )
          }
    
