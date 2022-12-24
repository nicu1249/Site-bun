import { AspectRatio } from '@chakra-ui/react'

function Homepage () {
    return(
        // This video will have equal sides
<AspectRatio  maxH='580' maxW='1920' ratio={16/9}>
  <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
    );
}
export default Homepage;