import { Box, Grid, Text, VStack, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const skills = [
  { image: "/web-development.png", title: "Web Development", description: "Delivering high-performance web solutions with tailored design and functionality.", navigateTo: "/web-developmentt"},
  { image: "/app-development.png", title: "App Development", description: "Transforming your vision into optimized Android and iOS apps with a focus on performance and user experience.", navigateTo: "/app-development" },
  // { image: "/coding.png", title: "Game Development", description: "Bringing your gaming concepts to life with expert developers, delivering immersive, console-ready experiences.", navigateTo: "/game-development" },
  { image: "/vector (1).png", title: "Graphic Designing", description: "Creating innovative designs and digital products that deliver exceptional user experiences.", navigateTo: "/graphic-designing" },
  { image: "/social-media-marketing.png", title: "Social Media Marketing", description: "Grow Your Business Through Our Marketing Digital Agency.", navigateTo: "/social-media" },
  { image: "/content-writing.png", title: "Content Writing", description: "Enhancing your brand with premium content that captivates and inspires your audience.", navigateTo: "/content-writing" },
  { image: "/performance-marketing.png", title: "Performance Marketing", description: "Driving results with data-driven strategies to maximize ROI and boost your brand's digital presence." , navigateTo: "/perform-market"},
  { image: "/shopify-store.png", title: "Shopify Store Development", description: "Building high-performance, visually appealing Shopify stores that drive conversions and enhance user experience.", navigateTo: "/shopify-development" },
  { image: "/web-consultancy.png", title: "Web Development Consultancy", description: "Delivering expert guidance and solutions to optimize web development and achieve your business goals.", navigateTo: "/web-consultancy" },
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
        <Image src={image} alt={title} w="69px" h="69px" />
        <Text fontSize="30px" fontWeight="700" color="#26241C">{title}</Text>
        <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="400" lineHeight="28.8px" color="#26241C">{description}</Text>
      </VStack>
    </Box>
  );
};

const ServicesSection = () => {
  const gridTemplateColumns = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" });
  
  return (
    <Box maxW="1920px" w="100%" m="auto" p={{ base: "30px", md: "50px 100px" }}>
      <VStack spacing="80px" align="flex-start">
        <HStack flexDirection={{ base: "column", md: "row" }} justify="space-between" w="full">
          <VStack align="flex-start" spacing="10px">
            <Text fontSize="16px" fontWeight="700" letterSpacing="0.5rem" color="#26241C">
              WHAT WE’RE OFFERING
            </Text>
            <Text fontSize={{ base: "40px", md: "60px" }} fontWeight="900" lineHeight="72px" color="#FED904">
              Dealing in all professional<br/> IT services.
            </Text>
          </VStack>
          <Text fontSize={{ base: "18px", md: "20px" }} fontWeight="400" lineHeight="28px" color="#4F4B3B" w={{ base: "100%", md: "698px" }}>
            One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.
          </Text>
        </HStack>
        <Grid templateColumns={gridTemplateColumns} gap="29px" w="full" mt={100}>
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default ServicesSection;
