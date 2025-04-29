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
    title: "User Research Services",
    desc: "Uncover the heartbeat of your audience with our comprehensive User Research services. By delving deep into user behavior, preferences, and needs, our Graphic Design agency services pave the way for informed decisions and remarkable digital experiences. Our creative Graphic Design agency data-driven insights empower you to create creative digital design that resonate, ensuring meaningful interactions that keep users at the forefront of your innovation journey.",
    image: "/req-gathering.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Usability Testing in UX Design",
    desc: "Unlock the potential of your creative digital design in Usability Testing with prototypes. Our creative Graphic Design agency meticulously analyzes user interactions, ensuring seamless and intuitive experiences. Our process is to design user interfaces based on real user insights, resulting in Web & App Design that are not only visually appealing but also effortlessly functional. Elevate user satisfaction and engagement through our expert Usability Testing in UX Design services.",
    image: "/ui-design.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "UX/UI Design",
    desc: "We specialize in UX/UI Design, where user-centric creativity meets seamless functionality. Our creative Graphic Design agency with creative UI UX designers meticulously shapes digital experiences that effortlessly connect users with your brand, ensuring every click, swipe, and interaction leaves a positive and lasting impression. Let our Graphic Design agency services with the best UI UX designers transform your vision into intuitive designs that captivate, engage, and inspire meaningful connections.",
    image: "/usability-testing.png",
    height: "350px",
    width: "350px",
  },
];

const items = [
  {
    title: "What is graphic design, and how can it benefit my brand?",
    text: "Graphic design is the art of visual communication. It involves creating images, logos, layouts, and other design elements that represent your brand and message. Effective graphic design helps establish brand recognition, create a lasting impression, and enhance customer engagement by making your content more visually appealing and memorable. A strong visual identity builds credibility and trust, which ultimately strengthens your brand.",
  },
  {
    title: "Do you create custom logos for businesses?",
    text: "Yes, we specialize in creating unique and professional logos that are custom-designed to reflect your brand’s identity. A well-designed logo is crucial in differentiating your business from competitors and creating a strong visual representation of your brand’s values, making it easier for customers to recognize and remember you.",
  },
  {
    title: "How important is visual consistency across my brand’s materials?",
    text: "Visual consistency is extremely important for your brand’s recognition and credibility. Having a unified design across all your marketing materials—whether it’s your website, social media profiles, brochures, or business cards—helps your audience instantly recognize your brand. Consistency in design elements such as colors, fonts, and imagery creates a cohesive brand experience, which builds trust with your audience.",
  },
  {
    title: "Do you offer print design services as well?",
    text: "Yes, we provide comprehensive print design services. Whether you need business cards, brochures, flyers, banners, or any other printed materials, we ensure that your print designs align with your brand’s identity and look professional. We focus on high-quality designs that make an impact and resonate with your target audience.",
  },
  {
    title: "Can you help me update my existing branding materials?",
    text: "Absolutely! We can update or refresh your existing branding materials to better align with your current business goals, market trends, and audience preferences. Whether it's redesigning your logo, tweaking your color scheme, or creating new marketing collateral, we ensure that your updated branding is modern, relevant, and effective.",
  },
];

// Carousel images data
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

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Auto-rotate carousel
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
      <Box width="100%" bg="white" gap={10}>
        {/* Hero Section */}
        <Box
          width="100%"
          maxW={{ base: "100%", xl: "1400px", "2xl": "1720px" }}
          color="black"
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
              fontSize={{ base: "20px", md: "24px", xl: "26px" }}
              color="#FED904"
              fontWeight="bold"
              mb={2}
            >
              Graphic Designing Services
            </Text>
            <Heading
              fontSize={{ base: "28px", md: "36px", xl: "40px", "2xl": "48px" }}
              lineHeight={"45px"}
              fontWeight={"600"}
              mb={8}
            >
              We Provide Creative Design Solutions And Launch Digital Products
              That Deliver Great User Experiences
            </Heading>
            <Stack
              spacing={{ base: 3, md: 4, xl: 5 }}
              fontSize={{ base: "16px", md: "18px", xl: "20px" }}
              color="gray.700"
            >
              <Text>
                Elevate your brand’s visual identity with our best Graphic
                Design services. Our team of creative UI UX designers minds
                transforms ideas into stunning visuals that leave a lasting
                impact on your audience. From captivating Logo Design and
                company branding to compelling marketing materials, our Graphic
                Designing UI UX services blend artistry with unique strategies
                to craft modern Web Page Designs and App Design in Figma that
                resonate across digital and print platforms.
              </Text>
              <Text pt="20px">
                Let our best Graphic Design services and UX/UI Design services
                enhance your brand’s visual storytelling and design an interface
                to create a memorable presence in today’s dynamic market.
              </Text>
            </Stack>

            {/* Carousel - Added for Mobile View */}
            <Box
              display={{ base: "block", md: "none" }}
              position="relative"
              mt={{ base: 10 }}
              width="100%"
            >
              <Box
                position="relative"
                height={{ base: "300px" }}
                borderRadius="md"
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

            {/* Pricing and CTA */}
            <Box mt={10}>
              <Text
                color="#FED904"
                fontWeight="bold"
                fontSize={{ base: "20px", md: "24px" }}
              >
                Graphic Designing Charges :
              </Text>
              <Text
                fontSize={{ base: "22px", md: "24px" }}
                fontWeight="bold"
                mt={8}
              >
                $30 - $60/ Hour
              </Text>
              <Button
                width={{ base: "100%", md: "150px" }}
                mt={8}
                border="2px solid yellow"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#FED904"
                color="black"
                fontWeight="700"
                onClick={() => navigate("/contact-form")}
              >
                Let's Talk
              </Button>
            </Box>
          </Box>

          {/* Right Image - Carousel for Non-Mobile */}
          <Box
            width={{ base: "100%", md: "45%" }}
            position="relative"
            mt={{ base: 0, md: 10 }}
          >
            <Box
              display={{ base: "none", md: "block" }}
              position="relative"
              height={{ base: "300px", md: "80%" }}
              borderRadius="md"
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
                    objectFit={{ base: "cover", md: "contain" }}
                  />
                </Box>
              ))}
            </Box>

            <Box display={{ base: "none", md: "block" }}>
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
          </Box>
        </Box>

        {/* Services Section */}
        <Box
          width="100%"
          maxW={{ base: "100%", xl: "1400px", "2xl": "1720px" }}
          color="black"
          py={{ base: 8, md: 10, xl: 14 }}
          px={{ base: 4, md: 6, xl: 8 }}
          mt={10}
          mx="auto"
        >
          <Heading
            fontSize={{ base: "30px", md: "36px", xl: "42px", "2xl": "48px" }}
            fontWeight="600"
            textAlign={"center"}
          >
            Creative Design Solutions
          </Heading>
          <Text
            fontSize={{ base: "18px", md: "22px", xl: "24px" }}
            textAlign={"center"}
            mt={10}
          >
            We Design User Interfaces For Delightful Experiences, Understanding
            User Needs
          </Text>
          <Flex
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            mt={10}
            gap={8}
          >
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
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
                    width={{
                      base: "250px",
                      md: "300px",
                      xl: "350px",
                      "2xl": service.width,
                    }}
                    height={{
                      base: "250px",
                      md: "300px",
                      xl: "350px",
                      "2xl": service.height,
                    }}
                    display="block"
                    mx="auto"
                  />
                  <Heading
                    fontSize={{
                      base: "20px",
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

      <Box width={"100%"} bg={"white"}>
        <Box
          width="100%"
          maxW={{ base: "100%", xl: "1400px", "2xl": "1720px" }}
          color="black"
          py={{ base: 8, md: 10, xl: 14 }}
          px={{ base: 4, md: 6, xl: 8 }}
          mx="auto"
          alignItems="center"
        >
          <Heading
            fontSize={{ base: "30px", md: "36px", xl: "42px", "2xl": "48px" }}
            fontWeight="600"
            textAlign={"center"}
            mt={10}
          >
            Frequently Asked Questions
          </Heading>
          <Text
            fontSize={{ base: "18px", md: "22px", xl: "24px" }}
            textAlign={"center"}
            mt={10}
          >
            Frequently Asked Questions (FAQs) about our Graphic Design agency
            services offer valuable insights into the world of visual
            creativity, addressing common queries and demystifying the process
            of crafting compelling Web & App Design that captivate audiences and
            amplify brand identities.
          </Text>
          <Box
            width={{ base: "100%", md: "80%", xl: "70%", "2xl": "60%" }}
            margin={"auto"}
            mt={20}
            mb={10}
          >
            <Accordion.Root>
              {items.map((item, index) => (
                <Accordion.Item key={index} value={item.value} mt={5}>
                  <Accordion.ItemTrigger
                    onClick={() => handleToggle(index)}
                    bg={"#D3D3D3"}
                    height={"60px"}
                    borderRadius={"10px"}
                    padding={"10px"}
                    cursor="pointer"
                  >
                    <Span
                      fontSize={{ base: "10px", sm: "15px", md: "18px" }}
                      flex="1"
                      ml={10}
                    >
                      {item.title}
                    </Span>
                    <Box
                      fontSize={{ base: "20px", sm: "22px", md: "24px" }}
                      fontWeight="bold"
                      mr={10}
                    >
                      {openIndex === index ? "−" : "+"}
                    </Box>
                  </Accordion.ItemTrigger>

                  {openIndex === index && (
                    <Accordion.ItemContent>
                      <Accordion.ItemBody
                        fontSize={{ base: "10px", sm: "15px", md: "18px" }}
                        ml={12}
                        mr={10}
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
