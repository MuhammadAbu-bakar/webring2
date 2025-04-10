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
  Span,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';


const cards = [
  {
    title: "Requirements Gathering",
    desc: "In our top Web Development services company, we embark on a meticulous journey of understanding your unique needs. Through comprehensive consultation, we delve deep into your vision, goals, and preferences, ensuring a tailored website development using WordPress process that transforms your ideas into a stunning digital reality.",
    image: "/Requirements-Gathering-1536x1024.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "UX/UI Design",
    desc: "Enhance user satisfaction with our UX/UI Design services. Our top web designers in the world design user interfaces that prioritize seamless navigation and meaningful interactions, transforming your digital platform into a user-friendly haven.",
    image: "/UXUI-Design.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Usability Testing",
    desc: "Our top notch Web Development services include rigorous Usability Testing in UX design functionality, ensuring your website's functionality and design align harmoniously to create intuitive, user-centric journeys. Our creative staffing meticulously analyzes every interaction, guaranteeing a flawlessly navigable and engaging digital environment for your visitors.",
    image: "/Usability-Testing-1536x1064.png",
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

// Carousel images data
const carouselImages = [
  {
      src: "assets/images/Game-Development-1.png",
      alt: "Game Development 1"
  },
  {
      src: "assets/images/2f32540a-656f-4c16-a950-6874fecf8d04.webp", // Add your second image path
      alt: "Game Development 2"
  },
  {
      src: "assets/images/original-56cd2994f1d4d7880bc334c2ecb1a767.webp", // Add your third image path
      alt: "Game Development 3"
  },
  {
      src: "assets/images/Game-Development-1.png",
      alt: "Game Development 1"
  },
  {
      src: "assets/images/2f32540a-656f-4c16-a950-6874fecf8d04.webp", // Add your second image path
      alt: "Game Development 2"
  },
  {
      src: "assets/images/original-56cd2994f1d4d7880bc334c2ecb1a767.webp", // Add your third image path
      alt: "Game Development 3"
  },
  {
      src: "assets/images/Game-Development-1.png",
      alt: "Game Development 1"
  },
  {
      src: "assets/images/2f32540a-656f-4c16-a950-6874fecf8d04.webp", // Add your second image path
      alt: "Game Development 2"
  },
  {
      src: "assets/images/original-56cd2994f1d4d7880bc334c2ecb1a767.webp", // Add your third image path
      alt: "Game Development 3"
  },
  {
      src: "assets/images/original-56cd2994f1d4d7880bc334c2ecb1a767.webp", // Add your third image path
      alt: "Game Development 3"
  },
];

const WebDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = carouselImages.length;

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Auto-rotate carousel
  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
      }, 3500); // Change slide every 5 seconds
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
            <Text fontSize={{ base: "20px", md: "24px", xl: "26px" }} color="yellow.400" fontWeight="bold" mb={2}>
              Top Web Development Services Company
            </Text>
            <Heading fontSize={{ base: "28px", md: "36px", xl: "40px", "2xl": "48px" }} lineHeight={"45px"} fontWeight={"600"} mb={8}>
              Seamless Web Solutions Services From Pixels To Performance
            </Heading>
            <Stack spacing={{ base: 3, md: 4, xl: 5 }} fontSize={{ base: "16px", md: "18px", xl: "20px" }} color="gray.300">
              <Text>
                  Empower your digital presence with our leading Web Development company services. Our top rated web developers with creative staffing craft tailored business leads websites, e commerce websites for business, or any website that combines stunning design with seamless functionality, creating immersive user experiences.
              </Text>
              <Text>
                  From e commerce websites for business platforms to interactive business portfolio websites, our top notch developers bring your vision to life. Elevate your online brand and engage your audience with websites that captivate, inform, and inspire action.
              </Text>
            </Stack>

            {/* Pricing and CTA */}
            <Box mt={10}>
              <Text color="yellow.400" fontWeight="bold" fontSize={{ base: "20px", md: "24px" }}>
              Web Development Charges :
              </Text>
              <Text fontSize={{ base: "22px", md: "24px" }} fontWeight="bold" mt={8}>
                $30 - $60/ Hour
              </Text>
              <Button
                width={{ base: '100%', md: '150px' }}
                mt={8}
                border="2px solid yellow"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                Let's Talk
                <Image
                  src="assets/images/ddd1c2476bcb099d675bf282f0a40192-removebg-preview.png"
                  width="30px"
                  ml={2}
                />
              </Button>
            </Box>
          </Box>

          {/* Right Image - Carousel */}
          <Box
            width={{ base: '100%', md: '45%' }}
            position="relative"
            mt={{ base: 0, md: 10 }} // Adjust top margin for mobile
          >
            {/* Carousel Images - adjust height for mobile */}
            <Box
              position="relative"
              height={{ base: "300px", md: "80%" }} // Adjust height for mobile
              borderRadius="md"
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
                    objectFit={{ base: "cover", md: "contain" }} // Adjust object fit for mobile
                  />
                  {/* View Website Button */}
                  <Button
                    className="view-button"
                    position="absolute"
                    bottom="20px"
                    left="50%"
                    transform="translateX(-50%)"
                    bg="yellow.400"
                    color="black"
                    borderRadius="40px"
                    border={"3px solid black"}
                    width={40}
                    height={10}
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
           
            {/* Navigation Arrows */}
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
              <Image
                width={6}
                src='/assets/images/right-arrow-dark-mode-glyph-ui-icon-navigation-direction-angle-bracket-user-interface-design-white-silhouette-symbol-on-black-space-solid-pictogram-for-web-mobile-isolated-illustration-vector-removebg.png'
                transform="rotate(180deg)"
              />
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
              <Image
                width={6}
                src='/assets/images/right-arrow-dark-mode-glyph-ui-icon-navigation-direction-angle-bracket-user-interface-design-white-silhouette-symbol-on-black-space-solid-pictogram-for-web-mobile-isolated-illustration-vector-removebg.png'
              />
            </IconButton>
          </Box>
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
          <Heading fontSize={{ base: "30px", md: "36px", xl: "42px", "2xl": "48px" }} fontWeight="600" textAlign={"center"}>How We Do It</Heading>
          <Text fontSize={{ base: "18px", md: "22px", xl: "24px" }} textAlign={"center"} mt={10} >Our best Game Development company in the world fuses innovation with pixels, transforming concepts into interactive realities that ignite player passions and push gaming boundaries.</Text>
          <Flex
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            mt={10}
            gap={8}
          >
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
              gap={{ base: 4, md: 6, xl: 8 }}
            >
              {cards.map((service, index) => (
                <GridItem
                  key={index}
                  p={6}
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
                    width={{ base: "250px", md: "300px", xl: "350px", "2xl": service.width }}
                    height={{ base: "250px", md: "300px", xl: "350px", "2xl": service.height }}
                    display="block"
                    mx="auto"
                  />
                  <Heading
                    fontSize={{ base: "20px", md: "22px", xl: "24px", "2xl": "28px" }}
                    fontWeight="semibold"
                    mb={2}
                  >
                    {service.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "16px", md: "18px", xl: "20px" }}
                    color="gray.600"
                  >
                    {service.desc}
                  </Text>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Box>
      </Box>

      <Box width={"100%"} bg={"rgb(28, 28, 28)"}>
        <Box
          width="100%"
          maxW={{ base: "100%", xl: "1400px", "2xl": "1720px" }}
          color="white"
          py={{ base: 8, md: 10, xl: 14 }}
          px={{ base: 4, md: 6, xl: 8 }}
          mx="auto"
          alignItems="center"
        >
          <Heading fontSize={{ base: "30px", md: "36px", xl: "42px", "2xl": "48px" }} fontWeight="600" textAlign={"center"} mt={10}>
              Our Professional Website Development Services Process
          </Heading>
          <Flex>
              <Box width={"70%"} mt={20} mb={10}>
                  <Text spacing={{ base: 1, md: 2, xl: 4 }} fontSize={{ base: "15px", md: "16px", xl: "18px", "2xl": "20px" }}>At WeBring, our professional Website Development services process is a well-orchestrated journey from concept to reality. We begin by understanding your business, design an interface that is captivating, and developing a responsive site free from bugs with the latest development technologies.</Text>
                  <Text spacing={{ base: 1, md: 2, xl: 4 }} fontSize={{ base: "15px", md: "16px", xl: "18px", "2xl": "20px" }} mt={5}>After thorough usability testing in user interface design and its functionality, we integrate SEO oriented content, launch your site, and provide ongoing support. Our creative staffing also tracks performance and makes optimizations to keep your online presence strong.</Text>
                  <Text spacing={{ base: 1, md: 2, xl: 4 }} fontSize={{ base: "15px", md: "16px", xl: "18px", "2xl": "20px" }} mt={5}>We’re committed to delivering a website that not only meets but exceeds your expectations, ensuring it represents your brand and connects with your audience effectively. Contact our digital solution agency today to get started on this transformative digital journey.</Text>
              </Box>
              <Image src='/assets/images/Mobile-Application-Development-Mobile-1-1.png' width={{base: "35%", md: "25%"}} height={"60%"} mt={10} mb={10} />
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
          <Heading fontSize={{ base: "30px", md: "36px", xl: "42px", "2xl": "48px" }} fontWeight="600" textAlign={"center"} mt={10}>Frequently Asked Questions</Heading>
          <Text fontSize={{ base: "18px", md: "22px", xl: "24px" }} textAlign={"center"} mt={10} >Frequently Asked Questions (FAQs) about Game Design and Game Development offer valuable insights into the world of creating captivating and immersive digital games. These answers address common queries, shedding light on the process, the latest development technologies, and the unique strategies involved, ensuring a comprehensive understanding of how our Game Design and Game Development services can transform your gaming ideas into engaging realities.</Text>
          <Box width={{ base: "100%", md: "80%", xl: "70%", "2xl": "60%" }} margin={"auto"} mt={20} mb={10}>
            <Accordion.Root>
              {items.map((item, index) => (
                <Accordion.Item key={index} value={item.value} mt={5}>
                  <Accordion.ItemTrigger
                    onClick={() => handleToggle(index)}
                    bg={"#2C2B2B"}
                    height={"60px"}
                    borderRadius={"10px"}
                    padding={"10px"}
                    cursor="pointer"
                  >
                    <Span fontSize={{base: "10px", sm: "15px"}} flex="1" ml={10}>{item.title}</Span>
                    <Box fontSize={{base: "20px", sm: "22px", md: "24px"}} fontWeight="bold" mr={10}>
                      {openIndex === index ? '−' : '+'}
                    </Box>
                  </Accordion.ItemTrigger>

                  {openIndex === index && (
                    <Accordion.ItemContent>
                      <Accordion.ItemBody fontSize={{base: "10px", sm: "15px"}} ml={12} mr={10}>{item.text}</Accordion.ItemBody>
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