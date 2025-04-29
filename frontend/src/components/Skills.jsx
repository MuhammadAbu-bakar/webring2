import {
  Box,
  Flex,
  Grid,
  Text,
  VStack,
  HStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const skills = [
  {
    image: "/web-development.png",
    title: "Web Development",
    description:
      "Delivering high-performance web solutions with tailored design and functionality.",
    navigateTo: "/web-developmentt",
  },
  {
    image: "/app-development.png",
    title: "App Development",
    description:
      "Transforming your vision into optimized Android and iOS apps with a focus on performance and user experience.",
    navigateTo: "/app-development",
  },
  {
    image: "/vector (1).png",
    title: "Graphic Designing",
    description:
      "Creating innovative designs and digital products that deliver exceptional user experiences.",
    navigateTo: "/graphic-designing",
  },
  {
    image: "/social-media-marketing.png",
    title: "Social Media Marketing",
    description: "Grow Your Business Through Our Marketing Digital Agency.",
    navigateTo: "/social-media",
  },
  {
    image: "/content-writing.png",
    title: "Content Writing",
    description:
      "Enhancing your brand with premium content that captivates and inspires your audience.",
    navigateTo: "/content-writing",
  },
  {
    image: "/performance-marketing.png",
    title: "Performance Marketing",
    description:
      "Driving results with data-driven strategies to maximize ROI and boost your brand's digital presence.",
    navigateTo: "/perform-market",
  },
  {
    image: "/shopify-store.png",
    title: "Shopify Store Development",
    description:
      "Building high-performance, visually appealing Shopify stores that drive conversions and enhance user experience.",
    navigateTo: "/shopify-development",
  },
];

const SkillCard = ({ image, title, description, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <Box
      bg="#F8F8F6"
      borderRadius="15px"
      p={{ base: "30px", md: "40px", xl: "50px" }}
      w="100%"
      maxW="100%"
      h="auto"
      minH={{ base: "auto", md: "390px" }}
      onClick={() => navigateTo && navigate(navigateTo)}
      cursor={navigateTo ? "pointer" : "default"}
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <VStack align={{ base: "center", md: "flex-start" }} spacing="25px">
        <Image src={image} alt={title} boxSize="80px" objectFit="contain" />
        <Text
          fontSize={{ base: "22px", md: "26px", xl: "30px" }}
          fontWeight="700"
          color="#26241C"
        >
          {title}
        </Text>
        <Text
          fontSize={{ base: "16px", md: "18px", xl: "20px" }}
          fontWeight="400"
          lineHeight={{ base: "24px", md: "26px", xl: "28.8px" }}
          color="#26241C"
        >
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

const ServicesSection = () => {
  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    md: "repeat(2, 1fr)",
    xl: "repeat(3, 1fr)",
    "2xl": "repeat(3, 1fr)", // ultra-wide screens
  });

  return (
    <Box
      maxW="100%"
      w="full"
      px={{ base: "20px", md: "50px", xl: "100px", "2xl": "180px" }}
      py={{ base: "30px", md: "50px", xl: "80px" }}
    >
      <VStack spacing={{ base: "40px", md: "60px", xl: "80px" }} align="start">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justify="space-between"
          align="start"
          w="full"
          gap={{ base: 6, md: 10 }}
        >
          <Box maxW="700px">
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="700"
              letterSpacing="0.5rem"
              color="#26241C"
              mb="10px"
            >
              WHAT WE’RE OFFERING
            </Text>
            <Text
              fontSize={{ base: "32px", md: "40px", xl: "48px" }}
              fontWeight="900"
              lineHeight={{ base: "40px", md: "54px", xl: "68px" }}
              color="#FED904"
              fontFamily="inherit"
            >
              Dealing in all professional IT services.
            </Text>
          </Box>

          <Box
            mt={{ base: "0", md: "20px" }}
            w={{ base: "100%", md: "60%", xl: "698px" }}
          >
            <Text
              fontSize={{ base: "14px", md: "18px", xl: "20px" }}
              fontWeight="400"
              lineHeight="28px"
              color="#4F4B3B"
            >
              One fundamental aspect of IT services is infrastructure
              management. This involves the design, implementation, and
              maintenance of the hardware, software, networks, and servers.
            </Text>
          </Box>
        </Flex>

        <Grid
          templateColumns={gridTemplateColumns}
          gap={{ base: "20px", md: "30px", xl: "40px" }}
          w="full"
          mt={{ base: "30px", md: "60px" }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default ServicesSection;
