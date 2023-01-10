import { Box, Flex, HStack, Link, Text} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export default function Simple() {

  return (
    <Flex bg='RGB(65, 105, 225)' zIndex={2} h={14} alignItems={'center'} justifyContent={'space-between'} position='fixed' padding=' 0.7rem 2rem' width='100%' opacity='5'>
      <HStack spacing={2} alignItems={'center'}>
        <Box>
          <StarIcon />
        </Box>
      </HStack>
      <Text as='b' fontSize='xl' >Services</Text>
      <Text as='b' fontSize='xl' >Badges</Text>
      <Text as='b' fontSize='xl' >Casino</Text>
      <StarIcon />
    </Flex>
  );
}