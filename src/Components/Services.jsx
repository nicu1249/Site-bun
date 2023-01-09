import { Image, Box, HStack, Center, Divider, VStack, Flex } from '@chakra-ui/react'
import circle from "../circle.png";

function Services () {
    return(
       <div>
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
    );
}
export default Services;