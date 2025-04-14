import { Box, Text, VStack, HStack, Flex, IconButton } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const projects = [
  { title: "App Development", image: "/app.png" },
  { title: "Web Development", image: "/web.png" },
  { title: "Social Media Marketing", image: "/social.png" },
  { title: "Graphic Designing", image: "/graphic-designing.png" },
  { title: "Game Development", image: "/game-development.png" },
  { title: "Content Writing", image: "/Content-Writing-1.png"},
];

const ProjectShowcase = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToProject = (index) => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const card = container.children[index];
      if (card) {
        const containerRect = container.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const scrollPosition = container.scrollLeft + (cardRect.left - containerRect.left);
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
        setCurrentIndex(index);
      }
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    scrollToProject(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    scrollToProject(newIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
  
    const handleWheel = (e) => {
      // Only prevent default if we're scrolling horizontally
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        slider.scrollLeft += e.deltaX;
      }
      // Allow vertical scrolling to pass through
    };
  
    slider.addEventListener("wheel", handleWheel, { passive: false });
  
    return () => {
      slider.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Box bg="#F8F8F6" maxW="100%" py="50px" px={{ base: "20px", lg: "100px" }}>
      <Flex 
        direction={{ base: "column", lg: "row" }} 
        justify="space-between" 
        align={{ base: "center", lg: "start" }} 
        gap={{ base: "50px", lg: "0" }}
      >
        {/* Left Text Section */}
        <VStack 
          align={{ base: "center", lg: "flex-start" }} 
          textAlign={{ base: "center", lg: "left" }} 
          spacing="20px" 
          w={{ base: "100%", lg: "429px" }} 
          flexShrink={0}
        >
          <Text fontSize="16px" fontWeight="700" letterSpacing="0.5rem" color="#FED904">
            PROJECTS
          </Text>
          <Text fontSize={{ base: "28px", md: "40px", lg: "55px" }} fontWeight="800" lineHeight={{ base: "40px", lg: "85px" }} color="#26241C">
            Showcase of our recognized work
          </Text>
          <Text fontSize="20px" fontWeight="400" lineHeight="28px" color="#4F4B3B" pt={4}>
            Our collaborative approach ensures that we truly understand our clients' unique requirements and challenges.
          </Text>

          {/* Custom Horizontal Line */}
          <Box w="100%" h="1px" bg="#C6C3B3" mt={5}/>

          <VStack align="flex-start" spacing="10px" pt={6}>
            {[
              "Managed Services and Products",
              "Flexibility and Adaptability",
              "Competitive Advantage",
            ].map((item, index) => (
              <HStack key={index}>
                <FaCheckCircle color="#FED904"/>
                <Text fontSize="18px" fontWeight="400" color="#4F4B3B">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
        </VStack>

        {/* Custom Slider Section */}
        <Box 
          position="relative" 
          flex="1" 
          py="10px" 
          ml={{ base: "0", lg: "50px" }}
          w={{ base: "100%", lg: "calc(100% - 479px)" }}
        >
          {/* Navigation Arrows - Positioned outside the container */}
          <Flex
            position="absolute"
            left="-60px"
            top="0"
            h="100%"
            align="center"
            zIndex="10"
            display={{ base: "none", md: "flex" }}
          >
            <IconButton 
              aria-label="Previous slide"
              bg="white"
              borderRadius="full"
              boxShadow="md"
              color="gray.700"
              _hover={{ bg: "gray.100" }}
              size="md"
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </IconButton>
          </Flex>

          <Box width="100%" overflow="hidden">
            <Flex
              ref={sliderRef}
              overflowX="auto"
              scrollBehavior="smooth"
              gap="20px"
              px={{ base: "20px", lg: "10px" }}
              css={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE 10+
                "&::-webkit-scrollbar": {
                  display: "none",       // Chrome, Safari, Opera
                },
              }}
            >
              {projects.map((project, index) => (
                <Box
                  key={index}
                  w={{ base: "250px", md: "300px", lg: "346px" }}
                  h={{ base: "450px", md: "500px", lg: "595px" }}
                  bg="#000"
                  borderRadius="10px"
                  position="relative"
                  flexShrink="0"
                >
                  <Text
                    fontSize={{ base: "24px", md: "30px", lg: "38px" }}
                    fontWeight="500"
                    color="#FFFFFF"
                    position="absolute"
                    top="34.7px"
                    left="25px"
                    w="80%"
                  >
                    {project.title}
                  </Text>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "90%",
                      height: "auto",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Flex>
          </Box>

          <Flex
            position="absolute"
            right="-60px"
            top="0"
            h="100%"
            align="center"
            zIndex="10"
            display={{ base: "none", md: "flex" }}
          >
            <IconButton
              aria-label="Next slide"
              bg="white"
              borderRadius="full"
              boxShadow="md"
              color="gray.700"
              _hover={{ bg: "gray.100" }}
              size="md"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </IconButton>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectShowcase;
