import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import WEAPONS from '../../constants/weapons';
import QUESTIONS from '../../constants/questions';
import Answer from '../common/Answer';
import Card from '../common/Card';
import Question from '../common/Question';

const QuestionStep = ({ onAnswer, onFinish }) => {
  const [qIndex, setQIndex] = useState(0);
  const [category, setCategory] = useState('');
  const currentQuestion = QUESTIONS[qIndex];

  const handleAnswer = key => () => {
    if (!qIndex) setCategory(key);
    else onAnswer(key);
    if (qIndex === QUESTIONS.length - 1) onFinish();
    setQIndex(qIndex + 1);
  };

  const { title, answers } = currentQuestion;

  const availableAnswers = category
    ? answers.filter(
        ({ weapon }) =>  WEAPONS[weapon].category === category
      )
    : answers;

  return (
    <Box w="90%" maxW="600px" mb={20}>
      <Card>
        <Question>{title}</Question>
        <Box mt="6">
          {availableAnswers.map(({ text, weapon, category }) => (
            <Answer
              onClick={handleAnswer(category || weapon)}
              key={category || weapon}
            >
              {text}
            </Answer>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default QuestionStep;
