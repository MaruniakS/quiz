import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import Quiz from './components/Quiz/Quiz';
import Initial from './components/Initial';
import ResultsList from './components/ResultsList';

const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh">
        <Router>
          <Switch>
            <Route exact path="/" component={Initial} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/results" component={ResultsList} />
          </Switch>
        </Router>
      </Grid>
    </Box>
  </ChakraProvider>
);

export default App;
