import {
  Box,
  Text,
  VStack,
  HStack,
  Flex,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  { title: "Almassa", image: "/p1.png", link: "https://almassait.com/" },
  {
    title: "MedExpress",
    image: "/p2.png",
    link: "https://medexpressbilling.com/",
  },
  {
    title: "Social Media Marketing",
    image: "/p3.png",
    link: "https://jazpayments.com/",
  },
  {
    title: "Graphic Designing",
    image: "/p4.png",
    link: "https://www.myretrojersey.com/",
  },
  { title: "Game Development", image: "/p5.png", link: "https://game.dev" },
  {
    title: "Content Writing",
    image: "/p6.png",
    link: "https://jplogistics.ltd/",
  },
  {
    title: "Content Writing",
    image: "/p7.png",
    link: "https://soraschools.com/",
  },
  {
    title: "Content Writing",
    image: "/p8.png",
    link: "https://gemmafoods.com/",
  },
  {
    title: "Content Writing",
    image: "/motionGreyy.png",
    link: "https://motiongrey.com/",
  },
  {
    title: "Content Writing",
    image: "/us.png",
    link: "https://ustechnologies100.com/",
  },
  {
    title: "Content Writing",
    image: "/chauffer.png",
    link: "https://13chauffeurs.com.au/",
  },
  {
    title: "Content Writing",
    image: "/targomo.png",
    link: "https://www.targomo.com/",
  },
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
        const scrollPosition =
          container.scrollLeft + (cardRect.left - containerRect.left);
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
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
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        slider.scrollLeft += e.deltaX;
      }
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
          align={{ base: "flex-start", lg: "flex-start" }}
          textAlign={{ base: "left", lg: "left" }}
          spacing="20px"
          w={{ base: "100%", lg: "429px" }}
          flexShrink={0}
        >
          <Text
            fontSize="16px"
            fontWeight="700"
            letterSpacing="0.5rem"
            color="#FED904"
          >
            PROJECTS
          </Text>
          <Text
            fontSize={{ base: "28px", md: "40px", lg: "55px" }}
            fontWeight="800"
            lineHeight={{ base: "40px", lg: "85px" }}
            color="#26241C"
          >
            Showcase of our recognized work
          </Text>
          <Text
            fontSize="20px"
            fontWeight="400"
            lineHeight="28px"
            color="#4F4B3B"
            pt={4}
          >
            Our collaborative approach ensures that we truly understand our
            clients' unique requirements and challenges.
          </Text>

          {/* Custom Horizontal Line */}
          <Box w="100%" h="1px" bg="#C6C3B3" mt={5} />

          <VStack align="flex-start" spacing="10px" pt={6}>
            {[
              "Managed Services and Products",
              "Flexibility and Adaptability",
              "Competitive Advantage",
            ].map((item, index) => (
              <HStack key={index}>
                <FaCheckCircle color="#FED904" />
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
            left={{ base: "-10px", md: "-60px" }}
            top="0"
            h="100%"
            align="center"
            zIndex="10"
            display="flex"
          >
            <IconButton
              aria-label="Previous slide"
              bg="#FED904"
              borderRadius="full"
              boxShadow="md"
              color="gray.700"
              _hover={{ bg: "gray.100" }}
              size={{ base: "sm", md: "md" }}
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
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {projects.map((project, index) => (
                <Box
                  key={index}
                  w={{ base: "250px", md: "300px", lg: "346px" }}
                  h={{ base: "450px", md: "500px", lg: "595px" }}
                  borderRadius="10px"
                  position="relative"
                  flexShrink="0"
                  className="flip-card"
                  css={{
                    perspective: "1000px",
                    "&:hover .flip-card-inner": {
                      transform: "rotateY(180deg)",
                    },
                  }}
                >
                  <Box
                    className="flip-card-inner"
                    css={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.6s",
                      transformStyle: "preserve-3d",
                      borderRadius: "10px",
                    }}
                  >
                    {/* Front Face */}
                    <Box
                      css={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    </Box>

                    {/* Back Face */}
                    <Box
                      css={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        bg: "gray.800",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          bg="#FED904"
                          color="black"
                          size="lg"
                          opacity={0}
                          css={{
                            transition: "opacity 0.3s ease 0.3s",
                            ".flip-card:hover &": {
                              opacity: 1,
                            },
                          }}
                        >
                          View Website
                        </Button>
                      </a>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>

          <Flex
            position="absolute"
            right={{ base: "-10px", md: "-60px" }}
            top="0"
            h="100%"
            align="center"
            zIndex="10"
            display="flex"
          >
            <IconButton
              aria-label="Next slide"
              bg="#FED904"
              borderRadius="full"
              boxShadow="md"
              color="gray.700"
              _hover={{ bg: "gray.100" }}
              size={{ base: "sm", md: "md" }}
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
