import { Box, Flex, HStack, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useColorModeValue, Link, Image } from '@chakra-ui/react';
import { HamburgerIcon, StarIcon } from '@chakra-ui/icons';
//import Logo from "../Logo.jpg";


export default function Bottom() {

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <StarIcon />
            <StarIcon />
            </Box>
        </HStack>
        <p>ABOUT</p>
        <Flex alignItems={'center'}>
            <StarIcon />
        </Flex>
      </Flex>
    </Box>
  );
}