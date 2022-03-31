import React from 'react';
import { Box, HStack, Image } from '@chakra-ui/react';

import logo from '../../images/logo.svg';

const Card = ({ children }) => (
  <Box textAlign="left" borderRadius="2xl" boxShadow="md" w="100%">
    <HStack
      bgColor="#F5F2F2"
      color="#7A7777"
      borderTopRadius="2xl"
      textTransform="uppercase"
      p={4}
    >
      <Image src={logo}></Image>
    </HStack>
    <Box bgColor="white" p={4} borderBottomRadius="xl" fontSize="lg">
      {children}
    </Box>
  </Box>
);

export default Card;
