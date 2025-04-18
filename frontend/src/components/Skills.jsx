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
  // { image: "/coding.png", title: "Game Development", description: "Bringing your gaming concepts to life with expert developers, delivering immersive, console-ready experiences.", navigateTo: "/game-development" },
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
  // { image: "/web-consultancy.png", title: "Web Development Consultancy", description: "Delivering expert guidance and solutions to optimize web development and achieve your business goals.", navigateTo: "/web-consultancy" },
];

const SkillCard = ({ image, title, description, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <Box
      bg="#F8F8F6"
      borderRadius="15px"
      p="50px"
      w="100%"
      maxW={{ base: "100%", md: "554px" }}
      h="390px"
      onClick={() => navigateTo && navigate(navigateTo)}
      cursor={navigateTo ? "pointer" : "default"}
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <VStack align="flex-start" spacing="25px">
        <Image src={image} alt={title} boxSize="80px" objectFit="contain" />
        <Text fontSize="30px" fontWeight="700" color="#26241C">
          {title}
        </Text>
        <Text
          fontSize={{ base: "18px", md: "24px" }}
          fontWeight="400"
          lineHeight="28.8px"
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
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  });

  return (
    <Box
      maxW="1920px"
      w="100%"
      m="auto"
      px={{ base: "20px", md: "50px", xl: "100px" }}
      py={{ base: "30px", md: "50px" }}
    >
      <VStack
        spacing={{ base: "40px", md: "80px" }}
        align="flex-start"
        w="full"
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "flex-start" }} // Align top on all screens
          w="full"
          gap={{ base: 6, md: 0 }}
        >
          {/* Left Side (Heading) */}
          <Box maxW="700px">
            <Text
              fontSize="16px"
              fontWeight="700"
              letterSpacing="0.5rem"
              color="#26241C"
              mb="10px"
            >
              WHAT WE’RE OFFERING
            </Text>
            <Text
              fontSize={{ base: "40px", md: "48px" }}
              fontWeight="900"
              lineHeight={{ base: "40px", md: "68px" }}
              color="#FED904"
              fontFamily="inherit"
            >
              Dealing in all professional IT services.
            </Text>
          </Box>

          {/* Right Side (Text) */}
          <Box
            mt={{ base: "0", md: "-20px" }}
            w={{ base: "100%", md: "698px" }}
            ml={{ base: "0", md: "40px" }} // Adjust margin on desktop
          >
            <Text
              fontSize={{ base: "16px", md: "20px" }}
              fontWeight="400"
              lineHeight="28px"
              color="#4F4B3B"
              mt={{ base: "10px", md: "65px" }} // Move up slightly on mobile
              ml={{ base: "0", md: "40px" }} // Align left on mobile, keep margin on desktop
            >
              One fundamental aspect of IT services is infrastructure
              management. This involves the design, implementation, and
              maintenance of the hardware, software, networks, and servers.
            </Text>
          </Box>
        </Flex>

        <Grid
          templateColumns={gridTemplateColumns}
          gap={{ base: "20px", md: "29px" }}
          w="full"
          mt={{ base: "40px", md: "100px" }}
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
