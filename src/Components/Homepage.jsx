import { Grid, GridItem, Stack, AspectRatio, VStack,StackDivider, Box, Flex, HStack, Spacer } from '@chakra-ui/react'

function Homepage() {
  return (

  <Stack>
    <div>
<AspectRatio  maxH='580' maxW='1920' ratio={16/9}>
  <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
 </div>
 <Spacer />
 <Spacer />
<div>
  <p align='center'>CEVA TEXT SAU TITLU</p>
 
</div>
<Spacer />
<Spacer />
<div>
<Grid
  h='400px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(2, 1fr)'
  gap={4}
>
  <GridItem colSpan={1} bg='tomato'> <p align='center'>Hello</p></GridItem>
  <GridItem rowSpan={2} colSpan={1}  bg='tomato' ><p align='center'>Hello</p> </GridItem>
  <GridItem rowSpan={1} bg='tomato' > <p align='center'>Hello</p></GridItem>

</Grid>
  </div>
  </Stack>
  );
}
export default Homepage;