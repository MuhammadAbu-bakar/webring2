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
} from "@chakra-ui/react";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Requirements Gathering",
    desc: "It all starts with a conversation. We take the time to get to know your brand, your goals, and what makes your business unique. From there, we map out exactly what your website needs—whether it’s a simple portfolio or a complex online store.",
    image: "/req-gathering.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "UX/UI Design",
    desc: "Once we understand your vision, our design team gets to work creating a look and feel that matches it perfectly. Every click, scroll, and interaction is designed to be smooth, intuitive, and easy on the eyes.",
    image: "/ui-design.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Usability Testing",
    desc: "Before we go live, we test everything—on phones, tablets, desktops—you name it. We want to make sure every part of your site works exactly as it should, delivering a seamless experience to every visitor.",
    image: "/usability-testing.png",
    height: "350px",
    width: "350px",
  },
];

const items = [
  {
    title: "What is web development, and how can it benefit my business?",
    text: "Web development is the creation of websites and web applications, focusing on functionality, design, and user experience. It benefits businesses by establishing a professional online presence, improving customer engagement, and enhancing operational efficiency. A well-developed website builds credibility, attracts potential customers, and can directly impact sales and conversions.",
  },
  {
    title: "How long does it take to build a website?",
    text: "The time it takes to build a website depends on the complexity of the project. For a simple website, you can expect a timeline of about 2–4 weeks. However, more intricate websites, such as eCommerce platforms or custom-built applications, may take 6–10 weeks or more. Before we begin the project, we’ll provide a clear roadmap with an estimated timeline so you can plan accordingly.",
  },
  {
    title: "Will my website be mobile-friendly and SEO-optimized?",
    text: "Yes, every website we develop is fully responsive, ensuring that it provides a seamless experience on mobile devices, tablets, and desktops. Furthermore, we build websites with SEO (Search Engine Optimization) best practices in mind, which means your site is optimized for search engines from the start. This can help improve your visibility and ranking in search results, giving your business an edge in a competitive digital landscape.",
  },
  {
    title: "Do you use templates or custom designs?",
    text: "We offer both custom designs and template-based options. If you prefer a fully unique look and feel for your website, our team will create a custom design tailored to your brand. For businesses on a tighter budget or with simpler requirements, we can implement pre-designed templates that still deliver a professional look and functionality but at a more affordable price.",
  },
  {
    title: "What happens after my website goes live?",
    text: "Once your website is live, our commitment doesn’t end. We provide ongoing support and maintenance services to ensure your site remains secure, functional, and up-to-date. This includes regular performance monitoring, backups, software updates, and security checks. If you need any changes or updates, we’re here to help with further optimizations to keep your site running smoothly.",
  },
];

const carouselImages = [
  {
    src: "/1.png",
    alt: "Game Development 1",
  },
  {
    src: "/6.png",
    alt: "Game Development 5",
  },
  {
    src: "/3.png",
    alt: "Game Development 3",
  },
  {
    src: "/4.png",
    alt: "Game Development 1",
  },
  {
    src: "/9.png",
    alt: "Game Development 2",
  },
  {
    src: "/6.png",
    alt: "Game Development 3",
  },
  {
    src: "/7.png",
    alt: "Game Development 1",
  },
  {
    src: "/8.png",
    alt: "Game Development 2",
  },
  {
    src: "/9.png",
    alt: "Game Development 3",
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

  const arrowSize = useBreakpointValue({ base: "sm", md: "md" });
  const navigate = useNavigate();

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
          flexDirection={{ base: "column", md: "row" }}
        >
          {/* Left Content */}
          <Box
            width={{ base: "100%", md: "50%" }}
            pr={{ md: 10 }}
            mb={{ base: 10, md: 0 }}
          >
            <Text
              fontSize={{ base: "18px", md: "24px", xl: "26px" }}
              color="yellow.400"
              fontWeight="bold"
              mb={2}
            >
              Top Web Development Services Company
            </Text>
            <Heading
              fontSize={{ base: "24px", md: "36px", xl: "40px", "2xl": "48px" }}
              lineHeight={{ base: "32px", md: "45px" }}
              fontWeight="600"
              mb={6}
            >
              From Design to Function, We Build Websites That Work
            </Heading>
            <Stack
              spacing={{ base: 3, md: 4, xl: 5 }}
              fontSize={{ base: "14px", md: "18px", xl: "20px" }}
              color="gray.300"
            >
              <Text>
                Looking to stand out online? Our Web Development services are
                all about helping you make a powerful impression. Whether you're
                just starting or want to upgrade your current website, we’re
                here to build something that’s beautiful but also smart,
                responsive, and built for your business goals.
              </Text>
              <Text>
                From elegant business websites to fully-loaded e-commerce
                stores, we bring your ideas to life with creativity and
                technical expertise. Our job? To help you attract, engage, and
                convert your visitors—effortlessly.
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
                    "& .view-button": {
                      opacity: 1,
                    },
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
              <Text
                color="yellow.400"
                fontWeight="bold"
                fontSize={{ base: "18px", md: "24px" }}
              >
                Web Development Charges :
              </Text>
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight="bold"
                mt={6}
              >
                $30 - $60/ Hour
              </Text>
              <Button
                width={{ base: "100%", md: "150px" }}
                mt={6}
                border="2px solid yellow"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "14px", md: "16px" }}
                py={{ base: 6, md: 6 }}
                bg="#FED904"
                color="black"
                fontWeight="700"
                onClick={() => navigate("/contact-form")}
              >
                Let's Talk
              </Button>
            </Box>
          </Box>

          {/* Carousel for Desktop View */}
          {!isMobile && (
            <Box
              width={{ base: "100%", md: "45%" }}
              position="relative"
              mt={{ base: 0, md: 10 }}
            >
              <Box
                position="relative"
                height={{ md: "400px", xl: "500px" }}
                borderRadius="md"
                overflow="hidden"
                _hover={{
                  "& .view-button": {
                    opacity: 1,
                  },
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
          <Heading
            fontSize={{ base: "24px", md: "36px", xl: "42px", "2xl": "48px" }}
            fontWeight="600"
            textAlign="center"
          >
            How We Do It
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "22px", xl: "24px" }}
            textAlign="center"
            mt={6}
          >
            Our approach to web development is a blend of smart coding and
            creative design. We don’t just build websites—we craft digital
            experiences that people love using.
          </Text>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
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
                  width={{
                    base: "200px",
                    md: "250px",
                    xl: "300px",
                    "2xl": service.width,
                  }}
                  height={{
                    base: "200px",
                    md: "250px",
                    xl: "300px",
                    "2xl": service.height,
                  }}
                  display="block"
                  mx="auto"
                />
                <Heading
                  fontSize={{
                    base: "18px",
                    md: "22px",
                    xl: "24px",
                    "2xl": "28px",
                  }}
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
          <Heading
            fontSize={{ base: "24px", md: "36px", xl: "42px", "2xl": "48px" }}
            fontWeight="600"
            textAlign="center"
            mt={10}
            mb={5}
          >
            Our Step-by-Step Web Development Process
          </Heading>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <Box width={{ base: "100%", md: "70%" }} mt={10} mb={10}>
              <Text
                spacing={{ base: 1, md: 2, xl: 4 }}
                fontSize={{
                  base: "14px",
                  md: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
              >
                At WeBring, we follow a clear and collaborative process from
                start to finish. First, we understand your needs. Then, we
                design and develop a custom website that looks great and works
                perfectly across all devices.
              </Text>
              <Text
                spacing={{ base: 1, md: 2, xl: 4 }}
                fontSize={{
                  base: "14px",
                  md: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                mt={10}
              >
                We test it thoroughly, make it search engine–friendly, and help
                you launch it smoothly. Even after the launch, we stick around
                for support and updates. We also track how your site is
                performing and make improvements when needed.
              </Text>
              <Text
                spacing={{ base: 1, md: 2, xl: 4 }}
                fontSize={{
                  base: "14px",
                  md: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                mt={10}
              >
                Your website should grow with your business—and we’re here to
                make sure it does. Ready to bring your digital vision to life?
                Let’s build something incredible together.
              </Text>
            </Box>
            <Image
              src="/mobile-app-dev.png"
              width={{ base: "80%", md: "20%" }}
              height={{ base: "auto", md: "60%" }}
              mt={{ base: 6, md: 10 }}
              mb={10}
              ml="50px"
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
          <Heading
            fontSize={{ base: "24px", md: "36px", xl: "42px", "2xl": "48px" }}
            fontWeight="600"
            textAlign="center"
          >
            Frequently Asked Questions
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "22px", xl: "24px" }}
            textAlign="center"
            mt={10}
          >
            Web development is the process of building and maintaining websites.
            It involves everything from designing a user-friendly interface to
            coding the site’s functionality. Whether you're a startup looking to
            establish an online presence or an established business seeking to
            upgrade your website, our web development services are designed to
            meet your needs. Below are some of the most frequently asked
            questions that can help you understand the importance and process of
            web development.
          </Text>
          <Box
            width={{ base: "100%", md: "80%", xl: "70%", "2xl": "60%" }}
            margin="auto"
            mt={10}
            mb={10}
          >
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
                    <Text
                      fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                      flex="1"
                      ml={{ base: 4, md: 10 }}
                      textAlign="left"
                    >
                      {item.title}
                    </Text>
                    <Box
                      fontSize={{ base: "18px", sm: "20px", md: "24px" }}
                      mr={{ base: 4, md: 10 }}
                    >
                      {openIndex === index ? "−" : "+"}
                    </Box>
                  </Accordion.ItemTrigger>
                  {openIndex === index && (
                    <Accordion.ItemContent>
                      <Accordion.ItemBody
                        fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                        ml={{ base: 4, md: 12 }}
                        mr={{ base: 4, md: 10 }}
                        mt={2}
                        mb={2}
                      >
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
