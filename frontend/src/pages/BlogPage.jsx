import React from "react";
import { Box, Image, Heading, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const blogCards = [
  { id: 1, title: "Building Dreams Online", description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service", image: "/pasted image 0.png" },
  { id: 2, title: "Building Dreams Online", description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service", image: "/pasted image 0.png" },
  { id: 3, title: "Building Dreams Online", description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service", image: "/pasted image 0.png" },
  { id: 4, title: "Building Dreams Online", description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service", image: "/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.png" },
  { id: 5, title: "Building Dreams Online", description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service", image: "/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.png" },
  { id: 6, title: "Building Dreams Online", description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service", image: "/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.png" },
  { id: 7, title: "Building Dreams Online", description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service", image: "/colleagues-working-project-discussing-details.png" },
  { id: 8, title: "Building Dreams Online", description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service", image: "/colleagues-working-project-discussing-details.png" },
  { id: 9, title: "Building Dreams Online", description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service", image: "/colleagues-working-project-discussing-details.png" },
];

function Blog() {
  const navigate = useNavigate();

  return (
    <Box width="100%" height="100%">
      {/* Header Section */}
      <Box position="relative">
        <Image src="/blogBanner.png" width="100%" height={{ base: "250px", md: "400px", lg: "543px" }} objectFit="cover" />
        <Heading textAlign="center" zIndex="1" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" fontSize={{ base: "28px", md: "42px", lg: "64px" }} color="white">
          Blog
        </Heading>
      </Box>

      {/* Cards Section */}
      <Box width="100%" padding={{ base: "20px", md: "50px", lg: "100px" }}>
        <Container maxW="1920px">
          <Box display="grid" gridTemplateColumns={{ base: "1fr", sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={{ base: "16px", md: "24px" }}>
            {blogCards.map((card) => (
              <Box
                key={card.id}
                width="100%"
                bgColor="#F8F8F6"
                borderRadius="xl"
                position="relative"
                p={4}
                display="flex"
                flexDirection="column"
                height="auto"
                cursor="pointer"
                onClick={() => navigate(`/blog/${card.id}`)} // Navigate on click
              >
                <Image src={card.image} width="100%" height={{ base: "200px", sm: "250px", md: "299px" }} borderRadius="10px" objectFit="cover" />
                <Heading fontWeight="700" fontSize={{ base: "20px", sm: "24px", md: "32px", lg: "30px" }} mt={"20px"}>{card.title}</Heading>
                <Text fontSize={{ base: "14px", sm: "16px", md: "20px", lg: "18px" }} fontWeight="400" mt={"15px"} noOfLines={3}>
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

export default Blog;
