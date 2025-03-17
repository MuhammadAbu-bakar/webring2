import React from "react";
import { Box, Image, Heading, Container, Text } from "@chakra-ui/react";
 
const portfolioCards = [
  {
    id: 1,
    title: "Infinity Initiative",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/works-img-4.png",
  },
  {
    id: 2,
    title: "Terra Nova",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/works-img-3.png",
  },
  {
    id: 3,
    title: "Terra Nova",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/works-img-3.png",
  },
  {
    id: 4,
    title: "Infinity Initiative",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/works-img-4.png",
  },
  {
    id: 5,
    title: "Infinity Initiative",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/works-img-4.png",
  },
  {
    id: 6,
    title: "Terra Nova",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/works-img-3.png",
  },
];
 
function Portfolio() {
  return (
    <div>
      <Box width="100%" height="100%">
        {/* Header Section */}
        <Box position="relative">
          <Image
            src="/portfolioBanner.png"
            width="100%"
            height={{ base: "300px", md: "450px", lg: "543px" }}
            objectFit="cover"
          />
          <Heading
            textAlign="center"
            zIndex="1"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize={{ base: "32px", md: "48px", lg: "64px" }}
            color="white"
          >
            Portfolio
          </Heading>
        </Box>
 
        {/* Cards Section */}
        <Box width="100%" padding={{ base: "40px", md: "80px", lg: "100px" }}>
          <Container maxW="1920px">
            <Box
              display="grid"
              gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap="24px"
            >
              {portfolioCards.map((card) => (
                <Box
                  key={card.id}
                  width="100%"
                  height={{ base: "auto", md: "680px" }}
                  bgColor="#F8F8F6"
                  borderRadius="xl"
                  position="relative"
                  p={4}
                >
                  <Image
                    src={card.image}
                    width="100%"
                    height={{ base: "auto", md: "485px" }}
                    borderRadius="10px"
                  />
                  <Heading fontSize={{ base: "24px", md: "32px", lg: "40px" }} mt={"30px"}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }} fontWeight="normal" mt={"20px"}>
                    {card.description}
                  </Text>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
 
export default Portfolio;