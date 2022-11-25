import React, { ReactNode } from 'react';
import Header from 'components/Header';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <Box as="main" px="1vw" mt="1vh">
      {children}
    </Box>
  </>
);

export default Layout;
