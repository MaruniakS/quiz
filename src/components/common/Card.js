import React from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';

import logo from '../../images/logo.png';

const Card = ({ children }) => (
  <Box textAlign="left" borderRadius="2xl" boxShadow="md">
    <HStack
      bgColor="#F5F2F2"
      color="#7A7777"
      borderTopRadius="2xl"
      textTransform="uppercase"
      p={4}
    >
      <Image src={logo}></Image>
      <Text fontSize="xl">Kindgeek</Text>
    </HStack>
    <Box bgColor="white" p={4} borderBottomRadius="xl" fontSize="lg">
      {children}
    </Box>
  </Box>
);

export default Card;
