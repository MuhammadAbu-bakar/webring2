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
import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Modular Architecture & Clean Code",
    desc: "We begin with a strong technical foundation using scalable frameworks and modern coding standards. Whether it’s Flutter, React Native, or native development for iOS and Android, our developers write efficient, modular code that supports your app’s features and ensures seamless performance.",
    image: "/req-gathering.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Advanced App Security Protocols",
    desc: "Security is at the core of our app development process. We implement SSL encryption, secure API integration, and data protection protocols to keep your app safe. From user authentication to backend encryption, we follow best practices that meet global data privacy standards.",
    image: "/ui-design.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Multi-Platform Quality Assurance",
    desc: "Your app undergoes rigorous testing across multiple devices and platforms. We check for responsiveness, bug-free performance, and smooth interactions using tools like Firebase, Appium, and manual QA. This ensures a seamless experience for all users, no matter the device.",
    image: "/usability-testing.png",
    height: "350px",
    width: "350px",
  },
];

const items = [
  {
    title: "What is app development, and why does my business need it?",
    text: "App development involves creating software applications for mobile (iOS/Android) or desktop platforms to solve business challenges, engage customers, or streamline operations. A well-built app can increase customer retention by up to 90%, boost sales through in app purchases, and give your business a competitive edge in today's mobile,first world.",
  },
  {
    title: "How long does it take to develop a mobile app?",
    text: "Development timelines vary based on complexity: MVP apps take 2-4 months, mid-range apps with custom features require 4-8 months, and enterprise-grade solutions may need 8+ months. We follow agile sprints with weekly demos to keep you informed throughout the process.",
  },
  {
    title: "Will my app work on both iOS and Android?",
    text: "Yes! We specialize in cross-platform development (React Native/Flutter) for simultaneous iOS and Android launches with native-like performance. For resource-intensive apps, we recommend separate native development (Swift for iOS, Kotlin for Android) to maximize device capabilities.",
  },
  {
    title: "Do you build apps from scratch or use templates?",
    text: "We offer both approaches: 100% custom-coded apps for unique business needs and template-based solutions (using vetted frameworks) for faster deployment. During discovery, we'll recommend the best option based on your budget, timeline, and technical requirements.",
  },
  {
    title: "What support do you provide after launch?",
    text: "Our post-launch package includes 3-6 months of free bug fixes, performance optimization, and store submission support. We also offer ongoing maintenance plans covering feature updates, security patches, and analytics monitoring to ensure your app stays competitive.",
  },
  {
    title: "How do you ensure app security?",
    text: "We implement enterprise-grade security including: data encryption (AES-256), biometric authentication, secure API gateways, regular penetration testing, and compliance with GDPR/CCPA standards. All apps undergo rigorous security audits before launch.",
  },
  {
    title: "Can you integrate with our existing systems?",
    text: "Absolutely. We specialize in seamless integrations with: Payment gateways (Stripe, PayPal), CRMs (Salesforce, HubSpot), ERPs (SAP, Oracle), and custom APIs. Our team handles everything from API development to legacy system modernization.",
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
              Top Rated Mobile App Development Company
            </Text>
            <Heading
              fontSize={{ base: "24px", md: "36px", xl: "40px", "2xl": "48px" }}
              lineHeight={{ base: "32px", md: "45px" }}
              fontWeight="600"
              mb={6}
            >
              Turning Your Vision Into High-Performance Apps for Android and iOS
            </Heading>
            <Stack
              spacing={{ base: 3, md: 4, xl: 5 }}
              fontSize={{ base: "14px", md: "18px", xl: "20px" }}
              color="gray.300"
            >
              <Text>
                Bring your ideas to life with our expert mobile app development
                services for both Android and iOS. Whether you’re building a
                business tool, a customer-facing app, or a bold new product, our
                skilled team of developers and designers work together to
                deliver seamless, user-friendly mobile solutions.
              </Text>
              <Text>
                From the first spark of an idea to the final launch, we create
                innovative apps that blend sleek design with intuitive
                functionality—crafted to captivate your audience and drive real
                engagement.
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
                App Development Charges :
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
            How We Bring Your App to Life
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "22px", xl: "24px" }}
            textAlign="center"
            mt={6}
          >
            Our top-rated mobile app development team combines the latest
            technology with thoughtful design to turn your vision into an
            intuitive digital experience that works flawlessly across both
            Android and iOS.
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
          >
            Our Proven App Development Process
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
                At WeBring, our app development journey is built around you. We
                start by listening—to your goals, your users, and your ideas.
                Then, we design a polished, intuitive interface and build a
                powerful app using the latest mobile frameworks.
              </Text>
              <Text
                spacing={{ base: 1, md: 2, xl: 4 }}
                fontSize={{
                  base: "14px",
                  md: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                mt={5}
              >
                Once your app is tested and ready, we launch it to the world and
                stay by your side with updates, performance tracking, and
                ongoing support. With a focus on innovation and reliability, we
                create apps that don’t just function—they stand out.
              </Text>
              <Text
                spacing={{ base: 1, md: 2, xl: 4 }}
                fontSize={{
                  base: "14px",
                  md: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                mt={5}
              >
                Let’s bring your vision to life. Connect with us and discover
                how a great app can elevate your brand and transform how you do
                business.
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
          <Heading
            fontSize={{ base: "24px", md: "36px", xl: "42px", "2xl": "48px" }}
            fontWeight="600"
            textAlign="center"
            mt={10}
          >
            Frequently Asked Questions
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "22px", xl: "24px" }}
            textAlign="center"
            mt={6}
          >
            App development is the process of designing, building, and deploying
            software applications for mobile devices (iOS/Android) or desktops,
            combining intuitive user interfaces with robust backend
            functionality. Whether you need a customer-facing app, an enterprise
            solution, or a game, our development services cover everything from
            concept to launch including UI/UX design, cross-platform
            compatibility, API integrations, security, and post-launch support
            to deliver high-performance apps tailored to your business goals.
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
