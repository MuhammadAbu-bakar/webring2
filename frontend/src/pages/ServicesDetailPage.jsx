import {
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    Image,
    VStack,
    Flex,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import React from "react";
   
  const services = [
    {
      title: "Requirements Gathering",
      desc: "We begin by thoroughly understanding your unique needs. Through in-depth consultations, we dive into your vision, goals, and preferences, ensuring a tailored web development process that turns your ideas into a stunning digital reality using WordPress.",
      image:
        "/two-female-multinational-students-have-consultancy-with-professional-coach-check-graphic-outlay-architect-project-brainstrom-together-pose-coworking-space-make-blueprints-sketches.png",
    },
    {
      title: "UX/UI Design",
      desc: "Our expert UX/UI designers prioritize user satisfaction by crafting intuitive, seamless interfaces. We focus on creating designs that enhance navigation and foster meaningful interactions, transforming your platform into a user-friendly experience.",
      image: "/high-angle-hands-holding-post-its.png",
    },
    {
      title: "Usability Testing",
      desc: "As part of our comprehensive web development services, we conduct rigorous usability testing to ensure your website’s design and functionality are perfectly aligned. Our team carefully analyzes every interaction, guaranteeing an intuitive and engaging user experience that keeps your visitors coming back.",
      image: "/female-web-designer-with-papers-notes-office.png",
    },
  ];
   
  function ServicesDetail() {

    const navigate = useNavigate();

    return (
      <Box maxW="100%" mx="auto" py={16} px={{ base: 4, md: 16 }}>
        {/* Header Section */}
        <VStack align="start" spacing={4} textAlign="left" maxW="100%">
          <Heading fontSize={{ base: "38px", md: "48px", lg: "64px" }} lineHeight={"70px"} fontWeight="bold">
            Top Web Development Services Company
          </Heading>
          <Heading
            fontSize={{ base: "24px", md: "32px" }}
            mt={"50px"}
            fontWeight="bold"
          >
            Transforming Pixels into Performance with Seamless Web Solutions
          </Heading>
          <Text fontSize={{ base: "18px", md: "20px" }} mt={10}>
            Enhance your digital footprint with our premier web development
            services. As a leading provider in the industry, our highly skilled
            web developers deliver tailored solutions, crafting everything from
            business-focused lead-generation websites to cutting-edge e-commerce
            platforms. Each project blends innovative design with flawless
            functionality, ensuring an engaging user experience.
          </Text>
          <Text fontSize={{ base: "18px", md: "20px" }} mt={10}>
            Whether it's dynamic e-commerce platforms or interactive business
            portfolio websites, our expert team transforms your vision into
            reality. Elevate your online presence with websites that captivate
            your audience, communicate your brand’s value, and inspire meaningful
            action.
          </Text>
          <Heading
            fontSize={{ base: "24px", md: "32px" }}
            mt={"70px"}
            fontWeight="bold"
          >
            How We Do It
          </Heading>
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight="bold"
            mt={"30px"}
          >
            Crafting Digital Masterpieces with Precision and Innovation
          </Text>
          <Text fontSize={{ base: "18px", md: "20px" }} mt={"10px"}>
            At our leading Web Development company, we combine cutting-edge coding
            with creative expertise to create digital solutions that seamlessly
            integrate design and functionality.
          </Text>
        </VStack>
   
        {/* Services Grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          mt={10}
          gap={6}
        >
          {services.map((service, index) => (
            <GridItem
              key={index}
              bg="gray.100"
              p={6}
              borderRadius="lg"
              boxShadow="md"
              cursor="pointer"
              onClick={() => navigate(`/services/${index.id}`)}
            >
              <Image
                src={service.image}
                alt={service.title}
                borderRadius="md"
                mb={4}
                width="100%"
              />
              <Heading
                fontSize={{ base: "20px", md: "22px" }}
                fontWeight="semibold"
                mb={2}
              >
                {service.title}
              </Heading>
              <Text fontSize={{ base: "16px", md: "18px" }} color="gray.600">
                {service.desc}
              </Text>
            </GridItem>
          ))}
        </Grid>
   
        {/* Process Section */}
        <Flex
          mt={{ base: "60px", md: "100px" }}
          flexDirection={{ base: "column", md: "row" }}
          gap={10}
        >
          <VStack
            align="start"
            width={{ base: "100%", md: "63%" }}
            spacing={4}
            gap={10}
            textAlign="left"
          >
            <Heading fontSize={{ base: "20px", md: "32px" }} fontWeight="bold">
              Our Professional Website Development Services Process
            </Heading>
            <Text fontSize={{ base: "16px", md: "18px" }}>
              At WeBring, our website development process is a meticulously
              crafted journey that transforms your vision into a dynamic digital
              reality. We start by gaining a deep understanding of your business
              goals, designing a captivating and user-friendly interface, and
              developing a responsive, bug-free site using cutting-edge
              technologies.
            </Text>
            <Text fontSize={{ base: "16px", md: "18px" }}>
              Once the site is built, it undergoes rigorous usability testing to
              ensure seamless functionality and an intuitive user experience. We
              then integrate SEO-optimized content, launch the site, and provide
              ongoing support to maintain its performance. Our team continuously
              tracks metrics and implements optimizations to keep your online
              presence impactful and competitive.
            </Text>
            <Text fontSize={{ base: "16px", md: "18px" }}>
              Dedicated to exceeding your expectations, we deliver a website that
              authentically represents your brand and connects with your audience.
              Contact our digital solutions agency today to begin your
              transformative journey online.
            </Text>
          </VStack>
          <Flex
            justifyContent="center"
            mt={{ base: 6, md: 0 }}
            width={{ base: "100%", md: "37%" }}
          >
            <Image
              src="/top-view-laptop-with-coffee-stationery-items.png"
              alt="Process"
              borderRadius="lg"
              maxW="100%"
            />
          </Flex>
        </Flex>
      </Box>
    );
  }
   
  export default ServicesDetail;