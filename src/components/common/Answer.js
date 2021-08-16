import React from 'react';
import { Text } from '@chakra-ui/react';

const Answer = ({ children, ...rest }) => (
  <Text
    p={3}
    my={3}
    color="black"
    borderRadius="3xl"
    border="1px solid"
    borderColor="rgba(115, 86, 252, 0.76)"
    cursor="pointer"
    _hover={{
      bgGradient:
        'linear-gradient(180deg, rgba(115, 86, 252, 0.76) 0%, rgba(123, 180, 250, 0.76) 100%)',
      color: 'white',
    }}
    {...rest}
  >
    {children}
  </Text>
);

export default Answer;
