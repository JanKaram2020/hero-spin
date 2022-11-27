import React from 'react';
import { Grid, Center, Image, Link, Card } from '@chakra-ui/react';
import NextLink from 'next/link';
import { heroes } from '../heroes';

const SelectHero = () => (
  <div>
    <Grid
      gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
      gap="20px"
      justifyItems="center"
    >
      {heroes.map((h) => (
        <Card overflowX="hidden">
          <Link as={NextLink} href={`/random-hero/${h.name}`}>
            <Image
              src={h.image}
              width="200px"
              height="150px"
              objectFit="cover"
              objectPosition="center top"
            />
          </Link>
          <Link as={NextLink} href={`/random-hero/${h.name}`}>
            <Center m="1vh">{h.name}</Center>
          </Link>
        </Card>
      ))}
    </Grid>
  </div>
);

export default SelectHero;
