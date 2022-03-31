import React from 'react';

import Card from '../common/Card';

import { Text, Button, Box, HStack } from '@chakra-ui/react';

const IntroStep = ({ startQuiz }) => {
  const handleSkip = () => (window.location.href = 'https://kindgeek.com');
  return (
    <Box width="90%" maxW="600px" mb={20}>
      <Card>
        <Text>
          Привіт Гік!
          <br />
          Ми не припиняли працювати ані на день. Проте, перші декілька діб після початку повномасштабного вторгнення були складними, у всієї країни був шок. 
          Незмінною пігулкою від депресії спокон віку в українського народу був гумор, чого тільки вартує наша "мемарня"?! 
          Саме тому, ми підготували невеличкий тест: "Яка ти зброя проти москаля?"
          <br />
          <Text fontSize="md" as="em">
            * Контент є розважального характеру
          </Text>
        </Text>
      </Card>
      <HStack pt={8} justify="center">
        <Button
          borderRadius="2xl"
          px={16}
          py={2}
          color="white"
          bgColor="#005BBB"
          onClick={handleSkip}
        >
          Йой не хочу
        </Button>
        <Button
          borderRadius="2xl"
          px={16}
          py={2}
          color="white"
          
          bgGradient="linear-gradient(180deg, #FFC700 0%, #FFC700 100%);"
          _hover={{
            bgGradient: 'linear-gradient(180deg, #FFC700 0%, #FFC700 100%);',
          }}
          onClick={startQuiz}
        >
          ану, стартуємо
        </Button>
      </HStack>
    </Box>
  );
};

export default IntroStep;
