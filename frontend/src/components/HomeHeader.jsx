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
import { faCaretDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const HomeHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);
  const [isTechnologiesDropdownOpen, setIsTechnologiesDropdownOpen] =
    useState(false);
  const [isInsightsDropdownOpen, setIsInsightsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] =
    useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileAboutDropdownOpen(false);
    }
  };

  const toggleMobileAboutDropdown = () => {
    setIsMobileAboutDropdownOpen(!isMobileAboutDropdownOpen);
  };

  const closeAllDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsAiDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
    setIsTechnologiesDropdownOpen(false);
    setIsInsightsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileAboutDropdownOpen(false);
  };

  const handleNavigation = (item, path) => {
    const targetPath =
      path || (item === "Home" ? "/" : `/${item.toLowerCase()}`);
    if (location.pathname !== targetPath) {
      navigate(targetPath);
    }
    closeAllDropdowns(); // Close all dropdowns and hamburger menu after navigation
    setActiveLink(item);
  };

  const navItems = ["Home", "About", "Services", "Portfolio"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const path =
      location.pathname === "/" ? "Home" : location.pathname.slice(1);
    const capitalizedPath = path.charAt(0).toUpperCase() + path.slice(1);
    if (navItems.includes(capitalizedPath)) {
      setActiveLink(capitalizedPath);
    }
    closeAllDropdowns(); // Close dropdowns and hamburger menu on page change
  }, [location.pathname]);

  // const servicesCategories = [
  //   {
  //     title: "App Development",

  //     services: [
  //       { name: "ISO App Development", icon: faChevronRight },
  //       { name: "Android App Development", icon: faChevronRight },
  //       { name: "Cross Platform App Development", icon: faChevronRight },
  //     ],
  //   },
  //   {
  //     title: "Graphic Designing",

  //     services: [
  //       { name: "Hire Android App Developer", icon: faChevronRight },
  //       { name: "Hire ISO App Developer", icon: faChevronRight },
  //       { name: "Hire Node.js Developer", icon: faChevronRight },
  //     ],
  //   },
  //   {
  //     title: "Content Writing",

  //     services: [
  //       { name: "ERP Solution", icon: faChevronRight },
  //       { name: "CRM Solution", icon: faChevronRight },
  //       { name: "CMS Solution", icon: faChevronRight },
  //     ],
  //   },
  //   {
  //     title: "Web Development",

  //     services: [
  //       { name: "Ecommerce Website Development", icon: faChevronRight },
  //       { name: "Web Portals", icon: faChevronRight },
  //     ],
  //   },
  //   {
  //     title: "Shopify Store Development",
  //     link: "/shopify-development",
  //     services: [
  //       { name: "Generative AI", icon: faChevronRight },
  //       { name: "Natural Language Processing", icon: faChevronRight },
  //       { name: "Speech Recognition", icon: faChevronRight },
  //     ],
  //   },
  //   {
  //     title: "Social Media Marketing",

  //     services: [
  //       { name: "Social Media Marketing", icon: faChevronRight },
  //       { name: "Search Engine Marketing", icon: faChevronRight },
  //       { name: "Search Engine Optimization", icon: faChevronRight },
  //     ],
  //   },
  //   {
  //     title: "Performance Marketing",

  //     services: [
  //       { name: "Social Media Marketing", icon: faChevronRight },
  //       { name: "Search Engine Marketing", icon: faChevronRight },
  //       { name: "Search Engine Optimization", icon: faChevronRight },
  //     ],
  //   },
  // ];

  const aiServices = [
    { name: "AI Chatbots", icon: faChevronRight, link: "/ai/chatbots" },
    {
      name: "Machine Learning",
      icon: faChevronRight,
      link: "/ai/machine-learning",
    },
    {
      name: "Data Analytics",
      icon: faChevronRight,
      link: "/ai/data-analytics",
    },
  ];

  const industries = [
    {
      title: "Automotive",
      desc: "Transforming automotive industry with bespoke tech.",
    },
    {
      title: "Healthcare",
      desc: "Better, accessible healthcare through tailored tech solutions.",
    },
    { title: "Education", desc: "Enhancing education with new-age EdTech." },
    {
      title: "Music",
      desc: "Advancing music industry with digital innovations.",
    },
    { title: "Real Estate", desc: "Innovating real estate with custom tech." },
    { title: "SAAS", desc: "Developing custom solutions for SAAS platforms." },
    { title: "Logistics", desc: "Optimizing logistics with intelligent tech." },
    {
      title: "Retail",
      desc: "Scaling retail businesses through advanced technology.",
    },
    {
      title: "On-Demand",
      desc: "Elevating on-demand services with innovative tech.",
    },
    { title: "ECommerce", desc: "Driving e-commerce growth with smart tech." },
    {
      title: "Fintech",
      desc: "Empowering fintech with specialized tech services.",
    },
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
    {
      title: "About Webring",
      desc: "Empowering startups and enterprises with custom digital solutions for transformation.",
    },
    {
      title: "Life At Webring",
      desc: "Join our inclusive, dynamic tech team. Grow, innovate, and thrive with us.",
    },
    {
      title: "Blogs",
      desc: "Explore insights and trends in tech with our expert-written blogs.",
    },
    {
      title: "Press",
      desc: "Get the latest news and updates about TekRevol's impact.",
    },
    {
      title: "Podcast",
      desc: "Listen to expert talks on tech and digital transformation.",
    },
    {
      title: "Events",
      desc: "Attend our events and webinars to learn and network.",
    },
    {
      title: "Referral Program",
      desc: "Refer talent to Webring and earn rewards.",
    },
  ];

  const noBorderItems2 = ["Podcast", "Events", "Referral Program"];
  const noBorderItems = ["ECommerce", "Fintech", "On-Demand"];

  const HamburgerIcon = createIcon({
    displayName: "HamburgerIcon",
    viewBox: "0 0 19 19",
    path: (
      <>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          stroke="white"
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
        <HStack spacing={2}>
          <Image
            src="/logo.png"
            alt="Webring Logo"
            width="100%"
            height="60px"
          />
        </HStack>
        <Flex
          display={{ base: "none", md: "flex" }}
          w="auto"
          h="100%"
          gap="30px"
          align="center"
        >
          <HStack
            spacing="30px"
            display={{ base: "none", md: "none", lg: "flex" }}
            font="DM Sans"
          >
            {navItems.map((item) => (
              <Box
                key={item}
                position="relative"
                onMouseEnter={() => {
                  if (item === "Services") setIsServicesDropdownOpen(true);
                  if (item === "AI Services") setIsAiDropdownOpen(true);
                  if (item === "Industries") setIsIndustriesDropdownOpen(true);
                  if (item === "Technologies")
                    setIsTechnologiesDropdownOpen(true);
                  if (item === "Insights") setIsInsightsDropdownOpen(true);
                  if (item === "About") setIsAboutDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item === "Services") setIsServicesDropdownOpen(false);
                  if (item === "AI Services") setIsAiDropdownOpen(false);
                  if (item === "Industries") setIsIndustriesDropdownOpen(false);
                  if (item === "Technologies")
                    setIsTechnologiesDropdownOpen(false);
                  if (item === "Insights") setIsInsightsDropdownOpen(false);
                  if (item === "About") setIsAboutDropdownOpen(false);
                }}
                onClick={() => {
                  if (item === "Home") {
                    handleNavigation("Home");
                  } else if (item === "About") {
                    return; // Do nothing when About is clicked
                  } else {
                    handleNavigation(item); // Other links work normally
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
                {item === "Services" && isServicesDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    onClick={(e) => e.stopPropagation()}
                    left={{ base: "0", md: "58%" }}
                    transform={{
                      base: "none",
                      md: "translateX(-30%)",
                      lg: "translateX(-66%)",
                      xl: "translateX(-66%)",
                    }}
                    bg="#FFFFFF"
                    w={{
                      base: "100vw",
                      md: "900px",
                      lg: "1140px",
                      xl: "1500px",
                    }}
                    boxShadow="md"
                    p="20px"
                    zIndex="1000"
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    gap="20px"
                    border="1px solid #f0f0f0"
                  >
                    <Box
                      flex="1"
                      mb={{ base: "20px", md: "0" }}
                      textAlign="center"
                    >
                      <Image
                        src="/Lphone.png"
                        alt="Design Image"
                        width={{ base: "80%", md: "85%" }}
                        borderRadius="8px"
                        mx={{ base: "auto", md: "25px" }}
                      />
                    </Box>
                    <Box
                      flex="2"
                      display="grid"
                      gridTemplateColumns={{
                        base: "1fr",
                        sm: "1fr 1fr",
                        md: "1fr 1fr 1fr",
                      }}
                      rowGap="20px"
                      columnGap={{ base: "10px", md: "20px" }}
                      position="relative"
                      pt="10px"
                    >
                      <Box
                        display={{ base: "none", md: "block" }}
                        position="absolute"
                        top="70px"
                        left="0"
                        right="20px"
                        height="2px"
                        width="83.5%"
                        bg="gray.300"
                      />
                      <Box
                        display={{ base: "none", md: "block" }}
                        position="absolute"
                        top="170px"
                        left="0"
                        right="20px"
                        height="2px"
                        width="83.5%"
                        bg="gray.300"
                      />
                      <Box
                        display={{ base: "none", md: "block" }}
                        position="absolute"
                        top="0"
                        bottom="0"
                        left="25%"
                        height="95%"
                        width="2px"
                        bg="gray.300"
                      />
                      <Box
                        display={{ base: "none", md: "block" }}
                        position="absolute"
                        top="0"
                        bottom="0"
                        left="60%"
                        width="2px"
                        height="95%"
                        bg="gray.300"
                        fontSize="18px"
                      />
                      <Box>
                        <Text
                          fontSize="18px"
                          fontWeight="700"
                          mb="28px"
                          fontFamily="DM Sans"
                          cursor="pointer"
                          _hover={{
                            color: "#FFD700",
                            transform: "translateX(5px)",
                          }}
                          transition="all 0.2s"
                          onClick={() =>
                            handleNavigation(
                              "Web Development",
                              "/web-developmentt"
                            )
                          }
                        >
                          Web Development
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize="18px"
                          fontWeight="700"
                          ml="-10px"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation(
                              "Mobile App Development",
                              "/app-development"
                            )
                          }
                          cursor="pointer"
                          _hover={{
                            color: "#FFD700",
                            transform: "translateX(5px)",
                          }}
                          transition="all 0.2s"
                        >
                          Mobile App Development
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize="18px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation(
                              "Graphic Designing",
                              "/graphic-designing"
                            )
                          }
                          cursor="pointer"
                          _hover={{
                            color: "#FFD700",
                            transform: "translateX(5px)",
                          }}
                          transition="all 0.2s"
                        >
                          Graphic Designing
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize="18px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation(
                              "Social Media Marketing",
                              "/social-media"
                            )
                          }
                          cursor="pointer"
                          _hover={{
                            color: "#FFD700",
                            transform: "translateX(5px)",
                          }}
                          transition="all 0.2s"
                        >
                          Social Media Marketing
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize="18px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation(
                              "Shopify Development",
                              "/shopify-development"
                            )
                          }
                          cursor="pointer"
                          _hover={{
                            color: "#FFD700",
                            transform: "translateX(5px)",
                          }}
                          transition="all 0.2s"
                        >
                          Shopify Development
                        </Text>
                        <Text
                          mt="70px"
                          ml="-7px"
                          fontSize="18px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation("Services", "/perform-market")
                          }
                          cursor="pointer"
                          _hover={{
                            color: "#FFD700",
                            transform: "translateX(5px)",
                          }}
                          transition="all 0.2s"
                        >
                          Performance Marketing
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize="18px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation(
                              " Content Writing",
                              "/content-writing"
                            )
                          }
                          cursor="pointer"
                          _hover={{
                            color: "#FFD700",
                            transform: "translateX(5px)",
                          }}
                          transition="all 0.2s"
                        >
                          Content Writing
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                )}
                {item === "About" && isAboutDropdownOpen && (
                  <Box
                    position="absolute"
                    onClick={(e) => e.stopPropagation()}
                    top="100%"
                    transform={{
                      base: "none",
                      md: "translateX(-30%)",
                      lg: "translateX(-60%)",
                      xl: "translateX(-60%)",
                    }}
                    bg="#FFFFFF"
                    sx={{
                      width: "100%", // Start with 100% width on smaller screens
                      maxWidth: "100%",

                      "@media screen and (min-width: 1536px)": {
                        width: "110%",
                      }, // For screens 1536px and up, width becomes 70%
                      "@media screen and (min-width: 1760px)": {
                        width: "120%",
                      }, // For screens 1760px and up, width becomes 65%
                      "@media screen and (min-width: 1920px)": {
                        width: "130%",
                      }, // For screens 1920px and up, width becomes 60%
                    }}
                    boxShadow="md"
                    p="20px"
                    zIndex="1000"
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    gap="20px"
                    border="1px solid #f0f0f0"
                  >
                    <Box flex="1" minWidth="200px" ml="100px">
                      <Image
                        src="/about.jpg"
                        alt="About Us"
                        width="100%"
                        maxWidth="400px"
                        borderRadius="8px"
                        objectFit="contain"
                        mt="20px"
                      />
                    </Box>
                    <Box
                      flex="2"
                      display="flex"
                      flexDirection="column"
                      minWidth="200px"
                      borderRight="1px dashed #E2E8F0"
                      pr="40px"
                      position="relative"
                    >
                      <VStack align="start" spacing="15px" ml="30px">
                        <Text
                          fontFamily="DM Sans"
                          fontWeight="600"
                          fontSize="18px"
                          color="#26241C"
                          cursor="pointer"
                          whiteSpace="nowrap"
                          _hover={{
                            color: "#FFD700",
                            transform: "translateX(5px)",
                          }}
                          transition="all 0.2s"
                          onClick={() =>
                            handleNavigation("Who We Are", "/who-we-are")
                          }
                          mt="70px"
                        >
                          Who We Are
                        </Text>
                        <Text
                          fontFamily="DM Sans"
                          fontWeight="600"
                          fontSize="18px"
                          color="#26241C"
                          cursor="pointer"
                          whiteSpace="nowrap"
                          _hover={{
                            color: "#FFD700",
                            transform: "translateX(5px)",
                          }}
                          transition="all 0.2s"
                          onClick={() =>
                            handleNavigation("Our Partner", "/our-partner")
                          }
                        >
                          Our Partner
                        </Text>
                        <Text
                          fontFamily="DM Sans"
                          fontWeight="600"
                          fontSize="18px"
                          color="#26241C"
                          cursor="pointer"
                          whiteSpace="nowrap"
                          _hover={{
                            color: "#FFD700",
                            transform: "translateX(5px)",
                          }}
                          transition="all 0.2s"
                          onClick={() =>
                            handleNavigation("Our Mission", "/our-mission")
                          }
                        >
                          Our Mission
                        </Text>
                      </VStack>
                    </Box>
                    <Box position="relative" zIndex="1">
                      <Box position="relative" zIndex="1">
                        <svg
                          width="100%"
                          height="250"
                          viewBox="0 0 1300 250"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 150 C 200 50, 400 50, 600 150 C 800 250, 1000 250, 1200 150 C 1400 50, 1600 50, 1600 150"
                            stroke="#FFD700"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <circle cx="0" cy="150" r="8" fill="#FFD700" />
                          <circle cx="200" cy="50" r="8" fill="#FFD700" />
                          <circle cx="400" cy="50" r="8" fill="#FFD700" />
                          <circle cx="600" cy="150" r="8" fill="#FFD700" />
                          <circle cx="800" cy="250" r="8" fill="#FFD700" />
                          <circle cx="1000" cy="250" r="8" fill="#FFD700" />
                          <circle cx="1200" cy="150" r="8" fill="#FFD700" />
                          <circle cx="1400" cy="50" r="8" fill="#FFD700" />
                          <circle cx="1600" cy="50" r="8" fill="#FFD700" />
                        </svg>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
          </HStack>
          <CustomButton
            text="Contact Us"
            onClick={() => handleNavigation("Contact", "/contact-form")}
          />
        </Flex>
        <Button
          display={{ base: "block", md: "block", lg: "none" }}
          bgColor={"transparent"}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <CloseIcon boxSize={6} />
          ) : (
            <HamburgerIcon boxSize={7} />
          )}
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
          borderRadius="10px"
          transform={isMobileMenuOpen ? "translateY(0)" : "translateY(-10px)"}
          transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
          opacity={isMobileMenuOpen ? 1 : 0}
        >
          {["Home", "About", "Services", "Portfolio"].map((item) => (
            <Box key={item} w="100%">
              {item === "About" ? (
                <Box>
                  <Flex
                    align="center"
                    justify="space-between"
                    onClick={toggleMobileAboutDropdown}
                    cursor="pointer"
                    py="5px"
                    borderRadius="8px"
                    _hover={{ bg: "#f4f4f4", transform: "scale(1.05)" }}
                    transition="all 0.2s ease-in-out"
                  >
                    <Text
                      fontFamily="DM Sans"
                      fontWeight="600"
                      fontSize="20px"
                      color="white"
                    >
                      {item}
                    </Text>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      color="white"
                      style={{
                        transform: isMobileAboutDropdownOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </Flex>
                  {isMobileAboutDropdownOpen && (
                    <VStack
                      align="start"
                      spacing="10px"
                      mt="10px"
                      pl="20px"
                      bg="#1a1a1a"
                      borderRadius="8px"
                      p="10px"
                    >
                      <Text
                        fontFamily="DM Sans"
                        fontWeight="500"
                        fontSize="18px"
                        color="white"
                        cursor="pointer"
                        _hover={{
                          color: "#FFD700",
                          transform: "translateX(5px)",
                        }}
                        transition="all 0.2s"
                        onClick={() => handleNavigation("About", "/who-we-are")}
                      >
                        Who We Are
                      </Text>
                      <Text
                        fontFamily="DM Sans"
                        fontWeight="500"
                        fontSize="18px"
                        color="white"
                        cursor="pointer"
                        _hover={{
                          color: "#FFD700",
                          transform: "translateX(5px)",
                        }}
                        transition="all 0.2s"
                        onClick={() =>
                          handleNavigation("About", "/our-partner")
                        }
                      >
                        Our Partner
                      </Text>
                      <Text
                        fontFamily="DM Sans"
                        fontWeight="500"
                        fontSize="18px"
                        color="white"
                        cursor="pointer"
                        _hover={{
                          color: "#FFD700",
                          transform: "translateX(5px)",
                        }}
                        transition="all 0.2s"
                        onClick={() =>
                          handleNavigation("About", "/our-mission")
                        }
                      >
                        Our Mission
                      </Text>
                    </VStack>
                  )}
                </Box>
              ) : (
                <Text
                  fontFamily="DM Sans"
                  fontWeight="600"
                  fontSize="20px"
                  color="white"
                  cursor="pointer"
                  w="100%"
                  py="5px"
                  borderRadius="8px"
                  _hover={{ bg: "#f4f4f4", transform: "scale(1.05)" }}
                  transition="all 0.2s ease-in-out"
                  onClick={() => handleNavigation(item)}
                >
                  {item}
                </Text>
              )}
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default HomeHeader;
