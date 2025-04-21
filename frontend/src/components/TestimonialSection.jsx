import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion.create(Box);

const testimonials = [
  {
    text: "Message From the CEO",
    subtext:
      "At Webring, our commitment to innovation and excellence drives everything we do. As CEO, I aim to lead teams that turn bold ideas into successful digital products. Let's continue to shape the future together.",
    name: "Daniyal Sultan",
    position: "Founder & CEO",
    image: "/CEOdp.png",
    linkedin: "https://www.linkedin.com/in/daniyal-sultan/",
  },
  {
    text: "Insights of CTO",
    subtext:
      "My mission is to architect robust, scalable systems while embracing the latest technologies. At Webring, we craft future-ready solutions that empower clients to stay ahead in the digital landscape.",
    name: "Adil Waqar",
    position: "CTO",
    image: "/adilll.png",
    linkedin: "https://www.linkedin.com/in/muhammad-adil-waqar/",
  },
  {
    text: "Thoughts of Director",
    subtext:
      "I focus on aligning project execution with client goals to ensure timely delivery and exceptional outcomes. At Webring, we manage each project with agility, transparency, and a clear vision for success.",
    name: "Muhammad Ibrahim",
    position: "Director",
    image: "/ibrahim.jpg",
    linkedin: "https://www.linkedin.com/in/syed490/",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Box maxW="1920px" mx="auto" py="50px" px={{ base: "20px", lg: "100px" }}>
      <Flex
        justify="center"
        position="relative"
        maxW="1570px"
        mx="auto"
        direction="column"
        align="center"
      >
        {/* Title Section - Aligned with slider content */}
        <Box w={{ base: "100%", md: "80%" }} maxW="900px" mb="50px">
          <Text
            fontSize="20px"
            fontWeight="700"
            letterSpacing="0.5rem"
            color="#26241C"
            mb="10px"
          >
            Vision of
          </Text>
          <Text
            fontSize={{ base: "40px", md: "48px" }}
            fontWeight="900"
            lineHeight={{ base: "40px", md: "68px" }}
            color="#FED904"
            fontFamily="inherit"
          >
            Leaders
          </Text>
        </Box>

        {/* Left Arrow - Fixed Vertically Centered */}
        <Box
          position="absolute"
          left={{ base: "-20px", md: "100px" }}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          w={{ base: "30px", md: "40px" }}
          h={{ base: "30px", md: "40px" }}
          bg="#FED904"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faArrowLeft} color="#000" />
        </Box>

        {/* Slider */}
        <Box w={{ base: "100%", md: "80%" }} maxW="900px" position="relative">
          <AnimatePresence mode="wait">
            <MotionBox
              key={index}
              w="100%"
              bg="#000"
              borderRadius="15px"
              p={{ base: "20px", lg: "50px" }}
              color="#F8F8F6"
              textAlign="left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Profile Section */}
              <Flex
                align="center"
                justify="space-between"
                direction={{ base: "column", lg: "row" }}
              >
                <HStack
                  spacing={4}
                  justify="flex-start"
                  mt={{ base: 4, lg: 0 }}
                >
                  <Box
                    w="80px"
                    h="80px"
                    borderRadius="full"
                    overflow="hidden"
                    flexShrink={0}
                  >
                    <Image
                      src={testimonials[index].image}
                      alt="Profile"
                      objectFit="cover"
                      w="full"
                      h="full"
                    />
                  </Box>
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="18px" fontWeight="500">
                      {testimonials[index].name}
                    </Text>
                    <Text fontSize="16px" fontWeight="400">
                      {testimonials[index].position}
                    </Text>
                  </VStack>
                </HStack>
              </Flex>

              {/* Heading */}
              <Text
                fontSize={{ base: "29px", lg: "44px" }}
                fontWeight="500"
                lineHeight={{ base: "32px", lg: "48px" }}
                mt={{ base: "20px", lg: "30px" }}
              >
                {testimonials[index].text}
              </Text>

              {/* Subtext */}
              <Text
                fontSize={{ base: "16px", lg: "23.63px" }}
                fontWeight="400"
                lineHeight={{ base: "24px", lg: "40px" }}
                mt={4}
              >
                {testimonials[index].subtext}
              </Text>

              {/* LinkedIn Button */}
              <Flex justify="flex-start" mt={6}>
                <Button
                  as="a"
                  href={testimonials[index].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  bg="#FED904"
                  color="#000"
                  borderRadius="10px"
                  px={6}
                  py={2}
                  _hover={{ bg: "#E6C400" }}
                >
                  LinkedIn
                </Button>
              </Flex>
            </MotionBox>
          </AnimatePresence>
        </Box>

        {/* Right Arrow - Fixed Vertically Centered */}
        <Box
          position="absolute"
          right={{ base: "-21px", md: "100px" }}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          w={{ base: "30px", md: "40px" }}
          h={{ base: "30px", md: "40px" }}
          bg="#FED904"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faArrowRight} color="#000" />
        </Box>
      </Flex>
    </Box>
  );
};

export default TestimonialSlider;
