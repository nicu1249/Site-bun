import { Grid, GridItem, VStack, StackDivider, Box, Flex, HStack, ScaleFade, Center, Image, Button, Heading, Link} from '@chakra-ui/react'
import BG from "../BG.png";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

function Homepage() {
 const ref = useRef(null);
 const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-150px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <div style={{ backgroundImage: `url(${BG})` }}>
    <div>
      <div style = {{height:"100vh"}}>
      <Center position= 'absolute' top='20%' left= '32%' >
    <VStack>
      <Heading textColor='white'>The No. 1 service provider across</Heading>
      <Heading textColor='white'>all blockchains</Heading>
  <HStack>
    <Box><p align='center'><Button>Request a service</Button></p></Box>
    <Box><p align='center'><Link style={{ textDecoration: 'none' }} href='https://discord.gg/occultlabs' isExternal><Button>Join our Community </Button></Link></p></Box>
  </HStack>
  </VStack>
  </Center>
  </div>

      <ScaleFade initialScale={0.5} in={enterCount > 0}>
      <Box
        
          cursor="pointer"
          overflow="hidden"
          ref={ref}
        >
  <Center>
<HStack sx={{ borderRadius: "10%" }}>
<Grid
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(2, 1fr)'
  gap={4}
>

  <GridItem sx={{ borderRadius: "15%" }} boxSize="300px" colSpan={1} bg='tomato'> <p>We strive for quality</p><p>Our state of the art applications and web3 integrations are individually shaped to your needs, made to offer you and your users the most aesthetic pleasing and interactive platforms. Everything is designed to your wishes.
</p></GridItem>

  <GridItem sx={{ borderRadius: "15%" }} boxSize="600px" rowSpan={2} colSpan={1}  bg='tomato' ><p>Endless possibilities</p><p>We encourage innovation. Aside from our basic services listed we also do custom dev-work, shaping your dreams and ambitions into platforms your users can enjoy, and bring utility to your project like no one has ever done before. What you can imagine, we can build. </p> </GridItem>
  <GridItem sx={{ borderRadius: "15%" }} boxSize="300px" rowSpan={1} bg='tomato' > <p>100% On-chain</p><p>All our builds are 100% On-chain with our smart contracts being custom made per-request, offering you a fun and safe environment you can put at your users disposal.</p></GridItem>

</Grid>
</HStack>
</Center>
</Box>
</ScaleFade>
  </div>
  </div>
  );
}
export default Homepage;