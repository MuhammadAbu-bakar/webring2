import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

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
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      flexWrap={{ base: "wrap", lg: "nowrap" }}
    >
      {services.map((service, index) => (
        <Flex
          key={index}
          w={{ base: "100%", md: "48%", lg: "750px" }}
          h="250px"
          bg="#F8F8F6"
          borderRadius="18px"
          p={{ base: "15px", md: "25px" }}
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
          boxShadow="md"
        >
          <Image
            src={service.logo}
            alt={service.title}
            w={{ base: "100px", md: "200px" }} // Reduced width
            h={{ base: "100px", md: "160px" }} // Reduced height
            borderRadius="12px"
            mb={{ base: "15px", md: "0" }}
            mr={{ md: "20px" }}
          />
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text
              fontFamily="Yantramanav"
              fontWeight="900"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }} // Reduced size
              lineHeight={{ base: "30px", md: "36px", lg: "42px" }}
              color="#26241C"
            >
              {service.title}
            </Text>
            <Text
              fontFamily="Yantramanav"
              fontWeight="400"
              fontSize={{ base: "14px", md: "16px", lg: "18px" }} // Reduced description text
              lineHeight={{ base: "20px", md: "22px", lg: "24px" }}
              color="#4F4B3B"
              mt="8px"
              whiteSpace={"pre-line"}
            >
              {service.description}
            </Text>
            {service.title === "Consulting" && (
              <Button
                mt="15px"
                fontSize="14px" // Reduced button text size
                px="12px"
                py="8px"
                bg="yellow.400"
                color="black"
                _hover={{ bg: "yellow.500" }}
              >
                Learn More
              </Button>
            )}
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default ServicesSection;
