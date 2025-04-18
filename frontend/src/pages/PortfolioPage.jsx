import React from "react";
import { Box, Image, Heading, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const portfolioCards = [
  {
    id: 1,
    title: "Almassa",
    description:
      "A dynamic corporate website built for Almassa to establish a strong online presence. We focused on sleek visuals and interactive sections to enhance user engagement and highlight their innovation-driven services.",
    image: "/almassa.png",
    navigateTo: "/almassa",
  },
  {
    id: 2,
    title: "MedExpress",
    description:
      "For MedExpress, we designed a clean, professional platform tailored to the healthcare industry. The website emphasizes clarity, functionality, and easy navigation to support patients onboarding and medical service outreach.",
    image: "/medexpress.png",
    navigateTo: "/medexpress",
  },
  {
    id: 3,
    title: "JazPayments",
    description:
      "We partnered with JazPayments to develop a user-centric platform that simplifies payment solutions. The site features intuitive design and secure integrations, ensuring clients can access services with confidence and ease.",
    image: "/jazzpay.png",
    navigateTo: "/jazpayment",
  },
  {
    id: 4,
    title: "My Retro Jersey",
    description:
      "My Retro Jersey needed a visually engaging eCommerce site to showcase their unique vintage football jerseys. We delivered a bold design with a seamless shopping experience to boost conversions and brand appeal.",
    image: "/myretro.png",
    navigateTo: "/myretrojersey",
  },
  {
    id: 5,
    title: "JP Logistics",
    description:
      "JP Logistics needed a bold, trustworthy digital presence to reflect their global shipping services. We delivered a responsive, information-rich website that builds credibility and makes it easy for users to request quotes and track shipments.",
    image: "/jplogistics.png",
    navigateTo: "/jplogistics",
  },
  {
    id: 6,
    title: "Sora Schools",
    description:
      "We crafted an innovative and student-friendly digital platform for Sora School, focusing on accessibility and interactivity. The design promotes personalized learning journeys while maintaining a clean, modern aesthetic for both students and educators.",
    image: "/soraschools.png",
    navigateTo: "/soraschools",
  },
  {
    id: 7,
    title: "Gemma Foods",
    description:
      "For Gemma Foods, we created a visually rich and appetite-driven design that brings their fresh, chef-crafted meals to life. From product storytelling to seamless order flow, the website delivers both beauty and functionality.",
    image: "/gemmafoods.png",
    navigateTo: "/gemmafoods",
  },
  {
    id: 8,
    title: "Motion Grey",
    description:
      "Motion Grey's website was designed to blend technology and lifestyle. With a sleek, minimal look and a performance-optimized structure, we ensured a smooth shopping experience for their ergonomic furniture and wellness products.",
    image: "/motiongrey.png",
    navigateTo: "/motiongrey",
  },
  {
    id: 9,
    title: "US Technologies 100",
    description:
      "US Technologies 100's platform showcases cutting-edge tech solutions with a focus on user experience. The responsive design highlights their innovative approach while maintaining professional credibility.",
    image: "/ustechnologies.png",
    navigateTo: "/ustechnologies",
  },
  {
    id: 10,
    title: "13 Chauffers",
    description:
      "For 13 Chauffers, we developed an elegant transportation service platform that emphasizes luxury and reliability. The intuitive booking system and clean interface reflect their premium service standards.",
    image: "/13chauffer.png",
    navigateTo: "/chauffers",
  },
  {
    id: 11,
    title: "Targomo",
    description:
      "Targomo's location intelligence platform required a sophisticated yet accessible interface. We delivered a solution that effectively communicates complex spatial data through intuitive visualizations and clear navigation.",
    image: "/targomoo.png",
    navigateTo: "/targomo",
  },
];

function Portfolio() {
  const navigate = useNavigate();
  return (
    <Box width="100%" minHeight="100vh" bg="white">
      {/* Header Section */}
      <Box position="relative" width="100%">
        <Image
          src="/portfolioBanner.png"
          width="100%"
          height={{ base: "300px", md: "450px", lg: "543px" }}
          objectFit="cover"
          alt="Portfolio Banner"
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
          textShadow="0 2px 4px rgba(0,0,0,0.5)"
        >
          Portfolio
        </Heading>
      </Box>

      {/* Cards Section */}
      <Box
        width="100%"
        padding={{ base: "40px 20px", md: "80px", lg: "100px" }}
      >
        <Container maxW="container.xxl" px={{ base: 4, md: 6, lg: 8 }}>
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={{ base: "24px", md: "32px", lg: "40px" }}
          >
            {portfolioCards.map((card) => (
              <Box
                key={card.id}
                width="100%"
                height="100%"
                minHeight={{ base: "auto", md: "680px" }}
                borderRadius="xl"
                position="relative"
                p={{ base: 4, md: 6 }}
                bg="#F8F8F8"
                border="1px solid"
                borderColor="gray.100"
                overflow="hidden"
                _hover={{
                  transform: "scale(1.02)",
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "xl",
                }}
                cursor="pointer"
                onClick={() => card.navigateTo && navigate(card.navigateTo)}
              >
                <Box
                  width="100%"
                  height={{ base: "250px", md: "350px", lg: "400px" }}
                  mb={{ base: 4, md: 6 }}
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Image
                    src={card.image}
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    alt={card.title}
                    transition="transform 0.3s ease"
                    _hover={{ transform: "scale(1.05)" }}
                  />
                </Box>
                <Heading
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  mb={{ base: 2, md: 3 }}
                  lineHeight="tight"
                >
                  {card.title}
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  fontWeight="normal"
                  color="gray.600"
                  noOfLines={4}
                >
                  {card.description}
                </Text>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Portfolio;
