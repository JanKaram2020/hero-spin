import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { RandomMovie } from '../types';

const MovieCard = ({
  error,
  isLoading,
  randomMovie,
  changeMovie,
}: {
  isLoading: boolean;
  error: unknown;
  randomMovie: RandomMovie;
  changeMovie?: () => void;
}) => {
  if (error)
    return (
      <Flex>
        <Text>Error happened white fetching your movie. try again later</Text>
      </Flex>
    );
  if (isLoading) {
    return (
      <Center h="50vh">
        <Spinner />
      </Center>
    );
  }
  if (randomMovie?.Title && randomMovie.Plot) {
    return (
      <Flex flexDirection="column" gap="20px">
        <Center>
          <Card
            colorScheme="teal"
            display="flex"
            flexDirection="row"
            overflow="hidden"
            minHeight="400px"
            flexWrap="wrap"
          >
            <Flex
              w="400px"
              p="10px"
              flexDirection="column"
              gap="10px"
              overflowY="auto"
              maxHeight="400px"
              sx={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'green.200',
                  borderRadius: '24px',
                },
              }}
            >
              <Heading as="h2" size="xl">
                {randomMovie.Title} ({randomMovie?.Year?.replaceAll('-', ' ')})
              </Heading>
              {randomMovie?.Plot && randomMovie?.Plot !== 'N/A' ? (
                <Text>{randomMovie?.Plot}</Text>
              ) : null}
              {randomMovie?.Genre && randomMovie?.Genre !== 'N/A' ? (
                <Text>
                  Genre{randomMovie.Genre.includes(',') ? 's' : ''}:{' '}
                  {randomMovie?.Genre}
                </Text>
              ) : null}
              {randomMovie?.Actors && randomMovie?.Actors !== 'N/A' ? (
                <Text>Cast: {randomMovie?.Actors}</Text>
              ) : null}
              {randomMovie?.Director && randomMovie?.Director !== 'N/A' ? (
                <Text>
                  Director{randomMovie.Director.includes(',') ? 's' : ''}:{' '}
                  {randomMovie?.Director}
                </Text>
              ) : null}
              {randomMovie?.Writer && randomMovie?.Writer !== 'N/A' ? (
                <Text>
                  Writer{randomMovie.Writer.includes(',') ? 's' : ''} :{' '}
                  {randomMovie?.Writer}
                </Text>
              ) : null}
              {randomMovie?.Ratings && randomMovie?.Ratings?.length !== 0 ? (
                <Box>
                  <Text>
                    Rating{randomMovie?.Ratings?.length > 1 ? 's' : ''}
                  </Text>
                  {randomMovie?.Ratings?.map((r) => (
                    <Text key={r.Source}>
                      {r.Source} : {r.Value}
                    </Text>
                  ))}
                </Box>
              ) : null}
            </Flex>
            {randomMovie?.Poster !== 'N/A' ? (
              <Image
                src={randomMovie.Poster}
                w="350px"
                maxHeight="400px"
                objectFit="cover"
              />
            ) : null}
          </Card>
        </Center>
        {changeMovie ? (
          <Center>
            <Button colorScheme="teal" onClick={changeMovie}>
              Get Another
            </Button>
          </Center>
        ) : null}
      </Flex>
    );
  }
  return null;
};
export default MovieCard;
