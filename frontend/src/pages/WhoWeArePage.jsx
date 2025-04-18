import React from "react";
import { Box, Heading, Image, Text, Container, VStack } from "@chakra-ui/react";

function WhoWeAre() {
  return (
    <Box width="100%" height="100%">
      {/* Header Section */}
      <Box position="relative">
        <Image
          src="/WhoWeAreBanner.png"
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
          fontSize={{ base: "30px", md: "48px", lg: "64px" }}
          fontWeight="bold"
          color="white"
        >
          Who We Are
        </Heading>
      </Box>

      {/* Content Section */}
      <Container
        maxW="1700px"
        mt={{ base: 10, md: 20 }}
        mb={{ base: 10, md: 20 }}
        px={10}
      >
        {/* Main Title */}
        <Heading
          fontSize={{ base: "32px", md: "40px", lg: "48px" }}
          fontWeight="bold"
          textAlign="left"
          mb={{ base: 6, md: "60px" }}
          lineHeight="1.2"
        >
          WeBring: Your Gateway to Digital Success
        </Heading>

        {/* Introductory Text */}
        <Text
          fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          width={{ base: "100%", md: "90%", lg: "1148px" }}
          textAlign="left"
          mb={10}
          lineHeight="1.6"
        >
          At WeBring, we supercharge your business with bold digital solutions
          that spark growth, amplify your brand, and take you to new heights in
          the digital world.
        </Text>

        {/* Discover the Core of WeBring Section */}
        <Heading
          fontSize={{ base: "24px", md: "28px", lg: "32px" }}
          fontWeight="bold"
          textAlign="left"
          mb={10}
        >
          Discover the Core of WeBring
        </Heading>

        <VStack align="start" spacing={{ base: 6, md: 10 }} gap={7}>
          {[
            "Innovation at the Forefront",
            "Insight-Driven Strategies",
            "Collaborative Partnerships",
            "Commitment to Excellence",
          ].map((title, index) => (
            <Box key={index}>
              <Heading
                fontSize={{ base: "20px", md: "22px", lg: "24px" }}
                fontWeight="semibold"
                mb={4}
              >
                {index + 1}. {title}
              </Heading>
              <Text fontSize={{ base: "16px", md: "18px" }} lineHeight="1.6">
                {index === 0 &&
                  "At WeBring, innovation is our driving force. We craft solutions that redefine industry standards, combining creativity and technology to deliver exceptional outcomes that keep your business ahead of the curve."}
                {index === 1 &&
                  "We take the time to understand your unique needs and challenges. By leveraging deep insights and strategic planning, WeBring designs tailored solutions that not only address current objectives but also prepare your business for future success."}
                {index === 2 &&
                  "Collaboration is key to our process. WeBring fosters strong partnerships with clients, ensuring seamless communication and aligning our efforts with your vision to bring ideas to life with precision and creativity."}
                {index === 3 &&
                  "Quality is non-negotiable at WeBring. We are dedicated to delivering solutions that exceed expectations, setting new benchmarks for excellence in every project we undertake."}
              </Text>
            </Box>
          ))}
        </VStack>

        <Text fontSize={{ base: "16px", md: "18px" }} mt={6} lineHeight="1.6">
          With WeBring by your side, success is just the beginning of your
          digital journey.
        </Text>

        {/* Who We Are Section */}
        <Box mt={10}>
          <Heading
            fontSize={{ base: "24px", md: "28px", lg: "32px" }}
            fontWeight="bold"
            textAlign="left"
            mb={7}
          >
            Who We Are
          </Heading>
          <Text fontSize={{ base: "16px", md: "18px" }} lineHeight="1.6" mb={5}>
            At WeBring, we are more than just a digital solutions agency—we are
            your trusted partner in innovation and growth. Our team of skilled
            professionals is dedicated to transforming ideas into impactful
            solutions, combining creativity, technology, and strategic
            expertise. With a commitment to excellence, we deliver tailored
            services that empower businesses to thrive in the ever-evolving
            digital landscape.
          </Text>
          <Text fontSize={{ base: "16px", md: "18px" }} lineHeight="1.6">
            At our core, we value collaboration, customer-centricity, and a
            forward-thinking approach, ensuring every project is designed to
            meet unique needs while driving long-term success. WeBring is here
            to elevate your brand, one innovative solution at a time.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default WhoWeAre;
