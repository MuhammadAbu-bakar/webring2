import { Box, Flex, Image, Text } from "@chakra-ui/react";

const CustomITSection = () => {
  return (
    <Flex
      w="100%"
      maxW="1920px"
      h="auto"
      mx="auto"
      gap={{ base: "40px", xl: "150px" }} // Reduced xl gap to prevent overflow
      px={{ base: "20px", xl: "100px" }}
      py={{ base: "30px", xl: "50px" }}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      {/* Left Text Box */}
      <Box w="100%" maxW="698px">
        <Text
          fontWeight="700"
          fontSize="14px"
          letterSpacing="0.5rem"
          color="#26241C"
        >
          WHO WE ARE
        </Text>
        <Text
          fontWeight="900"
          fontSize={{ base: "20px", xl: "46px" }}
          lineHeight={{ base: "50px", xl: "50px" }}
          color="#FED904"
        >
          Custom IT Solutions for Your Business
        </Text>
        <Text
          fontWeight="400"
          fontSize="14px"
          lineHeight="28px"
          color="#4F4B3B"
          mt="18px"
        >
          At Webring, we are committed to delivering value, innovation, and
          exceptional customer service to our clients, and we strive to be a
          trusted partner in their digital transformation journey.
        </Text>
        <Text
          fontWeight="400"
          fontSize="14px"
          lineHeight="28px"
          color="#4F4B3B"
          mt="18px"
        >
          Introducing WeBring, your innovative digital solutions partner for the
          best IT & business solutions. Our digital solution agency listens
          carefully to your vision and creates tailored, unique strategies to
          elevate your online presence with its creative staffing. With
          dedicated creative staffing, open communication, and timely delivery,
          we go beyond expectations to bring your ideas to life.
        </Text>
      </Box>

      {/* Right Image */}
      <Image
        src="/img.png"
        alt="IT Solutions"
        w="100%"
        maxW="716px"
        h="auto"
        borderRadius="12px"
        objectFit="cover"
        // ml={130}
      />
    </Flex>
  );
};

export default CustomITSection;
