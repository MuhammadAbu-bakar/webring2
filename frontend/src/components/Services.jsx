import { Box, Flex, Image, Text, Button, VStack, HStack } from "@chakra-ui/react";

const services = [
  {
    title: "Development",
    description:
      "We are a full-service leading Web & App\n Development company offering a wide\n range of digital solutions.",
    logo: "/webring.png",
  },
  {
    title: "Consulting",
    description:
      "We are a full-service leading Microsoft\n Consulting Services company offering a\n wide range of digital solutions.",
    logo: "/asture.png",
  },
];

const ServicesSection = () => {
  return (
    <Flex
      w="100%"
      maxW="1920px"
      mx="auto"
      gap={{ base: "20px", md: "40px", xl: "80px" }}
      px={{ base: "15px", md: "40px", xl: "80px" }}
      py={{ base: "20px", md: "30px", xl: "40px" }}
      flexDirection={{ base: "column", lg: "row" }} // Column in mobile, row in desktop
      justifyContent="center"
      alignItems="center"
    >
      {services.map((service, index) => (
        <Flex
          key={index}
          w={{ base: "100%", md: "48%", lg: "750px" }}
          h="auto"
          bg="#F8F8F6"
          borderRadius="18px"
          p={{ base: "15px", md: "25px" }}
          boxShadow="md"
          alignItems="center"
        >
          <HStack spacing={{ base: "22px", md: "30px" }} align="center">
            <Image
              src={service.logo}
              alt={service.title}
              w={{ base: "80px", md: "120px", lg: "220px" }} // Adjust logo size
              h="auto"
              borderRadius="12px"
              mr={{ base: "20px", md: "40px" }}
            />
            <VStack align="start" spacing="10px">
              <Text
                fontFamily="Yantramanav"
                fontWeight="900"
                fontSize={{ base: "18px", md: "24px", lg: "40px" }} // Responsive heading size
                color="#26241C"
              >
                {service.title}
              </Text>
              <Text
                fontFamily="Yantramanav"
                fontWeight="500"
                fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                color="#4F4B3B"
                whiteSpace="pre-line"
              >
                {service.description}
              </Text>
              {service.title === "Consulting" && (
                <Button
                  mt="10px"
                  fontSize={{ base: "12px", md: "14px" }} // Responsive button text
                  px={{ base: "10px", md: "12px" }}
                  py={{ base: "6px", md: "8px" }}
                  bg="yellow.400"
                  color="black"
                  _hover={{ bg: "yellow.500" }}
                >
                  Learn More
                </Button>
              )}
            </VStack>
          </HStack>
        </Flex>
      ))}
    </Flex>
  );
};

export default ServicesSection;
