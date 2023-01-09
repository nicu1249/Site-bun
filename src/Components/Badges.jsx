import { Image, Box, HStack, Center, Divider } from '@chakra-ui/react'
import circle from "../circle.png";

function Badges () {
    return(
        <div>
        <Center>
        <HStack>
            <Box>
           <Image boxSize="300px" src={circle} />
           </Box>
           <Box>
           <Image boxSize="300px" src={circle} />
           </Box>
           <Box>
           <Image boxSize="300px" src={circle} />
           </Box>
        </HStack>
        </Center>
        <Divider />
        <Box bg="RGB(255, 242, 242)" sx={{ borderRadius: "10%" }}>
            <HStack>
           <Image boxSize="100px" src={circle} />
           <Center>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis at ipsum a pulvinar. Phasellus ultrices diam eget lectus porttitor euismod. Sed nec malesuada ex, a sodales lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ornare justo at ipsum iaculis, sed vehicula velit porttitor. Duis nec vulputate nulla. Nullam dictum efficitur dui, quis molestie mi consequat id. Maecenas at leo quis elit aliquam dignissim vel ultrices turpis. Proin cursus tortor eu massa molestie, quis rutrum arcu hendrerit.
           </p>
           </Center>
           </HStack>
        </Box>
        <Divider />
        <Box bg="RGB(255, 242, 242)">
            <HStack>
           <Image boxSize="100px" src={circle} />
           <Center>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis at ipsum a pulvinar. Phasellus ultrices diam eget lectus porttitor euismod. Sed nec malesuada ex, a sodales lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ornare justo at ipsum iaculis, sed vehicula velit porttitor. Duis nec vulputate nulla. Nullam dictum efficitur dui, quis molestie mi consequat id. Maecenas at leo quis elit aliquam dignissim vel ultrices turpis. Proin cursus tortor eu massa molestie, quis rutrum arcu hendrerit.
           </p>
           </Center>
           </HStack>
        </Box>
        <Divider />
        <Box bg="RGB(255, 242, 242)">
            <HStack>
           <Image boxSize="100px" src={circle} />
           <Center>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis at ipsum a pulvinar. Phasellus ultrices diam eget lectus porttitor euismod. Sed nec malesuada ex, a sodales lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ornare justo at ipsum iaculis, sed vehicula velit porttitor. Duis nec vulputate nulla. Nullam dictum efficitur dui, quis molestie mi consequat id. Maecenas at leo quis elit aliquam dignissim vel ultrices turpis. Proin cursus tortor eu massa molestie, quis rutrum arcu hendrerit.
           </p>
           </Center>
           </HStack>
        </Box>
        <Divider />
        </div>
       
    );
}
export default Badges;