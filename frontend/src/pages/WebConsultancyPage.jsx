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
      Web Development Consultancy Charges:
    </Text>
    <Text fontSize="xl" fontWeight="bold" color="white" mb={4}>
      $20-$50/ Hour
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