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
    title: "Build with Purpose",
    desc: "We begin by understanding your business goals and brand story. Our developers then craft a custom Shopify store that’s visually aligned, feature-rich, and optimized for all devices. From layout to checkout, every element is designed to guide users smoothly toward purchase, ensuring your store stands out in a competitive market.",
    image: "/Optimize-Digital-Content-scaled.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Secure Every Click",
    desc: "At WeBring, customer trust and data safety are non-negotiable. Our team implements robust security features from SSL certification and secure payment gateways to data encryption ensuring every transaction is safe and your store complies with the latest industry standards.",
    image: "/Research-scaled.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Test for Perfection",
    desc: "Before launch, your Shopify store undergoes rigorous quality checks. Our QA specialists test for speed, responsiveness, UX flow, and functionality across devices and browsers. We fine-tune every component to deliver a flawless and engaging shopping experience.",
    image: "/Video-scripts.png",
    height: "350px",
    width: "350px",
  },
];

const items = [
  {
    title: "What is Shopify, and why should I use it for my online store?",
    text: "Shopify is an eCommerce platform that allows you to create and manage your online store with ease. It provides a variety of tools to customize your store, manage inventory, process payments, and market your products. Shopify is known for its user-friendly interface, secure payment options, and reliable customer support, making it a great choice for both new and experienced business owners.",
  },
  {
    title: "How can I improve the speed and performance of my Shopify store?",
    text: "Optimizing the speed of your Shopify store is crucial for providing a better user experience and improving conversion rates. You can enhance store performance by optimizing images, using lightweight themes, and limiting the use of heavy apps. We also suggest conducting regular speed tests and addressing any issues that could slow down your site.",
  },
  {
    title: "How can I manage inventory effectively with Shopify?",
    text: "Shopify has a built-in inventory management system that allows you to track stock levels, set up alerts for low inventory, and manage orders seamlessly. You can also integrate third-party apps for more advanced inventory features, such as bulk import/export and multi-location tracking, to keep your business running smoothly.",
  },
  {
    title: "Can I sell internationally with Shopify?",
    text: "Yes, Shopify supports international sales, making it easy to sell in multiple countries. You can set up multiple currencies, offer localized payment methods, and adjust shipping rates for international orders. Shopify also provides the tools you need to manage taxes, customs, and other international regulations for a smooth global operation.",
  },
  {
    title: "How do I track and analyze my Shopify store’s performance?",
    text: "Shopify offers built-in analytics tools that track your store’s performance, including traffic, sales, and customer behavior. You can also integrate third-party apps like Google Analytics for more detailed insights. Regularly reviewing these analytics helps you understand your customers better and optimize your marketing efforts to improve sales.",
  },
];

const WebDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              Top-Rated Shopify Store Development Company
            </Text>
            <Heading
              fontSize={{ base: "28px", md: "36px", xl: "40px", "2xl": "48px" }}
              lineHeight={"45px"}
              fontWeight={"600"}
              mb={8}
            >
              Bringing Your eCommerce Vision to Life With Seamless Shopify Store
              Development
            </Heading>
            <Stack
              spacing={{ base: 3, md: 4, xl: 5 }}
              fontSize={{ base: "16px", md: "18px", xl: "20px" }}
              color="gray.300"
            >
              <Text>
                Unlock the power of Shopify with our top-rated Shopify Store
                Development services at WeBring. Our expert developers create
                visually engaging, conversion-focused online stores tailored to
                your brand’s identity. With seamless integrations and
                user-friendly features, we build eCommerce platforms that drive
                results and elevate customer experiences.
              </Text>
              <Text>
                Boost your online presence with WeBring’s custom Shopify
                solutions where aesthetic appeal meets powerful functionality
                for maximum impact and growth.
              </Text>
            </Stack>

            {/* Image - Added for Mobile View */}
            <Image
              display={{ base: "block", md: "none" }}
              src="/Content-Writing-1.png"
              alt="content image"
              width="100%"
              height="50%"
              objectFit="cover"
              mt={{ base: 10 }}
            />

            {/* Pricing and CTA */}
            <Box mt={10}>
              <Text
                color="yellow.400"
                fontWeight="bold"
                fontSize={{ base: "20px", md: "24px" }}
              >
                Shopify Store Development Charges :
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

          {/* Right Image - For Non-Mobile */}
          <Box width={{ base: "100%", md: "50%" }} mt={{ base: 0, md: 10 }}>
            <Image
              display={{ base: "none", md: "block" }}
              src="/Content-Writing-1.png"
              alt="content image"
              width="100%"
              height="100%"
              objectFit={{ base: "cover", md: "contain" }}
            />
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
            At WeBring, we turn your vision into a high-performing Shopify store
            designed for scalability, seamless user experience, and measurable
            results.
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
            Frequently Asked Questions (FAQs) about our Shopify Store
            Development services offer valuable insights into the process of
            creating dynamic, user-friendly, and high-converting eCommerce
            platforms. These answers address common queries, highlighting the
            strategic, creative, and technical approaches involved in building
            tailored Shopify stores. They provide a clear understanding of how
            our Shopify Store Development services leverage customizable themes,
            seamless integrations, and SEO-optimized designs to transform your
            business vision into a robust online store that engages diverse
            audiences and drives sales across multiple platforms.
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
