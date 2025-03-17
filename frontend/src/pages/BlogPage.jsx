import React from 'react';
import { Box, Image, Heading, Container, Text } from "@chakra-ui/react";
 
const blogCards = [
  {
    id: 1,
    title: "Building Dreams Online",
    description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service",
    image: "/pasted image 0.png",
  },
  {
    id: 2,
    title: "Building Dreams Online",
    description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service",
    image: "/pasted image 0.png",
  },
  {
    id: 3,
    title: "Building Dreams Online",
    description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service",
    image: "/pasted image 0.png",
  },
  {
    id: 4,
    title: "Building Dreams Online",
    description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service",
    image: "/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.png",
  },
  {
    id: 5,
    title: "Building Dreams Online",
    description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service",
    image: "/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.png",
  },
  {
    id: 6,
    title: "Building Dreams Online",
    description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service",
    image: "/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.png",
  },
  {
    id: 7,
    title: "Building Dreams Online",
    description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service",
    image: "/colleagues-working-project-discussing-details.png",
  },
  {
    id: 8,
    title: "Building Dreams Online",
    description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service",
    image: "/colleagues-working-project-discussing-details.png",
  },
  {
    id: 9,
    title: "Building Dreams Online",
    description: "Unveiling the Secrets of High-Performance Websites with Our Web Development Service",
    image: "/colleagues-working-project-discussing-details.png",
  },
];
 
function Blog() {
  return (
    <div>
      <Box width="100%" height="100%">
        {/* Header Section */}
        <Box position="relative">
          <Image src="/blogBanner.png" width="100%" height="543px" objectFit="cover" />
          <Heading
            textAlign="center"
            zIndex="1"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize="64px"
            color="white"
          >
            Blog
          </Heading>
        </Box>
 
        {/* Cards Section */}
        <Box width="100%" padding="100px">
          <Container maxW="1920px">
            <Box
              display="grid"
              gridTemplateColumns="repeat(3, 1fr)"
              gap="24px"
            >
              {blogCards.map((card) => (
                <Box
                  key={card.id}
                  width="100%"
                  height="496px"
                  bgColor="#F8F8F6"
                  borderRadius="xl"
                  position="relative"
                  p={4}
                >
                  <Image src={card.image} width="100%" height="299px" borderRadius="10px" objectFit="cover" />
                  <Heading fontSize="33px" mt={"35px"}>{card.title}</Heading>
                  <Text fontSize="16px" fontWeight="normal" mt={"30px"}>{card.description}</Text>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
 
export default Blog;