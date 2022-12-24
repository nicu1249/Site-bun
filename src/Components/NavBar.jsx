import { ReactNode } from 'react';
import { Box, Flex, Avatar, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';


export default function NavBar() {
 
  return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>OccultLabs</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <HamburgerIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Services</MenuItem>
                <MenuDivider />
                <MenuItem>Cazino</MenuItem>
                <MenuDivider />
                <MenuItem>Badges</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>  
        </Box>
  );
}