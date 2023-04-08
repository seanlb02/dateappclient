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





export default function Navdrawer() {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
          
            return (
              <div className="md:hidden">
                <div className="ml-auto">
                    <Button  ref={btnRef} colorScheme='teal' onClick={onOpen}>
                        Open
                    </Button>
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
                    <DrawerHeader><div>Logo</div></DrawerHeader>
          
                    <DrawerBody>
                      <div>icon</div>
                    </DrawerBody>
          
                    <DrawerFooter>
                      <Button variant='outline' mr={3} onClick={onClose}>
                        Log out
                      </Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            )
          }
    
