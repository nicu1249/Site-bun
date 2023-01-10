import { Box, Flex, HStack, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useColorModeValue, Link, Image, VStack } from '@chakra-ui/react';
import { HamburgerIcon, StarIcon } from '@chakra-ui/icons';
import {FaDiscord} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';


//import Logo from "../Logo.jpg";


export default function Bottom() {

  return (
    <Flex bg='RGB(65, 105, 225)' zIndex={2} h={14} alignItems={'center'} justifyContent={'space-between'}  padding=' 0.7rem 2rem' width='100%' opacity='5'>
    <HStack alignItems={'center'}>
    <HStack spacing={8} alignItems={'left'}>
      <FaDiscord size={30} />
      <BsTwitter size={30} />
    </HStack>
    </HStack>
    <p>ABOUT</p>
    <StarIcon />
  </Flex>
  );
}