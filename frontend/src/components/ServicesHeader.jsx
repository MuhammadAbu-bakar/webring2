import React, { useState } from "react";
import { Box, Flex, HStack, Button, Text, Image, VStack , SimpleGrid,Heading} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretDown,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // State for About dropdown
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);
    const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false); // State for Industries dropdown
    const [isTechnologiesDropdownOpen, setIsTechnologiesDropdownOpen] = useState(false);
    const [isInsightsDropdownOpen, setIsInsightsDropdownOpen] = useState(false);

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

  return (




    
    <Box as="header" bg="white" px="100px" py="20px" width="100%" height="110px">
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Image src="/logo2.png" alt="Webring Logo" width="104px" height="70px" />

        {/* Navigation Links */}
        <HStack spacing="50px" height="24px" gap="50px">
          {["Home", "About", "Services","Industries","Technologies","Insights", "Portfolio", "Blog"].map((item) => (
            <Box
              key={item}
              position="relative"
              onMouseEnter={() => {
                if (item === "About") setIsAboutDropdownOpen(true); // Open dropdown on hover
                if (item === "Services") setIsServicesDropdownOpen(true);
                if (item === "AI Services") setIsAiDropdownOpen(true);
                if (item === "Industries") setIsIndustriesDropdownOpen(true);
                if (item === "Technologies") setIsTechnologiesDropdownOpen(true); // Handle Industries dropdown
                if (item === "Insights") setIsInsightsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                if (item === "About") setIsAboutDropdownOpen(false); // Close dropdown on hover out
                if (item === "Services") setIsServicesDropdownOpen(false);
                  if (item === "AI Services") setIsAiDropdownOpen(false);
                  if (item === "Industries") setIsIndustriesDropdownOpen(false);
                  if (item === "Technologies") setIsTechnologiesDropdownOpen(false); // Handle Industries dropdown
                  if (item === "Insights") setIsInsightsDropdownOpen(false);
              }}
            >
              <HStack spacing="5px">
                <Text
                  fontFamily="DM Sans"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="100%"
                  color="#26241C"
                  cursor="pointer"
                  onClick={() => {
                    if (item !== "About") {
                      navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`);
                    }
                  }}
                >
                  {item}
                </Text>
                {(item === "About" || item === "Services") && (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </HStack>

              {/* About Dropdown Menu */}
              {item === "About" && isAboutDropdownOpen && (
                <Box
                  position="absolute"
                  top="100%"
                  left="0"
                  bg="white"
                  boxShadow="md"
                  borderRadius="8px"
                  p="10px"
                  zIndex="1000"
                  minWidth="200px"
                >
                  <VStack align="start" spacing="10px">
                    <Text
                      fontFamily="DM Sans"
                      fontWeight="500"
                      fontSize="16px"
                      color="#26241C"
                      cursor="pointer"
                      _hover={{ color: "#FFD700" }}
                      onClick={() => navigate("/who-we-are")} // Navigate to "Who We Are" page
                    >
                      Who We Are
                    </Text>
                    <Text
                      fontFamily="DM Sans"
                      fontWeight="500"
                      fontSize="16px"
                      color="#26241C"
                      cursor="pointer"
                      _hover={{ color: "#FFD700" }}
                      onClick={() => navigate("/our-partner")} // Navigate to "Our Partner" page
                    >
                      Our Partner
                    </Text>
                    <Text
                      fontFamily="DM Sans"
                      fontWeight="500"
                      fontSize="16px"
                      color="#26241C"
                      cursor="pointer"
                      _hover={{ color: "#FFD700" }}
                      onClick={() => navigate("/our-mission")} // Navigate to "Our Mission" page
                    >
                      Our Mission
                    </Text>
                  </VStack>
                </Box>
              )}


              {/* Services Dropdown Menu */}
                              {item === "Services" && isServicesDropdownOpen && (
                                <Box
                                  position="absolute"
                                  top="50px"
                                  left="37%"
                                  transform="translateX(-37%)"
                                  bg="#FFFFFF"
                                  w="1540px"
                                  boxShadow="md"
                                  p="20px"
                                  zIndex="1000"
                                  display="flex"
                                  gap="20px"
                                >
                                  {/* Left Section with Design from Image */}
                                  <Box flex="1">
                                    <Text fontSize="24px" fontWeight="700" mb="10px" font="DM Sans" ml="150px">
                                      Built to Win
                                    </Text>
                                    <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml="150px">
                                      Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
                                    </Text>
                                    <Image src="/Lphone.png" alt="Design Image" width="100%" borderRadius="8px" />
                                  </Box>
              
                                  {/* Right Section with Services Categories */}
                                  <Box flex="2" display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="20px">
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
                                              onClick={() => navigate(service.link)}
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
                                  top="50px"
                                  left="50%"
                                  transform="translateX(-50%)"
                                  bg="rgb(245, 239, 233)"
                                  w="200px"
                                  borderRadius="8px"
                                  boxShadow="md"
                                  p="20px"
                                  zIndex="1000"
                                >
                                  {aiServices.map((service) => (
                                    <Flex
                                      key={service.name}
                                      align="center"
                                      cursor="pointer"
                                      p="8px"
                                      borderRadius="8px"
                                      _hover={{ bg: "#FFD700" }}
                                      onClick={() => navigate(service.link)}
                                    >
                                      <FontAwesomeIcon icon={service.icon} style={{ marginRight: "10px" }} />
                                      <Text fontSize="14px" fontWeight="500">
                                        {service.name}
                                      </Text>
                                    </Flex>
                                  ))}
                                </Box>
                              )}
              
                              {/* Industries Dropdown Menu */}
                              {item === "Industries" && isIndustriesDropdownOpen && (
                                <Box
                                  position="absolute"
                                  top="50px"
                                  left="44%"
                                  transform="translateX(-44%)"
                                  bg="#FFFFFF"
                                  w="1510px"
                                  boxShadow="md"
                                  p="20px"
                                  zIndex="1000"
                                >
                                  <Flex direction={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-between">
                                    {/* Left Section */}
                                    <Box flex="1">
                                    <Text fontSize="24px" fontWeight="700" mb="10px" font="DM Sans" ml="150px">
                                      Built to Win
                                    </Text>
                                    <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml="150px">
                                      Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
                                    </Text>
                                    <Image ml="50px" src="/Lphone.png" alt="Design Image" width="100%" borderRadius="8px" />
                                  </Box>
              
                                    {/* Right Section - Industry List */}
                                    <SimpleGrid columns={3} spacingX={20} spacingY={5} w="full" maxW="1100px" ml={{ md: 16 }}>
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
              
              
                              {item === "Technologies" && isTechnologiesDropdownOpen && (
                                <Box
                                  position="absolute"
                                  top="50px"
                                  left="54%"
                                  transform="translateX(-54%)"
                                  bg="#FFFFFF"
                                  w="1524px"
                                  boxShadow="md"
                                  p="20px"
                                  zIndex="1000"
                                  display="flex"
                                  gap="20px"
                                >
                                  {/* Left Section with Design from Image */}
                                  <Box flex="1">
                                    <Text fontSize="24px" fontWeight="700" mb="10px" font="DM Sans" ml="150px">
                                      Built to Win
                                    </Text>
                                    <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml="150px">
                                      Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
                                    </Text>
                                    <Image src="/Lphone.png" alt="Design Image" width="100%" borderRadius="8px" />
                                  </Box>
              
                                  {/* Right Section with Services Categories */}
                                      <Box flex="2" display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="20px">
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
                                  top="50px"
                                  left="62%"
                                  transform="translateX(-62%)"
                                  bg="#FFFFFF"
                                  w="95rem"
                                  boxShadow="md"
                                  p="20px"
                                  zIndex="1000"
                                >
                                  <Flex   alignItems="center" justifyContent="space-between">
                                    {/* Left Section */}
                                    <Box flex="1">
                                    <Text fontSize="24px" fontWeight="700" mb="10px" font="DM Sans" ml="150px">
                                      Built to Win
                                    </Text>
                                    <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml="150px">
                                      Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
                                    </Text>
                                    <Image ml="50px" src="/Lphone.png" alt="Design Image" width="100%" borderRadius="8px" />
                                  </Box>
              
                                    {/* Right Section  */}
                                    <SimpleGrid columns={3} spacingX={20} spacingY={5} w="full" maxW="1100px" ml={{ md: 16 }}>
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

        {/* Search and Button */}
        <HStack spacing="20px" width="177px" height="44px" gap="20px">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: "28px", height: "28px" }} />

          <Button
            width="129px"
            height="44px"
            bg="#FFD700"
            color="#26241C"
            fontFamily="Poppins"
            fontWeight="400"
            fontSize="16px"
            lineHeight="19.2px"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;