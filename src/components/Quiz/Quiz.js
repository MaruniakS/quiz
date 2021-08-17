import React, { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import NameStep from './NameStep';
import IntroStep from './IntroStep';

import bgImage from '../../images/quiz-bg.png';
import QuestionStep from './QuestionStep';
import ResultStep from './ResultStep';

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [answersState, setAnswersState] = useState({});

  const handleNameChange = e => setName(e.target.value);
  const goForward = () => setStep(step + 1);

  const setAnswer = key => {
    const answerCounter = (answersState[key] || 0) + 1;
    setAnswersState({
      ...answersState,
      [key]: answerCounter,
    });
  };

  const renderStep = () => {
    if (!step) return <IntroStep startQuiz={goForward} />;
    if (step === 1)
      return (
        <NameStep name={name} onChange={handleNameChange} onStart={goForward} />
      );
    if (step === 2)
      return <QuestionStep onAnswer={setAnswer} onFinish={goForward} />;
    return <ResultStep answers={answersState} name={name} />;
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
      <Center maxWidth="100%" m="auto" pt={40}>
        {renderStep()}
      </Center>
    </Box>
  );
};

export default Quiz;
