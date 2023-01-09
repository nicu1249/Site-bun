import {Box, Flex, HStack, Link, IconButton, useDisclosure, useColorModeValue, Stack, Center } from '@chakra-ui/react';
import {StarIcon } from '@chakra-ui/icons';

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={2} alignItems={'center'}>
            <Box>
              <StarIcon />
              </Box>
          </HStack>
          <p>Services</p>
          <p>Badges</p>
          <p>Casino</p>
          <Flex>
              <StarIcon />
          </Flex>
        </Flex>
      </Box>
  );
}