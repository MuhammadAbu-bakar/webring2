import {
  Box,
  Grid,
  Text,
  VStack,
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
      p={{ base: "30px", md: "40px", lg: "50px" }}
      w="100%"
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
      <VStack align="flex-start" spacing="20px">
        <Image src={image} alt={title} boxSize="80px" objectFit="contain" />
        <Text
          fontSize={{ base: "22px", md: "26px", lg: "30px" }}
          fontWeight="700"
          color="#26241C"
        >
          {title}
        </Text>
        <Text
          fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          fontWeight="400"
          lineHeight={{ base: "24px", md: "26px", lg: "28.8px" }}
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
    sm: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
    xl: "repeat(4, 1fr)",
  });

  return (
    <Box
      maxW="1920px"
      w="100%"
      m="auto"
      p={{ base: "20px", sm: "30px", md: "50px", lg: "70px", xl: "100px" }}
    >
      <VStack
        spacing={{ base: "40px", md: "60px", lg: "80px" }}
        align="stretch"
      >
        <Grid templateColumns={gridTemplateColumns} gap="30px" w="full">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default ServicesSection;
