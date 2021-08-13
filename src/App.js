import React, { useState } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import Quiz from './components/Quiz/Quiz';
import Initial from './components/Initial';

import './App.css';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  const startQuiz = () => setShowQuiz(true);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {showQuiz ? (
              <Quiz key="quiz" />
            ) : (
              <Initial key="initial" startQuiz={startQuiz} />
            )}
          </CSSTransitionGroup>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
