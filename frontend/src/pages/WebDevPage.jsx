import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Image,
  Grid,
  GridItem,
  Accordion,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const cards = [
  {
    title: "Requirements Gathering",
    desc: "In our top Web Development services company, we embark on a meticulous journey of understanding your unique needs. Through comprehensive consultation, we delve deep into your vision, goals, and preferences, ensuring a tailored website development using WordPress process that transforms your ideas into a stunning digital reality.",
    image: "/req-gathering.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "UX/UI Design",
    desc: "Enhance user satisfaction with our UX/UI Design services. Our top web designers in the world design user interfaces that prioritize seamless navigation and meaningful interactions, transforming your digital platform into a user-friendly haven.",
    image: "/ui-design.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Usability Testing",
    desc: "Our top notch Web Development services include rigorous Usability Testing in UX design functionality, ensuring your website's functionality and design align harmoniously to create intuitive, user-centric journeys. Our creative staffing meticulously analyzes every interaction, guaranteeing a flawlessly navigable and engaging digital environment for your visitors.",
    image: "/usability-testing.png",
    height: "350px",
    width: "350px",
  },
];

const items = [
  {
    title: "What is Game Design and Game Development, and why should I consider it for my project?",
    text: "Game design and game development involve creating interactive digital games. Choose us for your project because we provide captivating games that engage, entertain, educate, reach a broad audience, improve customer engagement, provide valuable analytics, enhance competitiveness, and can be used for various business objectives"
  },
  {
    title: "How long does it take to design and develop a game?",
    text: "The timeline varies based on the complexity, platform, and features of the game. Simple games might take a few months, while more intricate projects could span a year or more. Our top-notch game designer and developer work closely with you to establish a realistic development timeline."
  },
  {
    title: "What platforms can you develop games for?",
    text: "Our digital solution agency specializes in creating video games with code for various platforms, including PCs, consoles, mobile devices, and the web. Our creative staffing analyzes your target audience and project goals to recommend the most suitable platform(s) for your game."
  },
  {
    title: "How do you ensure the game's mechanics and design engage players effectively?",
    text: "Player engagement is a top priority. We conduct thorough gameplay testing, ensuring mechanics are intuitive and enjoyable. Our game designers pay attention and collaborate closely to create visually appealing environments, characters, and interfaces that enhance the player experience."
  },
  {
    title: "What ongoing support does your digital solution agency offer after the game is launched?",
    text: "Player engagement is a top priority. We conduct thorough gameplay testing, ensuring mechanics are intuitive and enjoyable. Our game designers pay attention and collaborate closely to create visually appealing environments, characters, and interfaces that enhance the player experience."
  },
];

const carouselImages = [
  {
    src: "/1.png",
    alt: "Game Development 1"
  },
  {
    src: "/6.png",
    alt: "Game Development 5"
  },
  {
    src: "/3.png",
    alt: "Game Development 3"
  },
  {
    src: "/4.png",
    alt: "Game Development 1"
  },
  {
    src: "/9.png",
    alt: "Game Development 2"
  },
  {
    src: "/6.png",
    alt: "Game Development 3"
  },
  {
    src: "/7.png",
    alt: "Game Development 1"
  },
  {
    src: "/8.png",
    alt: "Game Development 2"
  },
  {
    src: "/9.png",
    alt: "Game Development 3"
  },
];

const WebDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = carouselImages.length;
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [slidesCount]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
  };

  const arrowSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <>
      <Box width="100%" bg="black" gap={10}>
        {/* Hero Section */}
        <Box
          width="100%"
          maxW={{ base: "100%", xl: "1400px", "2xl": "1720px" }}
          color="white"
          py={{ base: 8, md: 10, xl: 14 }}
          px={{ base: 4, md: 6, xl: 8 }}
          mx="auto"
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          {/* Left Content */}
          <Box
            width={{ base: '100%', md: '50%' }}
            pr={{ md: 10 }}
            mb={{ base: 10, md: 0 }}
          >
            <Text fontSize={{ base: "18px", md: "24px", xl: "26px" }} color="yellow.400" fontWeight="bold" mb={2}>
              Top Web Development Services Company
            </Text>
            <Heading fontSize={{ base: "24px", md: "36px", xl: "40px", "2xl": "48px" }} lineHeight={{ base: "32px", md: "45px" }} fontWeight="600" mb={6}>
              Seamless Web Solutions Services From Pixels To Performance
            </Heading>
            <Stack spacing={{ base: 3, md: 4, xl: 5 }} fontSize={{ base: "14px", md: "18px", xl: "20px" }} color="gray.300">
              <Text>
                Empower your digital presence with our leading Web Development company services. Our top rated web developers with creative staffing craft tailored business leads websites, e commerce websites for business, or any website that combines stunning design with seamless functionality, creating immersive user experiences.
              </Text>
              <Text>
                From e commerce websites for business platforms to interactive business portfolio websites, our top notch developers bring your vision to life. Elevate your online brand and engage your audience with websites that captivate, inform, and inspire action.
              </Text>
            </Stack>

            {/* Carousel for Mobile View */}
            {isMobile && (
              <Box width="100%" position="relative" mt={8}>
                <Box
                  position="relative"
                  height={{ base: "250px", sm: "300px" }}
                  borderRadius="md"
                  overflow="hidden"
                  _hover={{
                    '& .view-button': {
                      opacity: 1
                    }
                  }}
                >
                  {carouselImages.map((image, index) => (
                    <Box
                      key={index}
                      position="absolute"
                      top="0"
                      left="0"
                      width="100%"
                      height="100%"
                      opacity={index === currentSlide ? 1 : 0}
                      transition="opacity 0.5s ease-in-out"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                      />
                      <Button
                        className="view-button"
                        position="absolute"
                        bottom="20px"
                        left="50%"
                        transform="translateX(-50%)"
                        bg="yellow.400"
                        color="black"
                        borderRadius="40px"
                        border="3px solid black"
                        width={{ base: "120px" }}
                        height={{ base: "32px" }}
                        fontSize={{ base: "12px" }}
                        opacity={0}
                        transition="opacity 0.3s ease"
                        _hover={{
                          bg: "gray.100"
                        }}
                      >
                        View Website
                      </Button>
                    </Box>
                  ))}
                </Box>
                <IconButton
                  aria-label="Previous slide"
                  position="absolute"
                  left="2"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={prevSlide}
                  size={arrowSize}
                  borderRadius="full"
                  bg="blackAlpha.800"
                  color="white"
                  zIndex={1}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </IconButton>
                <IconButton
                  aria-label="Next slide"
                  position="absolute"
                  right="2"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={nextSlide}
                  size={arrowSize}
                  borderRadius="full"
                  bg="blackAlpha.800"
                  color="white"
                  zIndex={1}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </IconButton>
              </Box>
            )}

            {/* Pricing and CTA */}
            <Box mt={8}>
              <Text color="yellow.400" fontWeight="bold" fontSize={{ base: "18px", md: "24px" }}>
                Web Development Charges :
              </Text>
              <Text fontSize={{ base: "20px", md: "24px" }} fontWeight="bold" mt={6}>
                $30 - $60/ Hour
              </Text>
              <Button
                width={{ base: '100%', md: '150px' }}
                mt={6}
                border="2px solid yellow"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "14px", md: "16px" }}
                py={{ base: 6, md: 6 }}
              >
                Let's Talk
              </Button>
            </Box>
          </Box>

          {/* Carousel for Desktop View */}
          {!isMobile && (
            <Box
              width={{ base: '100%', md: '45%' }}
              position="relative"
              mt={{ base: 0, md: 10 }}
            >
              <Box
                position="relative"
                height={{ md: "400px", xl: "500px" }}
                borderRadius="md"
                overflow="hidden"
                _hover={{
                  '& .view-button': {
                    opacity: 1
                  }
                }}
              >
                {carouselImages.map((image, index) => (
                  <Box
                    key={index}
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    opacity={index === currentSlide ? 1 : 0}
                    transition="opacity 0.5s ease-in-out"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width="100%"
                      height="100%"
                      objectFit="contain"
                    />
                    <Button
                      className="view-button"
                      position="absolute"
                      bottom="20px"
                      left="50%"
                      transform="translateX(-50%)"
                      bg="yellow.400"
                      color="black"
                      borderRadius="40px"
                      border="3px solid black"
                      width={{ md: "160px" }}
                      height={{ md: "40px" }}
                      fontSize={{ md: "14px" }}
                      opacity={0}
                      transition="opacity 0.3s ease"
                      _hover={{
                        bg: "gray.100"
                      }}
                    >
                      View Website
                    </Button>
                  </Box>
                ))}
              </Box>
              <IconButton
                aria-label="Previous slide"
                position="absolute"
                left="2"
                top="50%"
                transform="translateY(-50%)"
                onClick={prevSlide}
                size={arrowSize}
                borderRadius="full"
                bg="blackAlpha.800"
                color="white"
                zIndex={1}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </IconButton>
              <IconButton
                aria-label="Next slide"
                position="absolute"
                right="2"
                top="50%"
                transform="translateY(-50%)"
                onClick={nextSlide}
                size={arrowSize}
                borderRadius="full"
                bg="blackAlpha.800"
                color="white"
                zIndex={1}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </IconButton>
            </Box>
          )}
        </Box>

        {/* Services Section */}
        <Box
          width="100%"
          maxW={{ base: "100%", xl: "1400px", "2xl": "1720px" }}
          color="white"
          py={{ base: 8, md: 10, xl: 14 }}
          px={{ base: 4, md: 6, xl: 8 }}
          mt={10}
          mx="auto"
        >
          <Heading fontSize={{ base: "24px", md: "36px", xl: "42px", "2xl": "48px" }} fontWeight="600" textAlign="center">
            How We Do It
          </Heading>
          <Text fontSize={{ base: "16px", md: "22px", xl: "24px" }} textAlign="center" mt={6}>
            Our best Game Development company in the world fuses innovation with pixels, transforming concepts into interactive realities that ignite player passions and push gaming boundaries.
          </Text>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
            gap={{ base: 4, md: 6, xl: 8 }}
            mt={10}
          >
            {cards.map((service, index) => (
              <GridItem
                key={index}
                p={{ base: 4, md: 6 }}
                borderRadius="lg"
                boxShadow="md"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                textAlign="center"
                gap={4}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  mb={4}
                  objectFit="contain"
                  width={{ base: "200px", md: "250px", xl: "300px", "2xl": service.width }}
                  height={{ base: "200px", md: "250px", xl: "300px", "2xl": service.height }}
                  display="block"
                  mx="auto"
                />
                <Heading
                  fontSize={{ base: "18px", md: "22px", xl: "24px", "2xl": "28px" }}
                  fontWeight="semibold"
                  mb={2}
                >
                  {service.title}
                </Heading>
                <Text
                  fontSize={{ base: "14px", md: "18px", xl: "20px" }}
                  color="gray.300"
                >
                  {service.desc}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box width="100%" bg="rgb(28, 28, 28)">
        <Box
          width="100%"
          maxW={{ base: "100%", xl: "1400px", "2xl": "1720px" }}
          color="white"
          py={{ base: 8, md: 10, xl: 14 }}
          px={{ base: 4, md: 6, xl: 8 }}
          mx="auto"
          alignItems="center"
        >
          <Heading fontSize={{ base: "24px", md: "36px", xl: "42px", "2xl": "48px" }} fontWeight="600" textAlign="center" mt={10}>
            Our Professional Website Development Services Process
          </Heading>
          <Flex flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "center", md: "flex-start" }}>
            <Box width={{ base: "100%", md: "70%" }} mt={10} mb={10}>
              <Text spacing={{ base: 1, md: 2, xl: 4 }} fontSize={{ base: "14px", md: "16px", xl: "18px", "2xl": "20px" }}>
                At WeBring, our professional Website Development services process is a well-orchestrated journey from concept to reality. We begin by understanding your business, design an interface that is captivating, and developing a responsive site free from bugs with the latest development technologies.
              </Text>
              <Text spacing={{ base: 1, md: 2, xl: 4 }} fontSize={{ base: "14px", md: "16px", xl: "18px", "2xl": "20px" }} mt={5}>
                After thorough usability testing in user interface design and its functionality, we integrate SEO oriented content, launch your site, and provide ongoing support. Our creative staffing also tracks performance and makes optimizations to keep your online presence strong.
              </Text>
              <Text spacing={{ base: 1, md: 2, xl: 4 }} fontSize={{ base: "14px", md: "16px", xl: "18px", "2xl": "20px" }} mt={5}>
                We’re committed to delivering a website that not only meets but exceeds your expectations, ensuring it represents your brand and connects with your audience effectively. Contact our digital solution agency today to get started on this transformative digital journey.
              </Text>
            </Box>
            <Image
              src="/mobile-app-dev.png"
              width={{ base: "80%", md: "25%" }}
              height={{ base: "auto", md: "60%" }}
              mt={{ base: 6, md: 10 }}
              mb={10}
              objectFit="contain"
            />
          </Flex>
        </Box>

        <Box
          width="100%"
          maxW={{ base: "100%", xl: "1400px", "2xl": "1720px" }}
          color="white"
          py={{ base: 8, md: 10, xl: 14 }}
          px={{ base: 4, md: 6, xl: 8 }}
          mx="auto"
          alignItems="center"
        >
          <Heading fontSize={{ base: "24px", md: "36px", xl: "42px", "2xl": "48px" }} fontWeight="600" textAlign="center" mt={10}>
            Frequently Asked Questions
          </Heading>
          <Text fontSize={{ base: "16px", md: "22px", xl: "24px" }} textAlign="center" mt={6}>
            Frequently Asked Questions (FAQs) about Game Design and Game Development offer valuable insights into the world of creating captivating and immersive digital games. These answers address common queries, shedding light on the process, the latest development technologies, and the unique strategies involved, ensuring a comprehensive understanding of how our Game Design and Game Development services can transform your gaming ideas into engaging realities.
          </Text>
          <Box width={{ base: "100%", md: "80%", xl: "70%", "2xl": "60%" }} margin="auto" mt={10} mb={10}>
            <Accordion.Root>
              {items.map((item, index) => (
                <Accordion.Item key={index} value={item.value} mt={5}>
                  <Accordion.ItemTrigger
                    onClick={() => handleToggle(index)}
                    bg="#2C2B2B"
                    height={{ base: "auto", md: "60px" }}
                    borderRadius="10px"
                    padding={{ base: "12px", md: "10px" }}
                    cursor="pointer"
                    display="flex"
                    alignItems="center"
                  >
                    <Text fontSize={{ base: "14px", sm: "15px", md: "16px" }} flex="1" ml={{ base: 4, md: 10 }} textAlign="left">
                      {item.title}
                    </Text>
                    <Box fontSize={{ base: "18px", sm: "20px", md: "24px" }} mr={{ base: 4, md: 10 }}>
                      {openIndex === index ? '−' : '+'}
                    </Box>
                  </Accordion.ItemTrigger>
                  {openIndex === index && (
                    <Accordion.ItemContent>
                      <Accordion.ItemBody fontSize={{ base: "14px", sm: "15px", md: "16px" }} ml={{ base: 4, md: 12 }} mr={{ base: 4, md: 10 }} mt={2} mb={2}>
                        {item.text}
                      </Accordion.ItemBody>
                    </Accordion.ItemContent>
                  )}
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WebDevelopment;