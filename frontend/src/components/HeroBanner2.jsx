import React, { useRef, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";

const MotionBox = motion(Box);

const HeroBanner2 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <Box
      width="100%"
      height={{ base: "300px", md: "400px", lg: "543px" }}
      backgroundImage="url('/banner2.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <MotionBox
        ref={ref}
        px={4}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
      >
        <Text
          fontFamily="Yantramanav"
          fontWeight="700"
          fontSize={{ base: "42px", md: "48px", lg: "96px" }}
          lineHeight={{ base: "100%", md: "110%", lg: "120%" }}
          color="#F6F8F8"
          textAlign="center"
        >
          Services
        </Text>
      </MotionBox>
    </Box>
  );
};

export default HeroBanner2;
