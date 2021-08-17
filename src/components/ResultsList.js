import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import exportFromJSON from 'export-from-json';

import firebase from '../services/firebase';

const ResultsList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('results')
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

  return (
    <Box maxW="100%" width="620px">
      <Heading my={[10, 6]}>Results</Heading>
      <Button mb={6} variant="outline" onClick={handleExport}>
        Export
      </Button>
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
    </Box>
  );
};

export default ResultsList;
