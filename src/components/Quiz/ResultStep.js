import React, { useCallback, useEffect } from 'react';
import { Flex, Image, Text, chakra, Box } from '@chakra-ui/react';
import Card from '../common/Card';
import CHARACTERS from '../../constants/characters';
import firebase from '../../services/firebase';

const TextRow = ({ title, text }) => (
  <Text mt={4}>
    <chakra.span fontWeight="bold">{title}</chakra.span> {text}
  </Text>
);

const ResultStep = ({ answers, name }) => {
  const resultKey = Object.keys(answers).reduce((a, b) =>
    answers[a] > answers[b] ? a : b
  );
  const resultCharacter = CHARACTERS[resultKey];

  const { description, icon, pros, cons, title } = resultCharacter;

  const sendResults = useCallback(() => {
    const db = firebase.firestore();

    db.collection('results').add({
      name,
      character: title,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }, [name, title]);

  useEffect(() => {
    sendResults();
  }, [sendResults]);

  return (
    <Box w="90%" maxW="620px" mb={20}>
      <Card>
        <Flex direction="column">
          <Image src={icon} h={125} w={125} m="auto" />
          <TextRow title={title} text={description} key="main" />
          <TextRow title="Плюси" text={pros} key="pros" />
          <TextRow title="Мінуси" text={cons} key="cons" />
        </Flex>
      </Card>
    </Box>
  );
};

export default ResultStep;
