import React from 'react';

import { Input, Image, Box, Flex } from '@chakra-ui/react';
import Card from '../common/Card';
import Question from '../common/Question';

import icon from '../../images/letter-icon.png';

const NameStep = ({ name, onChange, onStart }) => {
  const handleStart = () => {
    if (name.length) onStart();
  };

  return (
    <Box w="90%" maxW="420px" mb={20}>
      <Card>
        <Question>Напиши своє ім'я та прізвище</Question>
        <Flex mt="6" alignItems="center">
          <Input
            borderRadius="3xl"
            border="1px solid"
            borderColor="#FE834E"
            value={name}
            onChange={onChange}
            width="300px"
            _hover={{
              borderColor: '#FF43CA',
            }}
          />
          <Box
            p={3}
            ml={2}
            borderRadius="2xl"
            bgGradient="linear-gradient(180deg, #FF43CA 0%, #FE834E 100%);"
            cursor="pointer"
            onClick={handleStart}
          >
            <Image src={icon} />
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

export default NameStep;
