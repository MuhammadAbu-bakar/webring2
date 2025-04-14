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
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';


const cards = [
  {
    title: "Launch Strategically",
    desc: "Our performance marketing journey begins with in-depth research, audience segmentation, and goal alignment. WeBring crafts strategic media plans across the most effective channels, ensuring every dollar spent drives maximum value and engagement.",
    image: "/Optimize-Digital-Content-scaled.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Track & Optimize",
    desc: "WeBring’s data-first approach keeps your campaigns agile. Our team continuously monitors KPIs—click-through rates, cost per acquisition, return on ad spend—and fine-tunes every element to keep performance sharp and outcomes consistent.",
    image: "/Research-scaled.png",
    height: "350px",
    width: "350px",
  },
  {
    title: "Deliver Measurable Growth",
    desc: "From brand awareness to conversion tracking, our Performance Marketing service is engineered to deliver results. We go beyond vanity metrics—ensuring you see measurable growth, real leads, and improved sales, backed by transparent reporting and actionable insights.",
    image: "/Video-scripts.png",
    height: "350px",
    width: "350px",
  },
];

const items = [
  {
    title: "What are Digital Content Writing services, and how can they benefit my business?",
    text: "Digital Content Writing services involve creating written material for various platforms, such as websites, blogs, social media, and more. It benefits your business by enhancing brand visibility, engaging your target audience, and establishing your authority in your industry.						"
  },
  {
    title: "How do you ensure the SEO oriented content aligns with my brand's voice and values?							",
    text: "Our SEO content writing strategies start by understanding your brand’s personality, values, and goals. Our best SEO content writers meticulously research and tailor the SEO oriented content to resonate with your unique brand identity, ensuring a consistent and authentic voice.						"
  },
  {
    title: "What types of Digital Content Writing services can your agency provide?							",
    text: "Our creative content agency specializes in a diverse range of content, including website copy services, best blog articles, social media posts, product descriptions, email campaigns, and more. We adapt our writing style to suit the specific platform and audience.						"
  },
  {
    title: "How do you ensure the SEO oriented content is engaging and relevant to my target audience?							",
    text: "Our creative content agency conducts thorough research on your target audience’s preferences, interests, and pain points. This insight guides our SEO oriented content creation process, ensuring that the material is engaging, relevant, and resonates with your readers.						"
  },
  {
    title: "How do you create SEO oriented content during the writing process?							",
    text: "We incorporate SEO (Search Engine Optimization) techniques seamlessly into the content, including business relevant keywords, meta tags, and formatting. This helps improve your content’s visibility on search engines, driving organic traffic to your website.						"
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
            Performance Marketing Services
            </Text>
            <Heading fontSize={{ base: "28px", md: "36px", xl: "40px", "2xl": "48px" }} lineHeight={"45px"} fontWeight={"600"} mb={8}>
            Driving Real Results Through Strategic Performance Marketing
            </Heading>
            <Stack spacing={{ base: 3, md: 4, xl: 5 }} fontSize={{ base: "16px", md: "18px", xl: "20px" }} color="gray.300">
              <Text>
              Accelerate your brand’s growth with WeBring’s performance-driven marketing services. Our team of digital strategists, creatives, and media buyers works together to launch data-backed campaigns across platforms like Google, Meta, TikTok, and more, focusing on ROI, not just reach.
              </Text>

              <Text>
              At WeBring, we don’t just market—we measure. Experience marketing that’s as intelligent as it is impactful, delivering scalable outcomes tailored to your business goals.
              </Text>
              
            </Stack>

            {/* Pricing and CTA */}
            <Box mt={10}>
              <Text color="yellow.400" fontWeight="bold" fontSize={{ base: "20px", md: "24px" }}>
              Content Marketing Charges :
              </Text>
              <Text fontSize={{ base: "22px", md: "24px" }} fontWeight="bold" mt={8}>
              Custom Pricing Based on Campaign Goals
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
                
              </Button>
            </Box>
          </Box>

          {/* Right Image - Carousel */}
          <Image
                    src='/Content-Writing-1.png'
                    alt='content image'
                    width="50%"
                    height="50%"
                    objectFit={{ base: "cover", md: "contain" }} // Adjust object fit for mobile
                  />
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
          <Text fontSize={{ base: "18px", md: "22px", xl: "24px" }} textAlign={"center"} mt={10} >
          
          Our top-rated Performance Marketing company transforms your brand’s visibility into tangible results with analytics-led strategies and real-time campaign optimization.																</Text>
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
          <Heading fontSize={{ base: "30px", md: "36px", xl: "42px", "2xl": "48px" }} fontWeight="600" textAlign={"center"} mt={10}>Frequently Asked Questions</Heading>
          <Text fontSize={{ base: "18px", md: "22px", xl: "24px" }} textAlign={"center"} mt={10} >
          Frequently Asked Questions (FAQs) about our Digital Content Writing services provide comprehensive insights into the realm of strategic and creative writing, addressing common queries and shedding light on the process of crafting compelling, engaging, and SEO oriented content tailored to diverse platforms and audiences.								</Text>
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