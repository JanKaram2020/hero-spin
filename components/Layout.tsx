import React, { ReactNode } from 'react';
import Header from 'components/Header';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Layout = ({ children }: { children: ReactNode }) => {
  const { route } = useRouter();
  return (
    <>
      <Header />
      <motion.div
        initial="initial"
        animate="animate"
        key={route}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <Box as="main" px="1vw" mt="1vh">
          {children}
        </Box>
      </motion.div>
    </>
  );
};

export default Layout;
