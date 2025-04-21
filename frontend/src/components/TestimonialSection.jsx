import { Box, Text, VStack, Flex, Image, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion.create(Box);

const testimonials = [
  {
    name: "Sophia Moore",
    role: "CEO at Webflow Agency",
    image: "/sophia.png",
    quote: "Flawless execution from start to finish",
    feedback:
      "We are grateful to Webring for their support in our digital transformation process. Their full-scale implementation of Microsoft 365 has been very valuable. They helped us structure our MS Teams environment in a way that significantly boosted our collaboration and productivity. Their adoption activities and ongoing training have been key in enabling our team to fully leverage the capabilities of Microsoft 365. Webring has also been playing a key role in supporting our business development, workflow and process optimization, and tailoring different automation solutions based on our needs. With their ongoing support in Microsoft 365 and Dynamics 365, our operations remain smooth and efficient.",
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
      "Their process is smooth, efficient, and completely transparent. We trusted them with a high-stakes project and they delivered on time with extraordinary results. From backend architecture planning to API integrations, their team handled every layer of the stack with deep technical knowledge. Their use of best practices, clean code, and thorough documentation made handover incredibly easy. Webring's dedication to quality assurance, automated testing, and performance optimization saved us countless hours down the line. I've worked with many teams, but their level of commitment and skill truly stands out.",
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
    <Box w="100%" bg="#F8F8F6" py="50px" px={{ base: "20px", lg: "0" }}>
      <VStack
        spacing="20px"
        align="flex-start"
        textAlign="left"
        px={{ base: "20px", md: "100px" }}
      >
        <Text
          fontSize="16px"
          fontWeight="700"
          letterSpacing="0.5rem"
          color="#26241C"
        >
          TESTIMONIALS
        </Text>
        <Text
          fontSize={{ base: "40px", md: "48px" }}
          fontWeight="900"
          lineHeight={{ base: "40px", md: "68px" }}
          color="#FED904"
          fontFamily="inherit"
        >
          Don't take our word for it
        </Text>
      </VStack>

      <Box maxW="1100px" mx="auto">
        <Box
          mt="40px"
          position="relative"
          minHeight={{ base: "550px", md: "360px" }}
        >
          {/* Arrows */}
          <IconButton
            aria-label="Previous slide"
            position="absolute"
            left={{ base: "-20px", md: "-75px" }}
            top={{ base: "50%", md: "40%" }}
            transform="translateY(-50%)"
            zIndex="10"
            bg="#FED904"
            color="black"
            borderRadius="full"
            onClick={handlePrev}
            size={{ base: "sm", md: "md" }}
            _hover={{ bg: "#e6c400" }}
            _focus={{ boxShadow: "none", outline: "none" }}
            _active={{ transform: "translateY(-50%)", boxShadow: "none" }}
            sx={{
              WebkitTapHighlightColor: "transparent",
              "&:focus": { boxShadow: "none", outline: "none" },
              "&:active": { transform: "translateY(-50%)", boxShadow: "none" },
            }}
            width={{ base: "32px", md: "40px" }}
            height={{ base: "32px", md: "40px" }}
            minWidth="unset"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </IconButton>

          <IconButton
            aria-label="Next slide"
            position="absolute"
            right={{ base: "-20px", md: "-75px" }}
            top={{ base: "50%", md: "40%" }}
            transform="translateY(-50%)"
            zIndex="10"
            bg="#FED904"
            color="black"
            borderRadius="full"
            onClick={handleNext}
            size={{ base: "sm", md: "md" }}
            _hover={{ bg: "#e6c400" }}
            _focus={{ boxShadow: "none", outline: "none" }}
            _active={{ transform: "translateY(-50%)", boxShadow: "none" }}
            sx={{
              WebkitTapHighlightColor: "transparent",
              "&:focus": { boxShadow: "none", outline: "none" },
              "&:active": { transform: "translateY(-50%)", boxShadow: "none" },
            }}
            width={{ base: "32px", md: "40px" }}
            height={{ base: "32px", md: "40px" }}
            minWidth="unset"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </IconButton>

          {/* Testimonial Slide */}
          <AnimatePresence mode="wait">
            <MotionBox
              key={currentIndex}
              bg="#131313"
              borderRadius="20px"
              p={{ base: "20px", md: "30px" }}
              boxShadow="0px 5.42px 18.98px 0px #2427291A"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              w="100%"
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                align={{ base: "flex-start", md: "center" }}
                gap={{ base: "20px", md: "30px" }}
                textAlign="left"
              >
                <VStack spacing="10px" align="flex-start">
                  <Box
                    w={{ base: "120px", md: "160px" }}
                    h={{ base: "120px", md: "160px" }}
                    bg="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="10px"
                    overflow="hidden"
                    flexShrink={0}
                  >
                    <Image
                      src={testimonial.image}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      alt={testimonial.name}
                    />
                  </Box>
                  <Box textAlign="left">
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

                <VStack
                  align="flex-start"
                  spacing="15px"
                  flex="1"
                  textAlign="left"
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
            </MotionBox>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
