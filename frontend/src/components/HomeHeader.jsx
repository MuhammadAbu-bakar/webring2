import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  VStack,
  Text,
  SimpleGrid,
  Heading,
  Button,
  createIcon,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "./CustomButton";
import {
  faCaretDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
 
const HomeHeader = () => {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false); // State for Industries dropdown
  const [isTechnologiesDropdownOpen, setIsTechnologiesDropdownOpen] = useState(false);
  const [isInsightsDropdownOpen, setIsInsightsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
 
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
    const handleNavigation = (route) => {
      navigate(`/${route.toLowerCase()}`);
      setIsMobileMenuOpen(false); // Close menu after navigation
    };
 
  const navItems = [
    "Home",
    "Services",
    "Industries", // Added Industries
    "Technologies",
    "Insights",
    "Portfolio",
    "AI Services",
  ];
 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
 
  const servicesCategories = [
    {
      title: "Mobile App Development",
      services: [
        { name: "ISO App Development", icon: faChevronRight, link: "/services/iso-app-development" },
        { name: "Android App Development", icon: faChevronRight, link: "/services/android-app-development" },
        { name: "Cross Platform App Development", icon: faChevronRight, link: "/services/cross-platform-app-development" },
      ],
    },
    {
      title: "Staff Augmentation",
      services: [
        { name: "Hire Android App Developer", icon: faChevronRight, link: "/services/hire-android-developer" },
        { name: "Hire ISO App Developer", icon: faChevronRight, link: "/services/hire-iso-developer" },
        { name: "Hire Node.js Developer", icon: faChevronRight, link: "/services/hire-nodejs-developer" },
      ],
    },
    {
      title: "Custom Software Development",
      services: [
        { name: "ERP Solution", icon: faChevronRight, link: "/services/erp-solution" },
        { name: "CRM Solution", icon: faChevronRight, link: "/services/crm-solution" },
        { name: "CMS Solution", icon: faChevronRight, link: "/services/cms-solution" },
      ],
    },
    {
      title: "Web Development",
      services: [
        { name: "Ecommerce Website Development", icon: faChevronRight, link: "/services/ecommerce-website-development" },
        { name: "Web Portals", icon: faChevronRight, link: "/services/web-portals" },
      ],
    },
    {
      title: "Artificial Intelligence",
      services: [
        { name: "Generative AI", icon: faChevronRight, link: "/services/generative-ai" },
        { name: "Natural Language Processing", icon: faChevronRight, link: "/services/nlp" },
        { name: "Speech Recognition", icon: faChevronRight, link: "/services/speech-recognition" },
      ],
    },
    {
      title: "Digital Marketing Services",
      services: [
        { name: "Social Media Marketing", icon: faChevronRight, link: "/services/social-media-marketing" },
        { name: "Search Engine Marketing", icon: faChevronRight, link: "/services/search-engine-marketing" },
        { name: "Search Engine Optimization", icon: faChevronRight, link: "/services/seo" },
      ],
    },
  ];
 
  const aiServices = [
    { name: "AI Chatbots", icon: faChevronRight, link: "/ai/chatbots" },
    { name: "Machine Learning", icon: faChevronRight, link: "/ai/machine-learning" },
    { name: "Data Analytics", icon: faChevronRight, link: "/ai/data-analytics" },
  ];
 
  const industries = [
    { title: "Automotive", desc: "Transforming automotive industry with bespoke tech." },
    { title: "Healthcare", desc: "Better, accessible healthcare through tailored tech solutions." },
    { title: "Education", desc: "Enhancing education with new-age EdTech." },
    { title: "Music", desc: "Advancing music industry with digital innovations." },
    { title: "Real Estate", desc: "Innovating real estate with custom tech." },
    { title: "SAAS", desc: "Developing custom solutions for SAAS platforms." },
    { title: "Logistics", desc: "Optimizing logistics with intelligent tech." },
    { title: "Retail", desc: "Scaling retail businesses through advanced technology." },
    { title: "On-Demand", desc: "Elevating on-demand services with innovative tech." },
    { title: "ECommerce", desc: "Driving e-commerce growth with smart tech." },
    { title: "Fintech", desc: "Empowering fintech with specialized tech services." },
  ];
 
  const technologiesCategories = [
    {
      title: "Languages",
      items: [
        { name: ".Net", link: "/technologies/dotnet" },
        { name: "HTML5", link: "/technologies/html5" },
        { name: "Java", link: "/technologies/java" },
        { name: "Node.Js", link: "/technologies/nodejs" },
        { name: "PHP", link: "/technologies/php" },
        { name: "Python", link: "/technologies/python" },
      ],
    },
    {
      title: "Platforms",
      items: [
        { name: "Azure", link: "/technologies/azure" },
        { name: "GCP", link: "/technologies/gcp" },
        { name: "Oracle", link: "/technologies/oracle" },
        { name: "SAP", link: "/technologies/sap" },
      ],
    },
  ];
  const insights = [
    { title: "About Webring", desc: "Empowering startups and enterprises with custom digital solutions for transformation." },
    { title: "Life At Webring", desc: "Join our inclusive, dynamic tech team. Grow, innovate, and thrive with us." },
    { title: "Blogs", desc: "Explore insights and trends in tech with our expert-written blogs." },
    { title: "Press", desc: "Get the latest news and updates about TekRevol’s impact." },
    { title: "Podcast", desc: "Listen to expert talks on tech and digital transformation." },
    { title: "Events", desc: "Attend our events and webinars to learn and network." },
    { title: "Referral Program", desc: "Refer talent to Webring and earn rewards." },
  ];
  const noBorderItems2 = ["Podcast", "Events", "Referral Program"];
 
  // List of items that should NOT have a bottom border
  const noBorderItems = ["ECommerce", "Fintech", "On-Demand"];
 
  const HamburgerIcon = createIcon({
      displayName: "HamburgerIcon",
      viewBox: "0 0 19 19",
      path: (
        <>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            stroke="white" // Ensure the lines are black
            fill="none" // Prevent unwanted fill
            d="M4 6h16M4 12h16M4 18h16"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ),
    });
 
    const CloseIcon = createIcon({
      displayName: "CloseIcon",
      viewBox: "0 0 19 19",
      path: (
        <>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            stroke="white"
            fill="none"
            d="M6 6l12 12M18 6l-12 12"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ),
    });

    
 
 
  return (
    <Box
      w="100%"
      h="80px"
      px={{ base: "20px", md: "50px", lg: "100px" }}
      py="10px"
      maxWidth={"100%"}
      position="absolute"
      top={isVisible ? "0" : "-100px"}
      left="0"
      zIndex="1000"
      bg="transparent"
      transition="top 0.3s ease-in-out, background 0.3s ease-in-out"
    >
      <Flex align="center" justify="space-between" w="100%" h="100%">
        {/* Logo Section */}
        <HStack spacing={2}>
          <Image src="/logo.png" alt="Webring Logo" width="100%" height="60px" />
        </HStack>
 
        {/* Desktop Navigation */}
        <Flex display={{ base: "none", md: "flex" }} w="auto" h="100%" gap="30px" align="center">
          <HStack spacing="30px" display={{ base: "none", md: "none", lg: "flex" }}>
            {navItems.map((item) => (
              <Box
                key={item}
                position="relative"
                onMouseEnter={() => {
                  if (item === "Services") setIsServicesDropdownOpen(true);
                  if (item === "AI Services") setIsAiDropdownOpen(true);
                  if (item === "Industries") setIsIndustriesDropdownOpen(true);
                  if (item === "Technologies") setIsTechnologiesDropdownOpen(true); // Handle Industries dropdown
                  if (item === "Insights") setIsInsightsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item === "Services") setIsServicesDropdownOpen(false);
                  if (item === "AI Services") setIsAiDropdownOpen(false);
                  if (item === "Industries") setIsIndustriesDropdownOpen(false);
                  if (item === "Technologies") setIsTechnologiesDropdownOpen(false); // Handle Industries dropdown
                  if (item === "Insights") setIsInsightsDropdownOpen(false);
                }}
                onClick={() => {
                  if (item === "Portfolio") {
                    navigate("/portfolio");
                  } else if (item !== "Services" && item !== "AI Services" && item !== "Industries") {
                    navigate(`/${item.toLowerCase()}`);
                  }
                }}
                cursor="pointer"
              >
                <Box
                  px={3}
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderTop={activeLink === item ? "3px solid #FED904" : "none"}
                  py={6}
                >
                  <Text
                    fontSize="18px"
                    fontWeight="600"
                    color={activeLink === item ? "#FED904" : "white"}
                    _hover={{ color: "#FED904" }}
                  >
                    {item}
                  </Text>
                </Box>
 
                {/* Services Dropdown Menu */}
                {item === "Services" && isServicesDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="37%"
                    transform={{ md:"translateX(-30%)", lg:"translateX(-37%)", xl:"translateX(-42%)" }}
                    bg="#FFFFFF"
                    w={{ md: "900px", lg:"1140px", xl: "1500px" }}
                    boxShadow="md"
                    p="20px"
                    zIndex="1000"
                    display="flex"
                    gap="20px"
                  >
                    {/* Left Section with Design from Image */}
                    <Box flex="1">
                      <Text fontSize="22px" fontWeight="700" mb="10px" font="DM Sans" ml="155px">
                        Built to Win
                      </Text>
                      <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml="155px" whiteSpace="pre-line">
                        Transforming business with our<br/> future-ready tech solutions. Get<br/> custom products for accelerated<br/> digital transformation across<br/> industries globally.
                      </Text>
                      <Image src="/Lphone.png" alt="Design Image" width="100%" borderRadius="8px" />
                    </Box>
 
                    {/* Right Section with Services Categories */}
                    <Box flex="2" display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={{ md: "10px", lg: "20px" }}>
                      {servicesCategories.map((category) => (
                        <Box key={category.title}>
                          <Text fontSize="16px" fontWeight="700" mb="15px" font="DM Sans">
                            {category.title}
                          </Text>
                          <VStack align="start">
                            {category.services.map((service) => (
                              <Flex
                                key={service.name}
                                align="center"
                                cursor="pointer"
                               
                                borderRadius="8px"
                                _hover={{ bg: "#FFD700" }}
                                onClick={() => {
                                  if (category.title === "Web Development") {
                                    navigate("/services/web-development"); // Navigate to the Web Development page
                                  } else {
                                    navigate(service.link); // Navigate to other service pages
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={service.icon} style={{ marginRight: "10px" }} />
                                <Text fontSize="14px" fontWeight="400" font="Yantramanav">
                                  {service.name}
                                </Text>
                              </Flex>
                            ))}
                          </VStack>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
 
               
                {/* AI Services Dropdown Menu */}
{item === "AI Services" && isAiDropdownOpen && (
  <Box
    position="absolute"
    top="100%"
    left="78%"
    transform="translateX(-78%)"
    bg="#FFFFFF"
    w={{ md: "900px", lg: "1140px", xl: "1500px" }}
    boxShadow="md"
    p="20px"
    zIndex="1000"
    display="flex"
    gap="20px"
  >
    {/* Left Section with Design from Image */}
    <Box flex="1">
      <Text fontSize="22px" fontWeight="700" mb="10px" font="DM Sans" ml="155px">
        Built to Win with AI
      </Text>
      <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml="155px">
        Harness the power of AI to transform your business. Our AI services are designed to drive innovation, efficiency, and growth across industries.
      </Text>
      <Image src="/aiHeader.jpg" alt="AI Design Image" width="50%" borderRadius="8px" ml="155px" />
    </Box>

    {/* Right Section with AI Services Categories */}
    <Box flex="2" display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={{ md: "10px", lg: "20px" }}>
      {aiServices.map((service) => (
        <Box key={service.name}>
          <Flex
            align="center"
            cursor="pointer"
            borderRadius="8px"
            _hover={{ bg: "#FFD700" }}
            onClick={() => navigate(service.link)}
          >
            
            <Text fontSize="16px" fontWeight="700" font="Yantramanav">
              {service.name}
            </Text>
          </Flex>
        </Box>
      ))}
    </Box>
  </Box>
)}
 
                {/* Industries Dropdown Menu */}
                {item === "Industries" && isIndustriesDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="44%"
                    transform={{ lg:"translateX(-46%)", xl:"translateX(-50%)" }}
                    bg="#FFFFFF"
                    w={{ md: "900px", lg:"1140px", xl: "1500px" }}
                    boxShadow="md"
                    p="20px"
                    zIndex="1000"
                  >
                    <Flex direction={{ base: "column", md: "row" }} alignItems="start" justifyContent="space-between">
                      {/* Left Section */}
                      <Box flex="1" width={"30%"}>
                      <Text fontSize="24px" fontWeight="700" mb="10px" font="DM Sans" ml="70px" mt="25px">
                        Built to Win
                      </Text>
                      <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px"  whiteSpace="pre-line" ml="70px">
                        Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
                      </Text>
                      <Image ml="70px" pt="25px"src="/industriesHeader.jpg" alt="Design Image" width="80%" borderRadius="8px" />
                        </Box>
 
                      {/* Right Section - Industry List */}
                      <SimpleGrid columns={3} spacingX={20} spacingY={5} w="full" maxW={{ md: "850px", lg:"65%", xl: "70%" }} ml={{ md: 18 }}>
                        {industries.map((item, index) => (
                          <Box key={index} marginRight={"20px"}>
                            <Box
                              pb={5}
                              pt={5}
                              borderBottom={noBorderItems.includes(item.title) ? "none" : "2px solid #ccc"} // Apply border conditionally
                              w="full"
                              pr={10}
                            >
                              <Heading fontSize="20px" fontWeight="semibold" mb={1} font="DM Sans">
                                {item.title}
                              </Heading>
                              <Text fontSize="16px" color="gray.600" mt={2} font="Yantramanav">
                                {item.desc}
                              </Text>
                            </Box>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Flex>
                  </Box>
                )}
 
                {/* Technologies Dropdown */}
                {item === "Technologies" && isTechnologiesDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="54%"
                    transform="translateX(-54%)"
                    bg="#FFFFFF"
                    w={{ md: "900px", lg:"1000px", xl: "1300px" }}
                    boxShadow="md"
                    p="20px"
                    zIndex="1000"
                    display="flex"
                    gap="20px"
                  >
                    {/* Left Section with Design from Image */}
                    <Box flex="1">
                      <Text fontSize="24px" fontWeight="700" mb="10px" font="DM Sans" ml="100px">
                        Built to Win
                      </Text>
                      <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml="100px" whiteSpace="pre-line" >
                        Transforming business with our future-ready tech<br/> solutions. Get custom products for accelerated<br/> digital transformation across industries globally.
                      </Text>
                      <Image src="/technologiesHeader.png" alt="Design Image" width="60%" borderRadius="8px" ml={"90px"}/>
                    </Box>
 
                    {/* Right Section with Services Categories */}
                        <Box flex="1" display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="10px" ml="30px">
                          {technologiesCategories.map((category) => (
                            <Box key={category.title}>
                              <Text fontSize="16px" fontWeight="700" mb="10px" font="DM Sans">
                                {category.title}
                              </Text>
                              <VStack align="start">
                                {category.items.map((item) => (
                                  <Flex
                                    key={item.name}
                                    align="center"
                                    cursor="pointer"
                                    borderRadius="8px"
                                    _hover={{ bg: "#FFD700" }}
                                    onClick={() => navigate(item.link)}
                                  >
                                    <FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "10px" }} />
                                    <Text fontSize="14px" fontWeight="400" font="Yantramanav">
                                      {item.name}
                                    </Text>
                                  </Flex>
                                ))}
                              </VStack>
                            </Box>
                          ))}
                        </Box>
                  </Box>
                )}
 
 
                {/* Insights */}
                {item === "Insights" && isInsightsDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="62%"
                    transform={{ lg:"translateX(-70%)", xl:"translateX(-67%)" }}
                    bg="#FFFFFF"
                    w={{ md: "900px", lg:"1140px", xl: "1400px" }}
                    boxShadow="md"
                    p="20px"
                    zIndex="1000"
                  >
                    <Flex   alignItems="center" justifyContent="space-between">
                      {/* Left Section */}
                      <Box flex="1" width={"30%"}>
                      <Text fontSize="24px" fontWeight="700" mb="10px" font="DM Sans" ml="100px">
                        Built to Win
                      </Text>
                      <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml="100px">
                        Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
                      </Text>
                      <Image ml="50px" src="/Lphone.png" alt="Design Image" width="100%" borderRadius="8px" />
                    </Box>
 
                      {/* Right Section  */}
                      <SimpleGrid columns={3} spacingX={20} spacingY={5} w="full" maxW={{ md: "850px", lg:"65%", xl: "70%" }} ml={{ md: 16 }}>
                        {insights.map((item, index) => (
                            <Box key={index} marginRight={"20px"}>
                            <Box
                                pb={5}
                                pt={5}
                                borderBottom={noBorderItems2.includes(item.title) ? "none" : "2px solid #ccc"} // Apply border conditionally
                                w="full"
                                pr={10}
                            >
                                <Heading fontSize="20px" fontWeight="semibold" mb={1} font="DM Sans">
                                {item.title}
                                </Heading>
                                <Text fontSize="16px" color="gray.600" mt={2} font="Yantramanav">
                                {item.desc}
                                </Text>
                            </Box>
                            </Box>
                        ))}
                        </SimpleGrid>
                    </Flex>
                  </Box>
                )}
 
               
              </Box>
            ))}
          </HStack>
 
          {/* Get a Quote Button */}
          <CustomButton text="GET A QUOTE" onClick={() => alert("Quote Requested!")} />
         
         
        </Flex>
            {/* Hamburger Menu (Visible on Mobile) */}
            <Button display={{ base: "block", md: "block", lg: "none" }} bgColor={"transparent"} onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <CloseIcon boxSize={6} /> : <HamburgerIcon boxSize={7} />}
            </Button>
      </Flex>
      {isMobileMenuOpen && (
              <VStack
                position="absolute"
                top="85px"
                right={{ base: "0", md: "40px" }}
                width={{ base: "100%", md: "50%" }}
                bg="black"
                boxShadow="lg"
                spacing="15px"
                p="25px"
                zIndex="100"
                borderRadius="10px" // Adds rounded corners
                transform={isMobileMenuOpen ? "translateY(0)" : "translateY(-10px)"} // Smooth slide effect
                transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out" // Smooth animation
                opacity={isMobileMenuOpen ? 1 : 0} // Fade-in effect
              >
                {["Home", "About", "Services", "Industries", "Technologies", "Insights", "Portfolio", "Blog"].map((item) => (
                  <Text
                    key={item}
                    fontFamily="DM Sans"
                    fontWeight="600"
                    fontSize="20px"
                    color="white"
                    cursor="pointer"
                    w="100%"
                    py="5px"
                    borderRadius="8px"
                    _hover={{ bg: "#f4f4f4", transform: "scale(1.05)" }} // Subtle hover effect
                    transition="all 0.2s ease-in-out"
                    onClick={() => handleNavigation(item)}
                  >
                    {item}
                  </Text>
                ))}
              </VStack>
            )}
    </Box>
  );
};
 
export default HomeHeader;