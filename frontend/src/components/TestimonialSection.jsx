import { Box, Text, VStack, Flex, Image, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Sophia Moore",
    role: "CEO at Webflow Agency",
    image: "/sophia.png",
    quote: "Flawless execution from start to finish",
    feedback:
      "We are grateful to Asture for their support in our digital transformation process. Their full-scale implementation of Microsoft 365 has been very valuable. They helped us structure our MS Teams environment in a way that significantly boosted our collaboration and productivity. Their adoption activities and ongoing training have been key in enabling our team to fully leverage the capabilities of Microsoft 365. Asture has also been playing a key role in supporting our business development, workflow and process optimization, and tailoring different automation solutions based on our needs. With their ongoing support in Microsoft 365 and Dynamics 365, our operations remain smooth and efficient.",
  },
  {
    name: "Adam Smith",
    role: "Webflow Developer",
    image: "/adam.png",
    quote: "A dream team for any serious project",
    feedback:
      "From concept to launch, the communication was seamless and the results were even better. They really understand how to turn vision into a high performing, responsive website with pixel-perfect precision. Beyond development, the team offered insights into UI/UX improvements, implemented complex animations, and ensured accessibility compliance throughout the build. Every revision was handled with care and professionalism. Even post-launch, they provided extensive support, fixed minor bugs proactively, and trained our team to manage content. The entire process was efficient and stress-free thanks to their experience and clear project management.",
  },
  {
    name: "Mike Warren",
    role: "Developer at BRIX",
    image: "/mike.png",
    quote: "Professional, reliable, and incredibly skilled",
    feedback:
      "Their process is smooth, efficient, and completely transparent. We trusted them with a high-stakes project and they delivered on time with extraordinary results. From backend architecture planning to API integrations, their team handled every layer of the stack with deep technical knowledge. Their use of best practices, clean code, and thorough documentation made handover incredibly easy. Asture's dedication to quality assurance, automated testing, and performance optimization saved us countless hours down the line. I've worked with many teams, but their level of commitment and skill truly stands out.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <Box
      w="100%"
      maxW="1920px"
      mx="auto"
      px={{ base: "20px", lg: "100px" }}
      py="50px"
      bg="#F8F8F6"
      position="relative"
    >
      {/* Header */}
      <VStack
        spacing="20px"
        align={{ base: "flex-start", lg: "flex-start" }}
        textAlign={{ base: "left", lg: "left" }}
      >
        <Text
          fontSize="16px"
          fontWeight="700"
          letterSpacing="8px"
          color="#26241C"
          fontFamily="Yantramanav"
        >
          TESTIMONIALS
        </Text>
        <Text
          fontSize={{ base: "32px", md: "50px", lg: "60px" }}
          fontWeight="900"
          lineHeight={{ base: "40px", md: "60px", lg: "72px" }}
          color="#FED904"
          fontFamily="Yantramanav"
        >
          Don't take our word for it
        </Text>
      </VStack>

      {/* Navigation Arrows - Now visible on all screen sizes */}
      <IconButton
        aria-label="Previous slide"
        position="absolute"
        left={{ base: "5px", md: "10px" }}
        top="55%"
        transform="translateY(-50%)"
        zIndex="10"
        bg="#FED904"
        color="black"
        borderRadius="full"
        onClick={handlePrev}
        display="flex"
        size={{ base: "sm", md: "md" }}
        _hover={{ bg: "#e6c400" }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </IconButton>

      <IconButton
        aria-label="Next slide"
        position="absolute"
        right={{ base: "5px", md: "10px" }}
        top="55%"
        transform="translateY(-50%)"
        zIndex="10"
        bg="#FED904"
        color="black"
        borderRadius="full"
        onClick={handleNext}
        display="flex"
        size={{ base: "sm", md: "md" }}
        _hover={{ bg: "#e6c400" }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </IconButton>

      {/* Testimonial Card */}
      <Box mt="40px">
        <Box
          bg="#131313"
          w="100%"
          borderRadius="20px"
          p={{ base: "20px", md: "30px" }}
          boxShadow="0px 5.42px 18.98px 0px #2427291A"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={{ base: "20px", md: "30px" }}
          >
            {/* Image + Name + Role */}
            <VStack spacing="10px" align="center">
              <Box
                w={{ base: "100px", md: "160px" }}
                h={{ base: "100px", md: "160px" }}
                bg="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="10px"
              >
                <Image
                  src={testimonial.image}
                  objectFit="contain"
                  maxH="80%"
                  maxW="80%"
                  alt={testimonial.name}
                />
              </Box>

              <Box textAlign="center">
                <Text
                  fontSize="18px"
                  fontWeight="700"
                  color="white"
                  fontFamily="DM Sans"
                >
                  {testimonial.name}
                </Text>
                <Text fontSize="16px" color="#B7B39F" fontFamily="DM Sans">
                  {testimonial.role}
                </Text>
              </Box>
            </VStack>

            {/* Quote + Feedback */}
            <VStack
              align={{ base: "flex-start", md: "flex-start" }}
              textAlign={{ base: "left", md: "left" }}
              spacing="15px"
              flex="1"
            >
              <Text
                fontSize={{ base: "16px", md: "20px" }}
                fontWeight="700"
                color="white"
                fontFamily="DM Sans"
              >
                "{testimonial.quote}"
              </Text>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                color="#B7B39F"
                lineHeight="1.6"
                fontFamily="DM Sans"
              >
                {testimonial.feedback}
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
