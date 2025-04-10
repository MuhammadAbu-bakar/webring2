import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

const steps = [
  { title: "Brainstorming Ideas", icon: "/brainstorm.png", position: [0, 0], dotPosition: "none" },
  { title: "Product Design", icon: "/design.png", position: [1, 0], dotPosition: "left" },
  { title: "Front-End Development", icon: "/frontend.png", position: [2, 0], dotPosition: "left" },
  { title: "SEO Optimization", icon: "/seo.png", position: [0.5, 1], dotPosition: "right" },
  { title: "Back-End Development", icon: "/backend.png", position: [1.5, 1], dotPosition: "right" },
  { title: "Digital Marketing", icon: "/marketing.png", position: [1, 2], dotPosition: "left" },
];

const OurModelSection = () => {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <Flex
      w="100%"
      h="auto"
      px={{ base: "20px", xl: "100px" }}
      py={{ base: "30px", xl: "50px" }}
      alignItems="center"
      flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
      justifyContent="space-between"
      bg="#14140F"
      borderRadius="10px"
      gap={"5%"}
    >
      <Box
        textAlign={{ base: "center", md: "center", lg: "left", xl: "left" }}
        mb={10}
        alignSelf="flex-start"
        width={{ base: "100%", md: "100%", lg: "20%", xl: "25%" }}
      >
        <Text fontSize="16px" fontWeight="700" letterSpacing="5px" color="#FED904">
          OUR MODEL
        </Text>
        <Text fontSize={{ base: "32px", md: "40px", xl: "54px" }} fontWeight="900" color="#F8F8F6">
          How we do
        </Text>
        <Text
          fontSize={{ base: "16px", md: "18px", xl: "22px" }}
          fontWeight="400"
          opacity="0.8"
          color="#F8F8F6"
          pt={4}
        >
          Save time and money with our powerful method.
        </Text>
      </Box>

      <Box position="relative" w={{ base: "100%", md: "100%", lg: "80%", xl: "75%" }} h={{ base: "auto", md: "400px" }}>
        {isMobile ? (
          <Flex flexDirection="column" alignItems="center" gap="50px" mb="20px" position="relative">
            {steps.map((step, index) => (
              <Flex
                key={index}
                w={{ base: "90%", md: "65%" }}
                h="70px"
                bg="white"
                borderRadius="10px"
                alignItems="center"
                justifyContent="flex-start"
                p="20px"
                boxShadow="lg"
                position="relative"
                zIndex={1}
              >
                <Flex
                  w="53px"
                  h="53px"
                  bg="#FFFBE6"
                  borderRadius="10px"
                  alignItems="center"
                  justifyContent="center"
                  mr="20px"
                  overflow="hidden"
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    maxW="36px"
                    maxH="30px"
                    objectFit="contain"
                  />
                </Flex>

                {index > 0 && (
                  <Box
                    width="18px"
                    height="18px"
                    bgColor="yellow.400"
                    border="4px solid white"
                    borderRadius="50%"
                    position="absolute"
                    left="50%"
                    transform="translateX(-50%)"
                    top="-9px"
                    zIndex={2}
                  />
                )}

                <Text fontSize="16px" fontWeight="500" color="#26241C">{step.title}</Text>
              </Flex>
            ))}

            <Box
              position="absolute"
              width="2px"
              height="100%"
              left="50%"
              transform="translateX(-50%)"
              top="0"
              borderLeft="2px dashed white"
              zIndex={0}
            />
          </Flex>
        ) : (
          <>
            {steps.map((step, index) => (
              <Flex
                key={index}
                position="absolute"
                top={{ base: `calc(${step.position[1]} * 100px)`, md: `${step.position[1] * 150}px` }}
                left={{ base: `calc(${step.position[0]} * 40vw)`, md: `${step.position[0] * 36}%`, lg: `${step.position[0] * 40}%` }}
                w={{ base: "90%", md: "140px", lg: "160px", xl: "180px", "2xl": "200px" }}
                h={{ base: "90%", md: "50px", lg: "60px", xl: "70px", "2xl": "80px" }}
                bg="white"
                borderRadius="10px"
                alignItems="center"
                justifyContent="flex-start"
                p="20px"
                boxShadow="lg"
                zIndex={1}
              >
                {step.dotPosition === "left" && (
                  <Box
                    width="18px"
                    height="18px"
                    bgColor="yellow.400"
                    border="4px solid white"
                    borderRadius="50%"
                    position="absolute"
                    left="-8px"
                  />
                )}

                <Flex
                  w={{ base: "90%", md: "25px", lg: "70px", "2xl": "50px" }}
                  h={{ base: "90%", md: "35px", lg: "40px", xl: "40px", "2xl": "50px" }}
                  bg="#FFFBE6"
                  borderRadius="10px"
                  alignItems="center"
                  justifyContent="center"
                  mr="20px"
                  overflow="hidden"
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    maxW="36px"
                    maxH="30px"
                    objectFit="contain"
                  />
                </Flex>

                <Text fontSize={{ lg: "12px", xl: "14px", "2xl": "16px" }} fontWeight="500" color="#26241C">
                  {step.title}
                </Text>

                {step.dotPosition === "right" && (
                  <Box
                    width="18px"
                    height="18px"
                    bgColor="yellow.400"
                    border="4px solid white"
                    borderRadius="50%"
                    position="absolute"
                    right="-10px"
                  />
                )}
              </Flex>
            ))}

            <Box
              position="absolute"
              top={{ md: "26px", lg: "32px", "2xl": "38px" }}
              left={{ md: "15%", lg: "17%", xl: "18%", "2xl": "15%" }}
              width={{ md: "80%", lg: "84%", xl: "85%", "2xl": "90%" }}
              height="37.63%"
              borderBottom="2px dashed white"
              borderTop="2px dashed white"
              borderRight="2px dashed white"
              borderRightRadius="25px"
            />

            <Box
              position="absolute"
              top={{ md: "176px", lg: "181px", "2xl": "187px" }}
              left={{ base: "5vw", md: "10%", lg: "9%", xl: "10.25%" }}
              width={{ base: "35vw", md: "33%", lg: "33%", xl: "32%" }}
              height={{ base: "25vh", md: "38%" }}
              borderBottom="2px dashed white"
              borderTop="2px dashed white"
              borderLeft="2px dashed white"
              borderLeftRadius="25px"
            />
          </>
        )}
      </Box>
    </Flex>
  );
};

export default OurModelSection;
