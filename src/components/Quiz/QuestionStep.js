import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import CHARACTERS from '../../constants/characters';
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
        ({ character }) => CHARACTERS[character].category === category
      )
    : answers;

  return (
    <Box w="90%" maxW="420px" mb={20}>
      <Card>
        <Question>{title}</Question>
        <Box mt="6">
          {availableAnswers.map(({ text, character, category }) => (
            <Answer
              onClick={handleAnswer(category || character)}
              key={category || character}
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
