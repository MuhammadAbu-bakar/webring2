import React from "react";
import { Box, Image, Heading, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const blogCards = [
  {
    id: 1,
    title: "How AI is Helping Businesses Work Smarter",
    description:
      "AI isn’t just a buzzword, it’s changing how businesses operate daily. From automating tasks to offering real-time insights, we explore how AI can give your business a serious edge.",
    image: "/i1.png",
  },
  {
    id: 2,
    title: "Future-Proof Your Business with the Right IT Setup",
    description:
      "Behind every successful business is a solid IT foundation. We explore how the right systems can keep things running smoothly and securely and ready to grow when you are.",
    image: "/i2.png",
  },
  {
    id: 3,
    title: "Why a Custom Website Can Take Your Business Further",
    description:
      "Your website is more than just a digital presence, it’s your first impression. We share how a custom-built site can truly reflect your brand and connect better with your audience.",
    image: "/i3.png",
  },
  {
    id: 4,
    title: "Turning Your App Idea into a Real-World Solution",
    description:
      "Got a great app idea? We’ll show you how we bring concepts to life with smart design, smooth functionality, and a clear focus on what your users need.",
    image: "/i4.png",
  },
  {
    id: 5,
    title: "Making Dental Websites That Truly Connect with Patients",
    description:
      "Patients start their journey online. That’s why we build dental websites that are easy to navigate, mobile-friendly, and built to build trust from the very first visit.",
    image: "/i5.png",
  },
  {
    id: 6,
    title: "Why a Great Dental Website is Worth the Investment",
    description:
      "A clean, informative, and user-friendly site can make all the difference for dental practices. Learn what goes into creating a site that drives appointments and builds credibility.",
    image: "/i6.png",
  },
  {
    id: 7,
    title: "Getting Your Product the Attention It Deserves",
    description:
      "You’ve got a great product, now let’s get it noticed. We explore how targeted marketing strategies help your product stand out and reach the right people.",
    image: "/i7.png",
  },
  {
    id: 8,
    title: "The Secret to Strong Product Marketing in a Busy Market",
    description:
      "Great marketing is more than ads, it’s about telling your product’s story. Learn how smart positioning and clear messaging can cut through the noise.",
    image: "/i8.png",
  },
  {
    id: 9,
    title: "Blending Great Design with Powerful Web Functionality",
    description:
      "Design matters. We explore how a well-thought-out website can be both beautiful and effective, keeping visitors engaged and encouraging them to take action.",
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
          Blog
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
