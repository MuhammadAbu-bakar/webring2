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

  const navItems = ["Home", "About", "Services", "Portfolio", "Blog"];

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

  const servicesCategories = [
    {
      title: "App Development",
      link: "/app-development",
      services: [
        { name: "ISO App Development", icon: faChevronRight },
        { name: "Android App Development", icon: faChevronRight },
        { name: "Cross Platform App Development", icon: faChevronRight },
      ],
    },
    {
      title: "Graphic Designing",
      link: "/graphic-designing",
      services: [
        { name: "Hire Android App Developer", icon: faChevronRight },
        { name: "Hire ISO App Developer", icon: faChevronRight },
        { name: "Hire Node.js Developer", icon: faChevronRight },
      ],
    },
    {
      title: "Content Writing",
      link: "/content-writing",
      services: [
        { name: "ERP Solution", icon: faChevronRight },
        { name: "CRM Solution", icon: faChevronRight },
        { name: "CMS Solution", icon: faChevronRight },
      ],
    },
    {
      title: "Web Development",
      link: "/web-developmentt",
      services: [
        { name: "Ecommerce Website Development", icon: faChevronRight },
        { name: "Web Portals", icon: faChevronRight },
      ],
    },
    {
      title: "Shopify Store Development",
      link: "/shopify-development",
      services: [
        { name: "Generative AI", icon: faChevronRight },
        { name: "Natural Language Processing", icon: faChevronRight },
        { name: "Speech Recognition", icon: faChevronRight },
      ],
    },
    {
      title: "Social Media Marketing",
      link: "/social-media",
      services: [
        { name: "Social Media Marketing", icon: faChevronRight },
        { name: "Search Engine Marketing", icon: faChevronRight },
        { name: "Search Engine Optimization", icon: faChevronRight },
      ],
    },
    {
      title: "Performance Marketing",
      link: "/perform-market",
      services: [
        { name: "Social Media Marketing", icon: faChevronRight },
        { name: "Search Engine Marketing", icon: faChevronRight },
        { name: "Search Engine Optimization", icon: faChevronRight },
      ],
    },
  ];

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
    <Box
      w="100%"
      h="80px"
      px={{ base: "20px", md: "50px", lg: "100px" }}
      py="10px"
      maxWidth={"100%"}
      position="relative"
      top={isVisible ? "0" : "-100px"}
      left="0"
      zIndex="1000"
      bg="white"
      transition="top 0.3s ease-in-out, background 0.3s ease-in-out"
    >
      <Flex align="center" justify="space-between" w="100%" h="100%">
        <HStack spacing={2}>
          <Image
            src="/webring.png"
            alt="Webring Logo"
            width={{ base: "90px", md: "100px" }}
            height="auto"
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
                  if (item === "About") return;
                  if (item === "Home") {
                    handleNavigation("Home");
                  } else if (item === "Portfolio") {
                    handleNavigation("Portfolio");
                  } else if (item === "Services") {
                    handleNavigation("Services");
                  } else {
                    handleNavigation(item);
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
                  py={6}
                >
                  <Text
                    fontSize="18px"
                    fontWeight="600"
                    color={"black"}
                    _hover={{ color: "#FED904" }}
                  >
                    {item}
                  </Text>
                </Box>
                {item === "Services" && isServicesDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
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
                    borderRadius="8px"
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
                        top="80px"
                        left="0"
                        right="20px"
                        height="2px"
                        bg="gray.300"
                      />
                      <Box
                        display={{ base: "none", md: "block" }}
                        position="absolute"
                        top="170px"
                        left="0"
                        right="20px"
                        height="2px"
                        bg="gray.300"
                      />
                      <Box
                        display={{ base: "none", md: "block" }}
                        position="absolute"
                        top="0"
                        bottom="0"
                        left="25%"
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
                        bg="gray.300"
                      />
                      <Box>
                        <Text
                          fontSize="16px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation("Services", "/web-development")
                          }
                          cursor="pointer"
                          _hover={{ color: "#FFD700" }}
                        >
                          Web Development
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize="16px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation(
                              "Services",
                              "/mobile-app-development"
                            )
                          }
                          cursor="pointer"
                          _hover={{ color: "#FFD700" }}
                        >
                          Mobile App Development
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize="16px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation("Services", "/ui-ux-design")
                          }
                          cursor="pointer"
                          _hover={{ color: "#FFD700" }}
                        >
                          UI/UX Design
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize="16px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation(
                              "Services",
                              "/ecommerce-development"
                            )
                          }
                          cursor="pointer"
                          _hover={{ color: "#FFD700" }}
                        >
                          E-commerce Development
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize="16px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation("Services", "/shopify-development")
                          }
                          cursor="pointer"
                          _hover={{ color: "#FFD700" }}
                        >
                          Shopify Development
                        </Text>
                        <Text
                          mt="70px"
                          fontSize="16px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation(
                              "Services",
                              "/performance-marketing"
                            )
                          }
                          cursor="pointer"
                          _hover={{ color: "#FFD700" }}
                          pl="1px"
                        >
                          Performance Marketing
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize="16px"
                          fontWeight="700"
                          mb="10px"
                          fontFamily="DM Sans"
                          onClick={() =>
                            handleNavigation("Services", "/digital-marketing")
                          }
                          cursor="pointer"
                          _hover={{ color: "#FFD700" }}
                        >
                          Digital Marketing
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                )}
                {item === "About" && isAboutDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left={{ base: "0", md: "60%" }}
                    transform={{
                      base: "none",
                      md: "translateX(-30%)",
                      lg: "translateX(-60%)",
                      xl: "translateX(-60%)",
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
                    borderRadius="8px"
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
                        mt="50px"
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
                          fontWeight="500"
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
                            handleNavigation("About", "/who-we-are")
                          }
                          mt="70px"
                        >
                          Who We Are
                        </Text>
                        <Text
                          fontFamily="DM Sans"
                          fontWeight="500"
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
                            handleNavigation("About", "/our-partner")
                          }
                        >
                          Our Partner
                        </Text>
                        <Text
                          fontFamily="DM Sans"
                          fontWeight="500"
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
                            handleNavigation("About", "/our-mission")
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
                    <Box flex="1">
                      <Text
                        fontSize="22px"
                        fontWeight="700"
                        mb="10px"
                        font="DM Sans"
                        ml="155px"
                      >
                        Built to Win with AI
                      </Text>
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        font="Yantramanav"
                        mb="20px"
                        ml="155px"
                      >
                        Harness the power of AI to transform
                        <br /> your business. Our AI services are
                        <br /> designed to drive innovation, efficiency,
                        <br /> and growth across industries.
                      </Text>
                      <Image
                        src="/aiHeader.jpg"
                        alt="AI Design Image"
                        width="55%"
                        borderRadius="8px"
                        ml="155px"
                      />
                    </Box>
                    <Box
                      flex="2"
                      display="grid"
                      gridTemplateColumns="1fr 1fr 1fr"
                      gap={{ md: "10px", lg: "20px" }}
                    >
                      {aiServices.map((service) => (
                        <Box key={service.name}>
                          <Flex
                            align="center"
                            cursor="pointer"
                            borderRadius="8px"
                            _hover={{ bg: "#FFD700" }}
                            onClick={() =>
                              handleNavigation("AI Services", service.link)
                            }
                          >
                            <Text
                              fontSize="16px"
                              fontWeight="700"
                              font="Yantramanav"
                            >
                              {service.name}
                            </Text>
                          </Flex>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
                {item === "Industries" && isIndustriesDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="42%"
                    transform={{
                      lg: "translateX(-42%)",
                      xl: "translateX(-42%)",
                    }}
                    bg="#FFFFFF"
                    w={{ md: "900px", lg: "1140px", xl: "1500px" }}
                    boxShadow="md"
                    p="20px"
                    zIndex="1000"
                  >
                    <Flex
                      direction={{ base: "column", md: "row" }}
                      alignItems="start"
                      justifyContent="space-between"
                    >
                      <Box flex="1" width={"30%"}>
                        <Text
                          fontSize="24px"
                          fontWeight="700"
                          mb="10px"
                          font="DM Sans"
                          ml="70px"
                          mt="25px"
                        >
                          Built to Win
                        </Text>
                        <Text
                          fontSize="16px"
                          fontWeight="400"
                          font="Yantramanav"
                          mb="20px"
                          whiteSpace="pre-line"
                          ml="70px"
                        >
                          Transforming business with our future-
                          <br />
                          ready tech solutions. Get custom
                          <br /> products for accelerated digital
                          <br /> transformation across industries globally.
                        </Text>
                        <Image
                          ml="70px"
                          pt="25px"
                          src="/industriesHeader.jpg"
                          alt="Design Image"
                          width="65%"
                          borderRadius="8px"
                        />
                      </Box>
                      <SimpleGrid
                        columns={3}
                        spacingX={20}
                        spacingY={5}
                        w="full"
                        maxW={{ md: "850px", lg: "65%", xl: "70%" }}
                        ml={{ md: 18 }}
                      >
                        {industries.map((item, index) => (
                          <Box key={index} marginRight={"20px"}>
                            <Box
                              pb={5}
                              pt={5}
                              borderBottom={
                                noBorderItems.includes(item.title)
                                  ? "none"
                                  : "2px solid #ccc"
                              }
                              w="full"
                              pr={10}
                            >
                              <Heading
                                fontSize="20px"
                                fontWeight="semibold"
                                mb={1}
                                font="DM Sans"
                              >
                                {item.title}
                              </Heading>
                              <Text
                                fontSize="16px"
                                color="gray.600"
                                mt={2}
                                font="Yantramanav"
                              >
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
                    top="100%"
                    left="54%"
                    transform="translateX(-54%)"
                    bg="#FFFFFF"
                    w={{ md: "900px", lg: "1000px", xl: "1300px" }}
                    boxShadow="md"
                    p="20px"
                    zIndex="1000"
                    display="flex"
                    gap="20px"
                  >
                    <Box flex="1">
                      <Text
                        fontSize="24px"
                        fontWeight="700"
                        mb="10px"
                        font="DM Sans"
                        ml="100px"
                      >
                        Built to Win
                      </Text>
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        font="Yantramanav"
                        mb="20px"
                        ml="100px"
                        whiteSpace="pre-line"
                      >
                        Transforming business with our future-
                        <br />
                        ready tech solutions. Get custom
                        <br /> products for accelerated digital
                        <br /> transformation across industries
                        <br /> globally.
                      </Text>
                      <Image
                        src="/technologiesHeader.png"
                        alt="Design Image"
                        width="45%"
                        borderRadius="8px"
                        ml={"90px"}
                      />
                    </Box>
                    <Box
                      flex="1"
                      display="grid"
                      gridTemplateColumns="1fr 1fr 1fr"
                      gap="10px"
                      ml="30px"
                    >
                      {technologiesCategories.map((category) => (
                        <Box key={category.title}>
                          <Text
                            fontSize="16px"
                            fontWeight="700"
                            mb="10px"
                            font="DM Sans"
                          >
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
                                onClick={() =>
                                  handleNavigation("Technologies", item.link)
                                }
                              >
                                <FontAwesomeIcon
                                  icon={faChevronRight}
                                  style={{ marginRight: "10px" }}
                                />
                                <Text
                                  fontSize="14px"
                                  fontWeight="400"
                                  font="Yantramanav"
                                >
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
                {item === "Insights" && isInsightsDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="62%"
                    transform={{
                      lg: "translateX(-60%)",
                      xl: "translateX(-60%)",
                    }}
                    bg="#FFFFFF"
                    w={{ md: "900px", lg: "1140px", xl: "1400px" }}
                    boxShadow="md"
                    p="20px"
                    zIndex="1000"
                  >
                    <Flex alignItems="center" justifyContent="space-between">
                      <Box flex="1" width={"30%"}>
                        <Text
                          fontSize="24px"
                          fontWeight="700"
                          mb="10px"
                          font="DM Sans"
                          ml="100px"
                        >
                          Built to Win
                        </Text>
                        <Text
                          fontSize="16px"
                          fontWeight="400"
                          font="Yantramanav"
                          mb="20px"
                          ml="100px"
                        >
                          Transforming business with our future-ready tech
                          solutions. Get custom products for accelerated digital
                          transformation across industries globally.
                        </Text>
                        <Image
                          ml="50px"
                          src="/Lphone.png"
                          alt="Design Image"
                          width="300px"
                          borderRadius="8px"
                        />
                      </Box>
                      <SimpleGrid
                        columns={3}
                        spacingX={20}
                        spacingY={5}
                        w="full"
                        maxW={{ md: "850px", lg: "65%", xl: "70%" }}
                        ml={{ md: 16 }}
                      >
                        {insights.map((item, index) => (
                          <Box key={index} marginRight={"20px"}>
                            <Box
                              pb={5}
                              pt={5}
                              borderBottom={
                                noBorderItems2.includes(item.title)
                                  ? "none"
                                  : "2px solid #ccc"
                              }
                              w="full"
                              pr={10}
                            >
                              <Heading
                                fontSize="20px"
                                fontWeight="semibold"
                                mb={1}
                                font="DM Sans"
                              >
                                {item.title}
                              </Heading>
                              <Text
                                fontSize="16px"
                                color="gray.600"
                                mt={2}
                                font="Yantramanav"
                              >
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
          {["Home", "About", "Services", "Portfolio", "Blog"].map((item) => (
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
