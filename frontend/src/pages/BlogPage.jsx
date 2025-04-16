import React from "react";
import { Box, Image, Heading, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const blogCards = [
  {
    id: 1,
    title:
      "Unveiling the Secrets of High-Performance Websites with Our Web Development Service",
    description:
      "In the fast-paced digital era, where attention spans are shrinking and users demand instant gratification, the performance of your website plays a …",
    image: "/i1.png",
  },
  {
    id: 2,
    title: "Enhancing User Experience: The Key to Our Web Development Approach",
    description:
      "In the ever-evolving digital landscape, where websites are the storefronts of the virtual world, user experience (UX) has become a paramount factor …",
    image: "/i2.png",
  },
  {
    id: 3,
    title: "Building Dreams Online: The Power of Our Web Development Services",
    description:
      "In the dynamic and interconnected world of today, having a strong online presence is not just an option; it’s a necessity. Whether …",
    image: "/i3.png",
  },
  {
    id: 4,
    title:
      "Innovative Solutions: Empowering Businesses Through Web Development",
    description:
      "In the fast-paced and dynamic world of business, staying ahead of the curve is crucial for success. One of the most impactful …",
    image: "/i4.png",
  },
  {
    id: 5,
    title: "From Concept to Code: Exploring Our Web Development Process",
    description:
      "In the ever-evolving landscape of the digital era, a robust online presence is crucial for businesses and individuals alike. The gateway to …",
    image: "/i5.png",
  },
  {
    id: 6,
    title: "Revolutionize Your Online Presence: Our Web Development Expertise",
    description:
      "In the fast-paced digital era, having a strong online presence is not just an option; it’s a necessity. Your website is often …",
    image: "/i6.png",
  },
  {
    id: 7,
    title: "Behind the Scenes: Crafting Exceptional Websites with Our Services",
    description:
      "In the fast-paced digital era, a website serves as the virtual face of a business or individual, making a compelling online presence …",
    image: "/i7.png",
  },
  {
    id: 8,
    title: "The Ultimate Guide to Seamless Web Development Solutions",
    description:
      "In the fast-paced world of technology, a seamless web presence is essential for businesses and individuals alike. Whether you’re launching a new …",
    image: "/i8.png",
  },
  {
    id: 9,
    title:
      "Unlocking Success: How Our Web Development Service Elevates Businesses",
    description:
      "In the rapidly evolving digital landscape, a robust online presence is a prerequisite for business success. As consumers increasingly turn to the …",
    image: "/i9.png",
  },
];

function Blog() {
  const navigate = useNavigate();

  return (
    <Box width="100%" height="100%">
      {/* Header Section */}
      <Box position="relative">
        <Image
          src="/blogBanner.png"
          width="100%"
          height={{ base: "250px", md: "400px", lg: "543px" }}
          objectFit="cover"
        />
        <Heading
          textAlign="center"
          zIndex="1"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize={{ base: "28px", md: "42px", lg: "64px" }}
          color="white"
        >
          Blogs
        </Heading>
      </Box>

      {/* Cards Section */}
      <Box width="100%" padding={{ base: "20px", md: "50px", lg: "100px" }}>
        <Container maxW="1920px">
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              sm: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={{ base: "16px", md: "24px" }}
          >
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
                <Image
                  src={card.image}
                  width="100%"
                  height={{ base: "200px", sm: "250px", md: "299px" }}
                  borderRadius="10px"
                  objectFit="cover"
                />
                <Heading
                  fontWeight="700"
                  lineHeight="110%"
                  fontSize={{
                    base: "20px",
                    sm: "24px",
                    md: "32px",
                    lg: "30px",
                  }}
                  mt={"20px"}
                >
                  {card.title}
                </Heading>
                <Text
                  fontSize={{
                    base: "14px",
                    sm: "16px",
                    md: "20px",
                    lg: "18px",
                  }}
                  fontWeight="400"
                  mt={"15px"}
                  noOfLines={3}
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

export default Blog;
