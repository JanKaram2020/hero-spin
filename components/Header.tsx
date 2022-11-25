import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import ColorModeToggle from 'components/ColorModeToggle';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();
  return (
    <Flex
      as="header"
      px="1vw"
      mt="1.5vh"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex as="nav" gap="20px">
        <Link href="/">Hero Spin</Link>
        {pathname === '/' ? null : (
          <Link href="/random-hero">Random Super Hero Movie</Link>
        )}
        {pathname === '/' ? null : (
          <Link href="/select-hero">Choose Your Super Hero</Link>
        )}
      </Flex>
      <Box>
        <ColorModeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
