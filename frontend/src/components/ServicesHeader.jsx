import React, { useState } from "react";
import { Box, Flex, HStack, Button, Text, Image, VStack, SimpleGrid, Heading, createIcon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const [isTechnologiesDropdownOpen, setIsTechnologiesDropdownOpen] = useState(false);
  const [isInsightsDropdownOpen, setIsInsightsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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
    { title: "Press", desc: "Get the latest news and updates about TekRevol's impact." },
    { title: "Podcast", desc: "Listen to expert talks on tech and digital transformation." },
    { title: "Events", desc: "Attend our events and webinars to learn and network." },
    { title: "Referral Program", desc: "Refer talent to Webring and earn rewards." },
  ];

  const noBorderItems2 = ["Podcast", "Events", "Referral Program"];
  const noBorderItems = ["ECommerce", "Fintech", "On-Demand"];

  const handleNavigation = (item) => {
    const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
    navigate(path);
    setMobileMenuOpen(false); // Close the mobile menu after navigation
  };

  const handleDropdownOpen = (item) => {
    if (item === "About") setIsAboutDropdownOpen(true);
    if (item === "Services") setIsServicesDropdownOpen(true);
    if (item === "AI Services") setIsAiDropdownOpen(true);
    if (item === "Industries") setIsIndustriesDropdownOpen(true);
    if (item === "Technologies") setIsTechnologiesDropdownOpen(true);
    if (item === "Insights") setIsInsightsDropdownOpen(true);
  };

  const handleDropdownClose = (item) => {
    if (item === "About") setIsAboutDropdownOpen(false);
    if (item === "Services") setIsServicesDropdownOpen(false);
    if (item === "AI Services") setIsAiDropdownOpen(false);
    if (item === "Industries") setIsIndustriesDropdownOpen(false);
    if (item === "Technologies") setIsTechnologiesDropdownOpen(false);
    if (item === "Insights") setIsInsightsDropdownOpen(false);
  };

  const renderDropdownMenu = (item) => {
    if (item === "About" && isAboutDropdownOpen) {
      return (
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
            <Text fontFamily="DM Sans" fontWeight="500" fontSize="18px" color="#26241C" cursor="pointer" _hover={{ color: "#FFD700" }} onClick={() => navigate("/who-we-are")}>
              Who We Are
            </Text>
            <Text fontFamily="DM Sans" fontWeight="500" fontSize="18px" color="#26241C" cursor="pointer" _hover={{ color: "#FFD700" }} onClick={() => navigate("/our-partner")}>
              Our Partner
            </Text>
            <Text fontFamily="DM Sans" fontWeight="500" fontSize="18px" color="#26241C" cursor="pointer" _hover={{ color: "#FFD700" }} onClick={() => navigate("/our-mission")}>
              Our Mission
            </Text>
          </VStack>
        </Box>
      );
    }

    if (item === "Services" && isServicesDropdownOpen) {
      return (
        <Box
          position="absolute"
          top="50px"
          left="40%"
          transform="translateX(-40%)"
          bg="#FFFFFF"
          w={{ base: "90%", md: "1540px" }}
          boxShadow="md"
          p="20px"
          zIndex="1000"
          display="flex"
          gap="20px"
        >
          <Box flex="1">
            <Text fontSize="24px" fontWeight="700" mb="10px" font="DM Sans" ml={{ base: "20px", md: "150px" }}>
              Built to Win
            </Text>
            <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml={{ base: "20px", md: "150px" }}>
              Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
            </Text>
            <Image src="/Lphone.png" alt="Design Image" width="100%" borderRadius="8px" />
          </Box>

          <Box flex="2" display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap="20px">
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
      );
    }

    if (item === "AI Services" && isAiDropdownOpen) {
      return (
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
      );
    }

    if (item === "Industries" && isIndustriesDropdownOpen) {
      return (
        <Box
          position="absolute"
          top="50px"
          left="50%"
          transform="translateX(-50%)"
          bg="#FFFFFF"
          w={{ base: "90%", md: "1510px" }}
          boxShadow="md"
          p="20px"
          zIndex="1000"
        >
          <Flex direction={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-between">
            <Box flex="1">
              <Text fontSize="24px" fontWeight="700" mb="10px" font="DM Sans" ml={{ base: "20px", md: "150px" }}>
                Built to Win
              </Text>
              <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml={{ base: "20px", md: "150px" }}>
                Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
              </Text>
              <Image ml={{ base: "20px", md: "50px" }} src="/Lphone.png" alt="Design Image" width="100%" borderRadius="8px" />
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacingX={20} spacingY={5} w="full" maxW="1100px" ml={{ md: 16 }}>
              {industries.map((item, index) => (
                <Box key={index} marginRight={"20px"}>
                  <Box
                    pb={5}
                    pt={5}
                    borderBottom={noBorderItems.includes(item.title) ? "none" : "2px solid #ccc"}
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
      );
    }

    if (item === "Technologies" && isTechnologiesDropdownOpen) {
      return (
        <Box
          position="absolute"
          top="50px"
          left="50%"
          transform="translateX(-50%)"
          bg="#FFFFFF"
          w={{ base: "90%", md: "1524px" }}
          boxShadow="md"
          p="20px"
          zIndex="1000"
          display="flex"
          gap="20px"
        >
          <Box flex="1">
            <Text fontSize="24px" fontWeight="700" mb="10px" font="DM Sans" ml={{ base: "20px", md: "150px" }}>
              Built to Win
            </Text>
            <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml={{ base: "20px", md: "150px" }}>
              Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
            </Text>
            <Image src="/Lphone.png" alt="Design Image" width="100%" borderRadius="8px" />
          </Box>

          <Box flex="2" display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap="20px">
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
      );
    }

    if (item === "Insights" && isInsightsDropdownOpen) {
      return (
        <Box
          position="absolute"
          top="50px"
          left="50%"
          transform="translateX(-50%)"
          bg="#FFFFFF"
          w={{ base: "90%", md: "95rem" }}
          boxShadow="md"
          p="20px"
          zIndex="1000"
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Box flex="1">
              <Text fontSize="24px" fontWeight="700" mb="10px" font="DM Sans" ml={{ base: "20px", md: "150px" }}>
                Built to Win
              </Text>
              <Text fontSize="16px" fontWeight="400" font="Yantramanav" mb="20px" ml={{ base: "20px", md: "150px" }}>
                Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
              </Text>
              <Image ml={{ base: "20px", md: "50px" }} src="/Lphone.png" alt="Design Image" width="100%" borderRadius="8px" />
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacingX={20} spacingY={5} w="full" maxW="1100px" ml={{ md: 16 }}>
              {insights.map((item, index) => (
                <Box key={index} marginRight={"20px"}>
                  <Box
                    pb={5}
                    pt={5}
                    borderBottom={noBorderItems2.includes(item.title) ? "none" : "2px solid #ccc"}
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
      );
    }

    return null;
  };

  const HamburgerIcon = createIcon({
    displayName: "HamburgerIcon",
    viewBox: "0 0 19 19",
    path: (
      <>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          stroke="black"
          fill="none"
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
          stroke="black"
          fill="none"
          d="M6 6l12 12M18 6l-12 12"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
  });

  return (
    <Box as="header" bg="white" px={{ base: "20px", md: "50px", lg: "100px" }} py="20px" width="100%" height="auto">
      <Flex direction={{ base: "row", md: "row" }} justify="space-between" align="center">
        {/* Logo */}
        <Image src="/webring.png" alt="Webring Logo" width={{ base: "90px", md: "100px" }} height="auto" />

        {/* Navigation Links */}
        <HStack
          display={{ base: "none", md: "none", lg: "flex" }}
          mt={"10px"}
          spacing={{ base: "20px", md: "30px" }}
          height="auto"
          gap={{ base: "20px", md: "20px", lg: "27px" }}
        >
          {["Home", "About", "Services", "Industries", "Technologies", "Insights", "Portfolio", "Blog"].map((item) => (
            <Box
              key={item}
              position="relative"
              onMouseEnter={() => handleDropdownOpen(item)}
              onMouseLeave={() => handleDropdownClose(item)}
              cursor="pointer"
            >
              <HStack spacing="4px">
                <Text
                  fontFamily="DM Sans"
                  fontWeight="500"
                  fontSize={{ base: "18px", lg: "20px" }}
                  lineHeight="100%"
                  color="#26241C"
                  cursor="pointer"
                  onClick={() => handleNavigation(item)}
                >
                  {item}
                </Text>
                {(item === "About" || item === "Services") && <FontAwesomeIcon icon={faCaretDown} />}
              </HStack>

              {/* Dropdown Menus */}
              {renderDropdownMenu(item)}
            </Box>
          ))}
        </HStack>

        {/* Right Section (Search, Contact Button, Hamburger Menu) */}
        <HStack display={{ base: "none", md: "none", lg: "none", xl: "flex" }} spacing="16px" gap={"20px"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: "24px", height: "24px" }} />
          <Button
            width={{ base: "90px", md: "120px" }}
            height="40px"
            bg="#FFD700"
            color="#26241C"
            fontSize="14px"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </HStack>

        {/* Hamburger Menu (Visible on Mobile) */}
        <Button display={{ base: "block", md: "block", lg: "none" }} bgColor={"white"} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon boxSize={6} /> : <HamburgerIcon boxSize={7} />}
        </Button>
      </Flex>

      {isMobileMenuOpen && (
        <VStack
          bg="black"
          position="absolute"
          top="85px"
          right={{ base: "0", md: "40px" }}
          width={{ base: "100%", md: "50%" }}
          boxShadow="md"
          spacing="10px"
          p="20px"
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
              fontWeight="500"
              fontSize="22px"
              color="white"
              cursor="pointer"
              onClick={() => handleNavigation(item)}
              _hover={{ bg: "#f4f4f4", transform: "scale(1.05)" }} // Subtle hover effect
              transition="all 0.2s ease-in-out"
              w="100%"
              py="5px"
              borderRadius="8px"
            >
              {item}
            </Text>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Header;