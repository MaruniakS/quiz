import React, { useEffect, useState } from 'react';
import {
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import exportFromJSON from 'export-from-json';

import firebase from '../services/firebase';

const ResultsList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('results')
      .orderBy('timestamp', 'desc')
      .get()
      .then(({ docs }) => {
        setResults(docs.map(doc => doc.data()));
      })
      .catch(e => alert(`Data was not fetched: ${e}`));
  }, []);

  const handleExport = () => {
    const fileName = 'download';
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({
      data: results,
      fileName,
      exportType,
      fields: ['name', 'character'],
    });
  };

  const calculatedResults = results.reduce((acc, curr) => {
    const currCharacter = curr.character;
    return {
      ...acc,
      [currCharacter]: acc[currCharacter] ? acc[currCharacter] + 1 : 1,
    };
  }, {});

  return (
    <Grid
      maxW="100%"
      width="620px"
      gap={10}
    >
      <GridItem rowSpan={1} colSpan={2}>
        <Heading my={[10, 6]}>Results</Heading>
        <Button mb={6} variant="outline" onClick={handleExport}>
          Export
        </Button>
      </GridItem>
      <GridItem rowStart={2} colSpan={1}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Character</Th>
            </Tr>
          </Thead>
          <Tbody>
            {results.map(({ name, character }) => (
              <Tr key={`${name}:${character}`}>
                <Td>{name}</Td>
                <Td>{character}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </GridItem>
      <GridItem rowStart={2} colStart={2}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Character</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(calculatedResults).map(key => (
              <Tr key={key}>
                <Td>{key}</Td>
                <Td>{calculatedResults[key]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </GridItem>
    </Grid>
  );
};

export default ResultsList;
