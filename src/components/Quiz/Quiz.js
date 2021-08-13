import React, { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import NameStep from './NameStep';
import IntroStep from './IntroStep';

import bgImage from '../../images/quiz-bg.png';

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');

  const handleNameChange = e => setName(e.target.value);
  const goForward = () => setStep(step + 1);

  const renderStep = () => {
    if (!step) return <IntroStep startQuiz={goForward} />;
    if (step === 1)
      return (
        <NameStep name={name} onChange={handleNameChange} onStart={goForward} />
      );
    return <h1>{name}</h1>;
  };

  return (
    <Box
      bgImage={bgImage}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="100%"
      height="100vh"
      textAlign="center"
    >
      <Center maxWidth="100%" width="420px" m="auto" pt={60}>
        {renderStep()}
      </Center>
    </Box>
  );
};

export default Quiz;
