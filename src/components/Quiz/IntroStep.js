import React from 'react';

import Card from '../common/Card';

import { Text, Button, Box, HStack } from '@chakra-ui/react';

const IntroStep = ({ startQuiz }) => {
  const handleSkip = () => (window.location.href = 'https://kindgeek.com');
  return (
    <Box width="420px">
      <Card>
        <Text>
          Привіт Гік!
          <br />
          Саме час готуватися до корпоративу. А щоб було максимально круто та
          драйвово, пропонуємо пройти невеликий тест, котрий покаже, якого
          роду-племені ти Добрий Гік.
          <br />
          <Text fontSize="md" as="em">* Контент є розважального характеру</Text>
        </Text>
      </Card>
      <HStack pt={8} justify="center">
        <Button
          borderRadius="2xl"
          px={16}
          py={2}
          color="white"
          bgColor="#C4C4C4"
          onClick={handleSkip}
        >
          Skip
        </Button>
        <Button
          borderRadius="2xl"
          px={16}
          py={2}
          color="white"
          bgGradient="linear-gradient(180deg, #FF43CA 0%, #FE834E 100%);"
          _hover={{
            bgGradient: 'linear-gradient(180deg, #FE834E 0%, #FF43CA 100%);',
          }}
          onClick={startQuiz}
        >
          Start
        </Button>
      </HStack>
    </Box>
  );
};

export default IntroStep;
