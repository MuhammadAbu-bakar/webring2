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

const cards = [
  {
    title: "Identify Audience",
    desc: "Our Digital Marketing agent skillfully identifies and targets your ideal audience through awesome marketing campaigns, ensuring your message resonates with the right people for maximum impact.",
    image: "/req-gathering.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Define Goals",
    desc: "Our Digital Marketing agent helps you define clear and measurable goals, ensuring your amazing marketing campaigns are purpose-driven and effective.",
    image: "/ui-design.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Allocate Resources",
    desc: "Our Marketing Digital agency strategically allocates resources to optimize memorable ad campaigns, ensuring maximum return on investment and a compelling marketing & social media online presence.",
    image: "/usability-testing.png",
    height: "350px",
    width: "350px",
  },
];

const items = [
  {
    title:
      "What is social media marketing, and why is it important for my business?",
    text: "Social media marketing is the use of platforms like Facebook, Instagram, Twitter, LinkedIn, and others to promote your business, engage with your audience, and build brand awareness. It’s important because it allows businesses to connect with their audience directly, engage in two-way conversations, and showcase their products or services in a more dynamic way. With billions of users worldwide, social media is a powerful marketing channel for businesses to tap into.",
  },
  {
    title: "How can social media marketing help increase sales?",
    text: "Social media marketing helps increase sales by driving traffic to your website, fostering brand awareness, and building relationships with your audience. With strategic content and targeted ads, you can reach the right people at the right time. Engaging content, promotions, and giveaways can encourage followers to take action, ultimately leading to conversions and sales.",
  },
  {
    title: "How do you create a social media strategy for my business?",
    text: "We create a tailored social media strategy by first understanding your business goals, target audience, and industry. Our approach involves identifying the right platforms for your brand, creating engaging content, and scheduling posts to maintain consistency. We also use data-driven insights to adjust the strategy as needed and ensure maximum engagement and reach.",
  },
  {
    title: "How do you measure the success of social media campaigns?",
    text: "We measure the success of social media campaigns by tracking key performance indicators (KPIs) such as engagement rates, follower growth, website traffic, click-through rates, and conversions. We use analytics tools to gather insights and assess the effectiveness of campaigns. Regular reporting ensures that we can fine-tune strategies and deliver optimal results for your business.",
  },
  {
    title: "Do you offer paid social media advertising services?",
    text: "Yes, we offer paid social media advertising services across various platforms, including Facebook, Instagram, LinkedIn, and Twitter. Paid ads are a great way to reach a larger and more targeted audience quickly. We create and manage ad campaigns designed to achieve your business goals, whether it's increasing brand awareness, driving traffic, or generating sales.",
  },
];

// Carousel images data
const carouselImages = [
  {
    src: "/social2.png",
    alt: "Game Development 1",
  },
  {
    src: "/social1.png", // Add your second image path
    alt: "Game Development 5",
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

  const arrowSize = useBreakpointValue({ base: "sm", md: "md" });

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
              fontSize={{ base: "20px", md: "24px", xl: "26px" }}
              color="yellow.400"
              fontWeight="bold"
              mb={2}
            >
              Digital Marketing & Social Media Marketing
            </Text>
            <Heading
              fontSize={{ base: "28px", md: "36px", xl: "40px", "2xl": "48px" }}
              lineHeight={"45px"}
              fontWeight={"600"}
              mb={8}
            >
              Grow Your Business Through Our Marketing Digital Agency
            </Heading>
            <Stack
              spacing={{ base: 3, md: 4, xl: 5 }}
              fontSize={{ base: "16px", md: "18px", xl: "20px" }}
              color="gray.300"
            >
              <Text>
                Harness the power of Digital Marketing & Social Media Marketing
                for service business through our Marketing Digital Agency to
                amplify your brand’s reach and engagement. Our Digital Marketing
                & Social Media Marketing services strategic approach ensures
                tailored, memorable ad campaigns across various platforms,
                driving traffic, building a loyal community, and boosting
                conversions.
              </Text>
              <Text>
                Let us transform your marketing & social media presence into a
                dynamic, impactful, and revenue-generating asset. Let’s
                collaborate!
              </Text>
            </Stack>

            {/* Pricing and CTA */}
            <Box mt={10}>
              <Text
                color="yellow.400"
                fontWeight="bold"
                fontSize={{ base: "20px", md: "24px" }}
              >
                Social Media Marketing Charges :
              </Text>
              <Text
                fontSize={{ base: "22px", md: "24px" }}
                fontWeight="bold"
                mt={8}
              >
                $15 - $30/ Hour
              </Text>
              <Button
                width={{ base: "100%", md: "150px" }}
                mt={8}
                border="2px solid yellow"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                Let's Talk
              </Button>
            </Box>
          </Box>

          {/* Right Image - Carousel */}
          <Box
            width={{ base: "100%", md: "45%" }}
            position="relative"
            mt={{ base: 0, md: 10 }} // Adjust top margin for mobile
          >
            {/* Carousel Images - adjust height for mobile */}
            <Box
              position="relative"
              height={{ base: "300px", md: "80%" }} // Adjust height for mobile
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
                      bg: "gray.100",
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
            fontSize={{ base: "30px", md: "36px", xl: "42px", "2xl": "48px" }}
            fontWeight="600"
            textAlign={"center"}
          >
            How We Do It
          </Heading>
          <Text
            fontSize={{ base: "18px", md: "22px", xl: "24px" }}
            textAlign={"center"}
            mt={10}
          >
            Amplifying brands through creating ad campaigns, engaging SEO
            oriented content, and data-driven unique strategies for impactful
            online connections.{" "}
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
            Frequently Asked Questions (FAQs) about Game Design and Game
            Development offer valuable insights into the world of creating
            captivating and immersive digital games. These answers address
            common queries, shedding light on the process, the latest
            development technologies, and the unique strategies involved,
            ensuring a comprehensive understanding of how our Game Design and
            Game Development services can transform your gaming ideas into
            engaging realities.
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
                    bg={"#2C2B2B"}
                    height={"60px"}
                    borderRadius={"10px"}
                    padding={"10px"}
                    cursor="pointer"
                  >
                    <Span
                      fontSize={{ base: "10px", sm: "15px" }}
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
                        fontSize={{ base: "10px", sm: "15px" }}
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
