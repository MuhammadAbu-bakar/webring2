import { Box, Flex, Heading, Text, Button, Image, VStack,Accordion,Span,Stack,For,useDisclosure,IconButton,Grid,GridItem } from '@chakra-ui/react';
import { useState,useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [expandedItems, setExpandedItems] = useState([1]);
    const { isOpen, onToggle } = useDisclosure();
    const services = [
      {
        icon: "/user-research.png", // Replace with actual icon path
        title: "User Research Services",
        description: "Uncover the heartbeat of your audience with our comprehensive User Research services. By driving deep into user behavior, preferences and needs, our Graphic Design agency services pose the way for informed decisions and harmonious digital experiences. Our creative Graphic Design agency data-driven insights are proven you to create a holistic digital design that searches, ensuring meaningful interaction and shape users at the forefront of your innovating journey."
      },
      {
        icon: "/usability-testing.png", // Replace with actual icon path
        title: "Usability Testing in UX Design",
        description: "Unlock the potential of your creative digital design for usability testing with privacy-pres. Our creative Graphic Design agency meticulously analyses user interactions, ensuring seamless and intuitive experience. Our process is to design user interfaces based on real user insights, resulting in Web & App Design teams in one entry-friendly setting in the size effortlessly functional. Because user satisfaction and engagement through our expert usability testing in UX Design services."
      },
      {
        icon: "/ui-ux-design.png", // Replace with actual icon path
        title: "UX/UI Design",
        description: "We specialise in UX/UI Design, where user-centric creativity meets seamless functionality. Our creative Graphic Design agency with personal UI UX designers meticulously shapes digital experiences that effectively connect user visibility and brand, ensuring query click, ratings, and interaction issues in positive publicity impressions. In our Graphic Design agency services, with the best UI UI designers transform your ideas into intuitive design that captures, engages, and inspire meaningful connections."
      },
      {
        icon: "/web-app-dev.png", // Replace with actual icon path
        title: "Web & App Development Services",
        description: "From design to development, our professional Web Design and Development company seamlessly bridges integration with innovation. We provide affordable Web Design and Development services, and our top media developer account creates complete internal technical updates, enabling a transparent team of seamless and cutting-edge technology. With invaluable attention to detail, our digital solution agency brings your innovative skills, delivering digital solutions that engage, optimize, and inspire."
      }
    ];

      const items = [
        {
          value: "a",
          title: "What is App Development for both Android and iOS, and why do I need it for my business?",
          text: "App development for Android and iOS involves creating applications that run on both platforms, ensuring a wider reach for your business. It’s essential because it allows you to engage with a larger audience, improve customer experience, and increase brand visibility in a mobile-first world."
        },
        {
          value: "b",
          title: "How long does it take to develop a Mobile App?",
          text: "The timeline for mobile app development varies based on complexity, features, and platform requirements. On average, a simple app can take 3-6 months, while more complex apps may take 6-12 months or longer."
        },
        {
          value: "c",
          title: "How do you ensure my Mobile App project design will be user-friendly and intuitive?",
          text: "We follow a user-centered design approach, conducting thorough research, creating wireframes, and performing usability testing to ensure the app is intuitive, visually appealing, and easy to navigate for your target audience."
        },
        {
          value: "d",
          title: "Can you help me choose the right platform for my app (Android, iOS, both)?",
          text: "Yes, we analyze your target audience, business goals, and budget to recommend the best platform(s) for your app. We also offer cross-platform development to target both Android and iOS efficiently."
        },
        {
          value: "e",
          title: "What kind of ongoing support do you provide after the app is launched?",
          text: "We offer post-launch support including bug fixes, updates, performance monitoring, and feature enhancements to ensure your app remains competitive and functional in the long term."
        },
      ];
      const toggleItem = (index) => {
        if (expandedItems.includes(index)) {
          setExpandedItems(expandedItems.filter((i) => i !== index));
        } else {
          setExpandedItems([...expandedItems, index]);
        }
      };
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
    

{/* Hero Section */}
<Flex
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      px={10}
      py={16}
      bg="black"
      minHeight="100vh"
    >
      {/* Left Side: Text Content */}
      <Box maxW={{ base: '100%', md: '50%' }} mb={{ base: 8, md: 0 }}>
        <Heading
          fontSize="18px"
          fontWeight="700"
          color="#FED904"
          fontFamily="Montserrat, Sans-serif"
        >
          Graphic Designing & UI/UX Design
        </Heading>
        <Heading
          as="h1"
          size="2xl"
          mb={4}
          color="white"
          fontSize="26px"
          lineHeight="40px"
        >
          Empowering Your Ideas Through App
          <br /> Development For Both Android And
          <br /> iOS
        </Heading>
        <Text fontSize="md" color="gray.300" mb={6}>
          Experience transformative App development for both Android and iOS as
          your visionary concepts come to life. Our creative staffing with top
          rated app developers creates innovative and the best user friendly
          apps, seamlessly blending innovation and functionality. From concept
          to coding, our digital solution agency empowers your ideas in the
          ever-evolving mobile landscape.
        </Text>
        <Text fontSize="md" color="gray.300" mb={6}>
          Elevate your brand’s digital presence with our top rated mobile app
          development company for captivating and the best user friendly app
          development for both Android and iOS that inspires and engages your
          audience.
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="#FED904" mb={4}>
          Graphic Designing Charges:
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="white" mb={4}>
          $30-$60/ Hour
        </Text>
        <Button
          bg="black"
          color="white"
          w="126px"
          h="34px"
          _hover={{ bg: 'yellow.500' }}
          borderColor="#FED904"
          borderWidth="1px"
        >
          Let's Talk
        </Button>
      </Box>

      {/* Right Side: Swiper Slider */}
      <Box maxW={{ base: '100%', md: '40%' }} position="relative">
        {/* Custom Nav Buttons */}
        <IconButton
          ref={prevRef}
          position="absolute"
          top="50%"
          left="-6"
          transform="translateY(-50%)"
          zIndex="2"
          bg="whiteAlpha.200"
          _hover={{ bg: 'whiteAlpha.300' }}
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faChevronLeft}/>
        </IconButton>
          
  
        <IconButton
          ref={nextRef}
          position="absolute"
          top="50%"
          right="-6"
          transform="translateY(-50%)"
          zIndex="2"
          bg="whiteAlpha.200"
          _hover={{ bg: 'whiteAlpha.300' }}
          aria-label="Next"

        >
          <FontAwesomeIcon icon={faChevronRight}/>
        </IconButton>
          
      

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          slidesPerView={1}
          centeredSlides
          spaceBetween={20}
        >
          <SwiperSlide>
            <Image
              src="/Group-84.png"
              alt="Slide 1"
              borderRadius="md"
              mx="auto"
              maxH="500px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Group-85.png"
              alt="Slide 2"
              borderRadius="md"
              mx="auto"
              maxH="500px"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/Group-86.png"
              alt="Slide 3"
              borderRadius="md"
              mx="auto"
              maxH="500px"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/Group-87.png"
              alt="Slide 4"
              borderRadius="md"
              mx="auto"
              maxH="500px"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/Group-88.png"
              alt="Slide 5"
              borderRadius="md"
              mx="auto"
              maxH="500px"
            />
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </Box>
    </Flex>


{/* How We Do it */}
<Box bg="black" color="white" py={16} px={{ base: 4, md: 16 }}>
      <VStack spacing={3} textAlign="center" mb={10}>
        <Heading fontSize="2xl" color="#FED904">
          Creative Design Solutions
        </Heading>
        <Text color="gray.300" fontSize="md" maxW="700px">
          We Design User Interfaces For Delightful Experiences, Understanding User Needs
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={12}
        maxW="1200px"
        mx="auto"
      >
        {services.map((service, index) => (
          <VStack key={index} spacing={4} align="start" textAlign="left">
            <Image src={service.image} alt={service.title} boxSize="100px" />
            <Heading fontSize="lg" color="#FED904">
              {service.title}
            </Heading>
            <Text fontSize="sm" color="gray.300">
              {service.description}
            </Text>
          </VStack>
        ))}
      </Grid>
    </Box>
    {/* FAQ's Section */}
    <Box px={10} py={16} bg="white" text="#FFFFFF" mb={10}>
      {/* Heading and Description */}
      <Heading 
  as="h2" 
  fontSize="36px" 
  fontWeight="bold" 
  textAlign="center" 
  color="black"
  mt="40px"
>
  Frequently Asked Questions
</Heading>
<Text 
  fontSize="15px" 
  textAlign="center" 
  mb={10}
  color="black"
  mt={8}
>
  Discover vital insights into crafting innovative and best user-friendly apps through our FAQs. Our top rated Mobile App Development company<br/>
  addresses common queries, shedding light on the process from concept to launch, ensuring a clear understanding of how our top notch IT services can<br/>
  seamlessly bring your App Development vision for Android and iOS clear to life.
</Text>

      {/* Accordion */}
      
      <Stack gap="4" align="center">
  <Accordion.Root collapsible defaultValue={["b"]} width="100%" maxWidth="800px">
    {items.map((item, index) => (
      <Accordion.Item key={index} value={item.value} mb={3} border="1px solid black" borderRadius="8px">
        <Accordion.ItemTrigger>
          <Box 
            display="flex" 
            justifyContent="space-between" 
            alignItems="center" 
            width="100%" 
            p={4}
            cursor="pointer"
          >
            <Span 
              flex="1" 
              textAlign="center" 
              fontSize="16px" 
              fontWeight="500"
              color="black"
            >
              {item.title}
            </Span>
            <Accordion.ItemIndicator>
              <Box as="span" fontSize="20px" color="black">
                {isOpen ? '−' : '+'}
              </Box>
            </Accordion.ItemIndicator>
          </Box>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Box 
            p={4} 
            pt={0}
            borderTop="1px solid white"
            borderBottomRadius="8px"
            
          >
            <Text 
              textAlign="center" 
              color="black" 
              lineHeight="1.6"
              fontSize="16px"
              mt="10px"
            >
              {item.text}
            </Text>
          </Box>
        </Accordion.ItemContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
</Stack>
    </Box>
    </>
    
  );
};

export default Header;