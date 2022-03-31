import React, { useCallback, useEffect } from 'react';
import { Flex, Image, Text, chakra, Box } from '@chakra-ui/react';
import Card from '../common/Card';
import WEAPONS from '../../constants/weapons';
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
  const resultWeapon = WEAPONS[resultKey];

  const { description, image, title } = resultWeapon;

  const sendResults = useCallback(() => {
    const db = firebase.firestore();

    db.collection('war_results').add({
      name,
      weapon: title,
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
          <Image src={image} h={125} w={125} m="auto" shadow="md" borderRadius="full" />
          <TextRow title={title} text={description} key="main" />
        </Flex>
      </Card>
    </Box>
  );
};

export default ResultStep;
