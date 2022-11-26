import React from 'react';
import { Button, Box, useColorMode, Image } from '@chakra-ui/react';
import { RiMoonClearFill } from 'react-icons/ri';
import { IoMdSunny } from 'react-icons/io';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === `dark`;
  return (
    <MotionButton
      aria-label={isDark ? `Activate Light mode` : `Activate Dark mode`}
      title={isDark ? `Activate Light mode` : `Activate Dark mode`}
      boxSizing="border-box"
      borderWidth="2px"
      display="grid"
      gridTemplateRows="2fr"
      gridTemplateColumns="1fr"
      onClick={toggleColorMode}
      variant="link"
      w="100px"
      borderRadius="30px"
      overflow="hidden"
    >
      <Image src="/cap-vs-tony.jpg" gridArea="1 / 1 / 2 / 3" zIndex={1} />
      <MotionBox
        zIndex={2}
        gridArea={isDark ? '1 / 1 / 2 / 2' : '1 / 2 / 2 / 3'}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
        layout
        w="50px"
        h="100%"
        backgroundColor={isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)'}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {isDark ? <IoMdSunny size={30} /> : <RiMoonClearFill size={30} />}
      </MotionBox>
    </MotionButton>
  );
};

export default ColorModeToggle;
