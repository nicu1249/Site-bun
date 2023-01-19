import { Image, Box, HStack, Center, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Drawer,/* useDisclosure*/ } from '@chakra-ui/react'
import circle from "../circle.png";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

function Services() {
   //const { isOpen, onOpen, onClose } = useDisclosure()

    const ref = useRef(null);
    const { enterCount } = useInViewport(
       ref,
       { rootMargin: "-150px" },
       { disconnectOnLeave: false },
       {}
     );
     return (
        <div>
       <div style = {{height:"100vh"}}>
           <p>SERVICES PAGE</p>
           <p>Turn your ambitions into reality with our broad spectrum of applications and web3 integrations</p>
           <p>Blockchains our team builds on</p>
           <Center>
           <HStack>
           <Image boxSize="100px" src={circle} />
           <Image boxSize="100px" src={circle} />
           <Image boxSize="100px" src={circle} />
           <Image boxSize="100px" src={circle} />
           <Image boxSize="100px" src={circle} />
           </HStack>
           </Center>
           <p>Some examples of service we can provide:</p>
           <p>- Mint Pages</p>
           <p>- Websites</p>
           <p>- Staking platforms</p>
           <p>- Raffle Platforms / Auction Houses</p>
           <p>- Casino Games</p>
           <p>- NFT / Traits Marketplaces </p>
           <p>- Smart Contracts</p>
           <p>- PvP / Interactive Games</p>
           <p>- Custom Bots</p>
           <p>- Custom Dev Work </p>
        </div>
        <Box in={enterCount} ref={ref}>
        <Drawer placement='right' >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='2px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
    
    </div>
        
    );
}
export default Services;