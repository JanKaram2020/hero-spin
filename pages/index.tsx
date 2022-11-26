import { Center } from '@chakra-ui/react';
import Card from 'components/Card';

export default function Home() {
  return (
    <Center gap="100px" flexWrap="wrap">
      <Card
        whileHover={{ scale: 1.05, rotate: 10 }}
        whileTap={{
          scale: 0.95,
          rotate: -3,
        }}
        link="/random-hero"
        title="Pick a random movie"
        subtitle="let us choose you a random superhero movie you can enjoy"
        action="Pick a movie"
        image="/random-superhero.png"
        alt="superhero cards with one with question mark"
      />
      <Card
        whileHover={{ scale: 1.05, rotate: -10 }}
        whileTap={{
          scale: 0.95,
          rotate: 3,
        }}
        link="/select-hero"
        title="Choose a Hero"
        subtitle="choose a hero and we will choose a movie with the hero in it"
        action="Select a hero"
        image="/heros.png"
        alt="marvel superheros"
      />
    </Center>
  );
}
