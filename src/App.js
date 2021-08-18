import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Quiz from './components/Quiz/Quiz';
import Initial from './components/Initial';
import ResultsList from './components/ResultsList';

const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Router>
        <Switch>
          <Route exact path="/" component={Initial} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/results" component={ResultsList} />
        </Switch>
      </Router>
    </Box>
  </ChakraProvider>
);

export default App;
