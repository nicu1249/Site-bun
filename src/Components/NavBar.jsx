import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, StarIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}S
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack>
            <Box><Link to='/'><StarIcon /></Link> </Box>
          </HStack>
          <Center>
          <HStack spacing={8} alignItems={'center'}>
            <Box>Services</Box>
            <Box>Badges</Box>
            <Box>Casino</Box>
          </HStack>
          </Center>
          <Flex alignItems={'center'}>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}