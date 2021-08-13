import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Text,
  Center,
  Image,
  keyframes,
  usePrefersReducedMotion,
  Fade,
} from '@chakra-ui/react';

import bgImage from '../images/intro-bg.png';
import rockFace from '../images/rock-face.png';
import brandName from '../images/brand-name.png';
import { END_COUNTER, START_COUNTER } from '../constants/counter';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(10deg)
    }

    75% {
        transform: rotate(-10deg)
    }

    100% {
        transform: rotate(0deg);
    }
`;

const Initial = ({ startQuiz }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${rotate} infinite 5s linear`;

  const [counter, setCounter] = useState(START_COUNTER + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const triggerStartQuiz = useCallback(() => startQuiz(), [startQuiz]);

  useEffect(() => {
    if (counter === END_COUNTER) triggerStartQuiz();
  }, [counter, triggerStartQuiz]);

  const showCounter = counter <= START_COUNTER;

  return (
    <Box
      bgImage={bgImage}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="100%"
    >
      <Center h="100vh">
        <Box
          position="relative"
          fontSize="8xl"
          fontWeight="extrabold"
          zIndex="10"
          letterSpacing="wider"
          _before={{
            content: `""`,
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            bg: 'white',
            zIndex: '-1',
            transform: 'rotate(-10deg)',
          }}
        >
          <Fade in={!showCounter}>
            <Text>Company day</Text>
          </Fade>

          <Image src={brandName} position="absolute" top="230" left="50" />
          <Image
            src={rockFace}
            animation={animation}
            position="absolute"
            right="0"
            left="0"
            top="50%"
            margin="auto"
          />
          <Fade in={showCounter}>
            <Text
              position="absolute"
              left="0"
              top="0"
              textAlign="center"
              width="100%"
            >
              {counter}
            </Text>
          </Fade>
        </Box>
      </Center>
    </Box>
  );
};

export default Initial;
