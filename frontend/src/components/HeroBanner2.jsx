import React from "react";
import { Box, Text } from "@chakra-ui/react";

const HeroBanner2 = () => {
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
      <Box position="relative" px={4}>
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
      </Box>
    </Box>
  );
};

export default HeroBanner2;
