import React from "react";
import { Box, Image, Heading, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const portfolioCards = [
  {
    id: 1,
    title: "Almassa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/almassa.png",
    navigateTo: "https://almassait.com/",
  },
  {
    id: 2,
    title: "MedExpress",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/medexpress.png",
    navigateTo: "https://medexpressbilling.com/",
  },
  {
    id: 3,
    title: "JazPayments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/jazzpay.png",
    navigateTo: "https://jazpayments.com/",
  },
  {
    id: 4,
    title: "My Retro Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/myretro.png",
    navigateTo: "https://www.myretrojersey.com/",
  },
  {
    id: 5,
    title: "JP Logistics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/jplogistics.png",
    navigateTo: "https://jplogistics.ltd/",
  },
  {
    id: 6,
    title: "Sora Schools",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/soraschools.png",
    navigateTo: "https://soraschools.com/",
  },
  {
    id: 7,
    title: "Gemma Foods",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/gemmafoods.png",
    navigateTo: "https://gemmafoods.com/",
  },
  {
    id: 8,
    title: "Motion Grey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/motiongrey.png",
    navigateTo: "https://motiongrey.com/",
  },
];

function Portfolio() {
  const navigate = useNavigate();
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
                  borderRadius="xl"
                  position="relative"
                  p={4}
                  _hover={{
                    transform: "scale(1.02)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                  }}
                  cursor="pointer"
                  onClick={() =>
                    card.navigateTo && window.open(card.navigateTo, "_blank")
                  }
                >
                  <Image
                    src={card.image}
                    width="700px"
                    objectFit="contain"
                    height={{ base: "auto", md: "485px" }}
                    borderRadius="xl"
                  />
                  <Heading fontSize={{ base: "24px", md: "32px", lg: "40px" }}>
                    {card.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "16px", md: "20px", lg: "24px" }}
                    fontWeight="normal"
                    mt={"20px"}
                  >
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
