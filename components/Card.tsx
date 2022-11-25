import React from 'react';
import {
  Button,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Card as ChakraCard,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { HoverHandlers, TapHandlers, motion } from 'framer-motion';

const MotionCard = motion(ChakraCard);
interface CardInterface {
  image: string;
  alt: string;
  link: string;
  title: string;
  subtitle: string;
  action: string;
  whileHover: HoverHandlers['whileHover'];
  whileTap: TapHandlers['whileTap'];
}
const Card = ({
  image,
  alt,
  link,
  title,
  subtitle,
  action,
  whileHover,
  whileTap,
}: CardInterface) => (
  <MotionCard whileHover={whileHover} whileTap={whileTap} maxW="sm">
    <CardBody>
      <Center>
        <Image
          src={image}
          alt={alt}
          borderRadius="lg"
          w="700px"
          h="300px"
          objectFit="cover"
        />
      </Center>
      <Stack mt="6" spacing="3">
        <Heading size="md">
          <Link as={NextLink} href={link}>
            {title}
          </Link>
        </Heading>
        <Text>{subtitle}</Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter justifyContent="center" alignItems="center">
      <Button as={NextLink} href={link} variant="solid" colorScheme="blue">
        {action}
      </Button>
    </CardFooter>
  </MotionCard>
);

export default Card;
