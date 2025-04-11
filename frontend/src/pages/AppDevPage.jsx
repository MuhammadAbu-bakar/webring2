import { Box, Flex, Heading, Text, Button, Image, VStack,Accordion,Span,Stack,For,useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

const Header = () => {
    const [expandedItems, setExpandedItems] = useState([1]);
    const { isOpen, onToggle } = useDisclosure();
    const cards = [
        {
          icon: "/begincoding.png", // Replace with actual icon URL
          title: 'Begin Coding',
          description:
            'Embark on digital transformation with our\n Begin Coding phase in App Development for\n both Android and iOS. Our skilled top rated App\n Developers turn your apps vision into code,\n creating a seamless user experience. Our\n creative staffing optimizes every feature for a\n robust and captivating App Development for\n both Android and iOS that shines in the digital\n landscape.'
        },
        {
          icon: '/Plan-app-security.png', // Replace with actual icon URL
          title: 'Plan App Security',
          description:
            'Ensuring robust app security is at the forefront of our App Development for both Android and iOS services. Our top rated Mobile App Development company, Creative Staffing, meticulously plans and implements advanced security measures, safeguarding your app and user data with the highest level of protection. Your apps integrity and user privacy are our top priorities throughout the App Development for both Android and iOS processes.',
        },
        {
          icon: '/Perform-multiple-tests.png', // Replace with actual icon URL
          title: 'Perform Multiple Tests',
          description:
            'Our top rated Mobile App Development company services encompass comprehensive testing phases, ensuring your apps seamless performance across various scenarios and devices. Our digital solution agency, Creative Staffing, scrutinizes every element to guarantee a glitch-free user experience, assuring your app stands strong in the digital arena.',
        },
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
      const [openIndex, setOpenIndex] = useState(null);
      const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

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
    <Heading fontSize="18px" fontWeight="700" color="#FED904" fontFamily="Montserrat, Sans-serif">
      Top Rated Mobile App Development Company
    </Heading>
    <Heading as="h1" size="2xl" mb={4} color="white" fontSize="26px" lineHeight="40px">
      Empowering Your Ideas Through App<br/> Development For Both Android And<br/> iOS
    </Heading>
    <Text fontSize="md" color="gray.300" mb={6}>
    Experience transformative App development for both Android and iOS as your visionary concepts come to life. Our creative staffing with top rated app developers creates innovative and the best user friendly apps, seamlessly blending innovation and functionality. From concept to coding, our digital solution agency empowers your ideas in the ever-evolving mobile landscape.
    </Text>
    <Text fontSize="md" color="gray.300" mb={6}>
    Elevate your brand’s digital presence with our top rated mobile app development company for captivating and the best user friendly app development for both Android and iOS that inspires and engages your audience.
    </Text>
    <Text fontSize="xl" fontWeight="bold" color="#FED904" mb={4}>
      App Development Charges:
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
    >
      Let's Talk 
    </Button>
  </Box>

  {/* Right Side: Image */}
  <Box maxW={{ base: '100%', md: '40%' }}>
    <Image
      src="/app.png" // Replace with actual image URL
      alt="Mobile phones displaying app"
      borderRadius="md"
    />
  </Box>
</Flex>


{/* How We Do it */}
<Box px={10} py={16} bg="black">
      <Heading as="h2" fontSize="2rem" textAlign="center" mb={2} color="white">
        HOW WE DO IT
      </Heading>
      <Text fontSize="md" color="#FFFFFF" textAlign="center" mb={10}  fontFamily="Montserrat, Sans-serif" mt={5}>
        
      Our top rated Mobile App Development company turns your app dreams into pixel-perfect reality with App Development for both Android and iOS and<br/> weaving cutting-edge technology.								
      </Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="center"
        
        alignItems="center"
      >
        {cards.map((card, index) => (
          <VStack
            key={index}
            
            p={6}
            borderRadius="md"
            align="center"
            flex="1"
          >
            <Image src={card.icon} alt={card.title}  mb={4} w="40%" />
            <Heading as="h3" fontSize="18px" mb={2} color="white" fontFamily="Montserrat, Sans-serif">
              {card.title}
            </Heading>
            <Text fontSize="md" color="#9A9A9A" textAlign="center" whiteSpace="pre-line">
              {card.description}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>

    {/* FAQ's Section */}
    <Box
              width="100%"
              color="white"
              py={{ base: 8, md: 10, xl: 14 }}
              px={{ base: 4, md: 6, xl: 8 }}
              mx="auto"
              alignItems="center"
              bg="black"
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
    </>
    
  );
};

export default Header;