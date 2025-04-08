import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Add this import

const HeroBanner = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <Box
      w="100%"
      maxW="1920px"
      h={{ base: "500px", md: "916px" }}
      position="relative"
      backgroundImage="url('/pic.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      py={{ base: "50px", md: "0" }}
      px={{ base: "20px", md: "50px" }}
      display="flex"
      alignItems="center"
    >
      <Box
        w={{ base: "100%", md: "970px" }}
        maxW="1200px"
        h={{ base: "auto", md: "439px" }}
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Text and Button Wrapper */}
        <VStack
          align={{ base: "center", md: "start" }}
          spacing={{ base: "20px", md: "40px" }}
          display={{ base: "none", md: "flex" }}
        >
          {/* Empowerment Text */}
          <Text
            fontFamily="Syne"
            fontWeight="600"
            fontSize={{ base: "16px", md: "22px" }}
            lineHeight="22.94px"
            letterSpacing="6.83px"
            color="#FED904"
            textTransform="uppercase"
          >
            Empowerment
          </Text>

          {/* Main Heading */}
          <Text
            fontFamily="Yantramanav"
            fontWeight="500"
            fontSize={{ base: "36px", md: "100px" }}
            lineHeight={{ base: "44px", md: "130px" }}
            letterSpacing="-2.73px"
            color="white"
            maxW="1000px"
          >
            One Stop Solution
          </Text>

          {/* Description */}
          <Text
            fontFamily="DM Sans"
            fontWeight="400"
            fontSize={{ base: "16px", md: "28px" }}
            lineHeight={{ base: "24px", md: "40px" }}
            letterSpacing="0%"
            color="white"
            maxW="900px"
          >
            We are a full-service leading Web & App Development company offering a wide range of digital solutions.
          </Text>

          {/* Call-to-Action Button */}
          <Button
            w={{ base: "160px", md: "200px" }}
            h={{ base: "50px", md: "60px" }}
            borderRadius="5.38px"
            p="15px 28px"
            bg="#FED904"
            color="black"
            fontSize={{ base: "16px", md: "20px" }}
            fontWeight="700"
            _hover={{ bg: "yellow.500" }}
            mt={{ base: "20px", md: "40px" }}
            onClick={() => navigate("/contact-form")} // Updated to use navigate
          >
            GET A QUOTE
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default HeroBanner;