import { Box, Text, VStack, Flex, Image, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion.create(Box);

const testimonials = [
  {
    name: "Amelia Carter",
    role: "CMO at NovaTech\n Solutions",
    image: "/amelia.jpg",

    feedback:
      "We partnered with Webring for a complete overhaul of our digital presence, and the results were nothing short of remarkable. From intuitive UX/UI design to the seamless integration of advanced features like real-time data syncing, AI-based automation, and multi-device responsiveness, Webring delivered a website that truly represents the future of our brand. Their team anticipated our needs, offered strategic insights, and executed flawlessly. Not only did they meet our technical requirements, but they also elevated our entire digital strategy. We now have a scalable, secure, and high-performance platform that is already driving engagement and conversions.",
  },
  {
    name: "Adam Smith",
    role: "Head of Product at\n CoreMobile Solutions",
    image: "/adam.jpg",

    feedback:
      "Collaborating with Webring was one of the best decisions we made for our digital product. Their team didn’t just develop an app, they crafted a high-performing, secure, and beautifully intuitive experience across both iOS and Android platforms. Features like biometric login, in-app analytics, real-time notifications, offline mode functionality, and seamless third-party integrations made all the difference. What truly impressed us was their proactive approach to UI/UX design and performance optimization. From wireframes to final launch, they were meticulous, agile, and always ahead of the curve. Our users love the app, and so do we.",
  },
  {
    name: "Rikie Lambert",
    role: "Chief Marketing Officer\n at Lumino Labs",
    image: "/rikie.jpg",

    feedback:
      "Before working with Webring, our brand visibility was scattered and inconsistent. They came in with a crystal-clear strategy and executed across every major platformYouTube, Instagram, LinkedIn, and beyond. Their content marketing was on point, their creatives were scroll-stopping, and their data-driven approach made sure every move had impact. Within weeks, we saw increased engagement, subscriber growth on YouTube, and a noticeable uplift in inbound leads through social channels. From content planning to paid ads and analytics reporting, Webring handled everything with precision and creativity. They're not just marketers, they're growth partners.",
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
            left={{ base: "-15px", md: "-75px" }}
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
            right={{ base: "-10px", md: "-75px" }}
            top={{ base: "50%", md: "41%" }}
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
              w={{ base: "80%", md: "100%" }}
              ml={{ base: "29px", md: "-1px" }}
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                align={{ base: "center", md: "center" }} // <--- Center align items on mobile
                textAlign={{ base: "center", md: "left" }} // <--- Center text on mobile
                gap={{ base: "20px", md: "30px" }}
              >
                <VStack
                  spacing="10px"
                  align={{ base: "center", md: "flex-start" }}
                >
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
                      sx={{
                        imageRendering: "high-quality", // or 'crisp-edges' for pixel art
                      }}
                    />
                  </Box>
                  <Box textAlign={{ base: "center", md: "left" }}>
                    <Text
                      fontSize="18px"
                      fontWeight="700"
                      color="white"
                      fontFamily="DM Sans"
                    >
                      {testimonial.name}
                    </Text>
                    <Text
                      fontSize="16px"
                      color="#B7B39F"
                      fontFamily="DM Sans"
                      whiteSpace="pre-line"
                    >
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
                    fontSize={{ base: "14px", md: "16px" }}
                    color="#B7B39F"
                    lineHeight="1.6"
                    fontFamily="DM Sans"
                    pt="10px"
                    pb="55px"
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
