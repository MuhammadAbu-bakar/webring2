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
    Span
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
   
   
  const cards = [
    {
      title: "Create a Plan",
      desc: "Our Game Design and Game Development services begin by meticulously creating a comprehensive plan. From conceptualization to gameplay mechanics, our digital solution agency maps out every detail to ensure your gaming vision evolves into an extraordinary and immersive reality that captivates players. Let's discuss with our best Game Development company in the world to create a comprehensive plan for Game Design and Game Development to ensure a successful and engaging gaming experience for our target audience.",
      image:"/assets/images/Create-a-Plan-1536x1536.webp",
      height: "350px",
      width: "350px",
    },
    {
      title: "Be User-Focused",
      desc: "Experience Game Design and Game Development with a User-Focused Approach. Our digital solution agency designs and develops captivating games that prioritize player engagement, intuitive controls, and immersive storytelling. From character design steps to gameplay mechanics, every element is meticulously tailored to ensure an unforgettable gaming experience that resonates with players and keeps them coming back for more.",
      image: "/assets/images/Be-User-Focused-1536x1536.webp",
      height: "350px",
      width: "350px",
    },
    {
      title: "Have a Hook",
      desc: "With our Game Design and Game Development services, captivating games and immersive storytelling combine to create irresistible and unforgettable gaming experiences. Our top notch developers with creative staffing meticulously craft games that draw players in from the very start, keeping them engaged with addictive mechanics, stunning visuals, and compelling narratives. Let our best Game Development company in the world craft a gaming masterpiece that hooks players and keeps them coming back for more adventure and excitement.",
      image: "/assets/images/Have-a-Hook-1536x1058.webp",
      height: "350px",
      width: "400px",
    },
  ];
   
  const items = [
    {
      title: "What is Game Design and Game Development, and why should I consider it for my project?",
      text: "Game design and game development involve creating interactive digital games. Choose us for your project because we provide captivating games that engage, entertain, educate, reach a broad audience, improve customer engagement, provide valuable analytics, enhance competitiveness, and can be used for various business objectives"
    },
    {
      title: "How long does it take to design and develop a game?",
      text: "The timeline varies based on the complexity, platform, and features of the game. Simple games might take a few months, while more intricate projects could span a year or more. Our top notch game designer and developer work closely with you to establish a realistic development timeline."
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
  ]
   
  const GameDevelopment = () => {
    const [openIndex, setOpenIndex] = useState(null);
   
    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
   
    return (
      <>
        
        <Box width="100%" bg="black">
          // Hero Section
          <Box
            width="100%"
            maxW="1720px"
            color="white"
            py={10}
            px="5px"
            mx="auto"  
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Left Content */}
            <Box
              width={{ base: '100%', md: '50%' }}
              pr={{ md: 10 }}
              mb={{ base: 10, md: 0 }}
            >
              <Text fontSize={"24px"} color="yellow.400" fontWeight="bold" mb={2}>
                Game Design And Game Development
              </Text>
              <Heading fontSize='40px' lineHeight={"45px"} fontWeight={"600"} mb={8}>
                Elevate Your Game With Our Top Notch Developers From Concept To Console
              </Heading>
              <Stack spacing={4} fontSize="lg" color="gray.300">
                <Text>
                  Step into a realm of boundless imagination with our Game Design and Game Development services. Our top-notch developers with creative staffing craft immersive and captivating game experiences that transport players to new worlds of excitement and adventure.
                </Text>
                <Text>
                  From concept to coding, our Game Development company blends creativity with cutting-edge technology, ensuring seamless gameplay, stunning visuals, and engaging narratives.
                </Text>
                <Text>
                  Elevate your gaming vision with our Game Design and Game Development services and bring it to life in captivating games that entertain and leave a lasting impact on players.
                </Text>
              </Stack>
   
              {/* Pricing and CTA */}
              <Box mt={10}>
                <Text color="yellow.400" fontWeight="bold" fontSize="24px">
                  Game Development Charges :
                </Text>
                <Text fontSize="24px" fontWeight="bold" mt={8}>
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
                  Let’s Talk
                  <Image
                    src="assets/images/ddd1c2476bcb099d675bf282f0a40192-removebg-preview.png"
                    width="30px"
                    ml={2}
                  />
                </Button>
              </Box>
            </Box>
   
            {/* Right Image */}
            <Box width={{ base: '100%', md: '45%' }}>
              <Image
                src="assets/images/Game-Development-1.png"
                alt="Game Development VR"
                borderRadius="md"
                objectFit="cover"
              />
            </Box>
          </Box>
   
          {/* Services Section */}
          <Box
            width="100%"
            maxW="1720px"
            color="white"
            py={10}
            px={{ base: 4, md: "5px" }}
            mx="auto"
          >
            <Heading fontSize={"42px"} fontWeight={"600"} textAlign={"center"}>How We Do It</Heading>
            <Text fontSize={"22px"} textAlign={"center"} mt={10} >Our best Game Development company in the world fuses innovation with pixels, transforming concepts into interactive realities that ignite player passions and push gaming boundaries.</Text>
            <Flex
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              mt={10}
              gap={8}
            >
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                mt={10}
                gap={6}
              >
                {cards.map((service, index) => (
                  <GridItem
                    key={index}
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"  // Ensures the content is aligned to the top
                    alignItems="center"
                    textAlign="center"
                    gap={4}  // Added space between content
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      mb={4}
                      objectFit="contain"
                      width={service.width}  // Use dynamic width from the service object
                      height={service.height}  // Use dynamic height from the service object
                      display="block"
                      mx="auto"
                    />
                    <Heading
                      fontSize={{ base: "20px", md: "22px" }}
                      fontWeight="semibold"
                      mb={2}
                    >
                      {service.title}
                    </Heading>
                    <Text
                      fontSize={{ base: "16px", md: "18px" }}
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
            maxW="1720px"
            color="white"
            py={10}
            px={{ base: 4, md: "2%" }}
            mx="auto"  
            alignItems="center"
          >
            <Heading fontSize={"42px"} fontWeight={"600"} textAlign={"center"} mt={10}>Frequently Asked Questions</Heading>
            <Text fontSize={"22px"} textAlign={"center"} mt={10} >Frequently Asked Questions (FAQs) about Game Design and Game Development offer valuable insights into the world of creating captivating and immersive digital games. These answers address common queries, shedding light on the process, the latest development technologies, and the unique strategies involved, ensuring a comprehensive understanding of how our Game Design and Game Development services can transform your gaming ideas into engaging realities.</Text>
            <Box width={"75%"} margin={"auto"} mt={20} mb={10} >
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
                      <Span flex="1" ml={10}>{item.title}</Span>
                      <Box fontSize="24px" fontWeight="bold" mr={10}>
                        {openIndex === index ? '−' : '+'}
                      </Box>
                    </Accordion.ItemTrigger>
   
                    {openIndex === index && (
                      <Accordion.ItemContent>
                        <Accordion.ItemBody ml={10}>{item.text}</Accordion.ItemBody>
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
   
  export default GameDevelopment;