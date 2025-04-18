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

const testimonials = [
  {
    text: "Transforming Ideas into Impactful Web Solutions with Visionary Leadership",
    subtext:
      "At Webring, our commitment to innovation and excellence drives everything we do. As CEO, I aim to lead teams that turn bold ideas into successful digital products. Let’s continue to shape the future together.",
    name: "Daniyal Sultan",
    position: "Founder & CEO",
    image: "/CEOdp.png",
    linkedin: "https://www.linkedin.com/in/daniyal-sultan/",
  },
  {
    text: "Driving Scalable Architecture and Technical Innovation Across Projects",
    subtext:
      "My mission is to architect robust, scalable systems while embracing the latest technologies. At Webring, we craft future-ready solutions that empower clients to stay ahead in the digital landscape.",
    name: "Adil Waqar",
    position: "CTO",
    image: "/adilll.png",
    linkedin: "https://www.linkedin.com/in/muhammad-adil-waqar/",
  },
  {
    text: "Strategic Project Execution to Deliver Digital Success with Precision",
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
      <Flex justify="center" align="center" wrap="nowrap" gap={5}>
        {/* Left Arrow */}
        <Box
          w="38px"
          h="38px"
          minW="38px"
          minH="38px"
          bg="#FED904"
          borderRadius="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={prevSlide}
          flexShrink={0}
        >
          <FontAwesomeIcon icon={faArrowLeft} color="#000" />
        </Box>

        {/* Slider Container */}
        <Box
          w={{ base: "100%", lg: "80%" }}
          maxW="1570px"
          h={{ base: "auto", lg: "571px" }}
          display="flex"
          justifyContent="center"
        >
          {/* Black Box */}
          <Box
            w="100%"
            bg="#000000"
            borderRadius="15px"
            position="relative"
            p={{ base: "20px", lg: "50px" }}
            color="#F8F8F6"
            textAlign={{ base: "center", lg: "left" }}
          >
            {/* Profile Section */}
            <Flex
              align="center"
              justify="space-between"
              direction={{ base: "column", lg: "row" }}
            >
              <HStack
                spacing={4}
                justify={{ base: "center", lg: "flex-start" }}
                mt={{ base: 4, lg: 0 }}
              >
                <Box w="80px" h="80px" borderRadius="full" overflow="hidden">
                  <Image
                    src={testimonials[index].image}
                    alt="Profile"
                    objectFit="cover"
                    w="full"
                    h="full"
                  />
                </Box>
                <VStack
                  align={{ base: "center", lg: "flex-start" }}
                  spacing={1}
                >
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
              fontSize={{ base: "24px", lg: "44px" }}
              fontWeight="500"
              lineHeight={{ base: "32px", lg: "48px" }}
              mt={{ base: "20px", lg: "40px" }}
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

            {/* LinkedIn Button on the Left */}
            <Flex justify={{ base: "center", lg: "flex-start" }} mt={6}>
              <Button
                as="a"
                href={testimonials[index].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                bg="#FED904"
                color="#F8F8F6"
                borderRadius="10px"
                px={6}
                py={2}
                _hover={{ bg: "#E6C400" }}
              >
                LinkedIn
              </Button>
            </Flex>
          </Box>
        </Box>

        {/* Right Arrow */}
        <Box
          w="38px"
          h="38px"
          minW="38px"
          minH="38px"
          bg="#FED904"
          borderRadius="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={nextSlide}
          flexShrink={0}
        >
          <FontAwesomeIcon icon={faArrowRight} color="#000" />
        </Box>
      </Flex>
    </Box>
  );
};

export default TestimonialSlider;
