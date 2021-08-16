import React from 'react';
import { Text } from '@chakra-ui/react';

const Question = ({ children }) => (
  <Text
    p={3}
    color="white"
    borderRadius="3xl"
    bgGradient="linear-gradient(90.82deg, #F252DB 0.18%, #FF893B 101.93%);"
  >
    {children}
  </Text>
);

export default Question;
