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
      "Motion Grey’s website was designed to blend technology and lifestyle. With a sleek, minimal look and a performance-optimized structure, we ensured a smooth shopping experience for their ergonomic furniture and wellness products.",
    image: "/motiongrey.png",
    navigateTo: "/motiongrey",
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
                  onClick={() => card.navigateTo && navigate(card.navigateTo)}
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
