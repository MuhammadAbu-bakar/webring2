import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  VStack,
  Text,
  Button,
  createIcon,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "./CustomButton";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] =
    useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] =
    useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileAboutDropdownOpen(false);
      setIsMobileServicesDropdownOpen(false);
    }
  };

  const toggleMobileAboutDropdown = () => {
    setIsMobileAboutDropdownOpen(!isMobileAboutDropdownOpen);
  };

  const toggleMobileServicesDropdown = () => {
    setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
  };

  const closeAllDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileAboutDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
  };

  const handleNavigation = (item, path) => {
    const targetPath =
      path || (item === "Home" ? "/" : `/${item.toLowerCase()}`);
    if (location.pathname !== targetPath) {
      navigate(targetPath);
    }
    setActiveLink(item);
    closeAllDropdowns();
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
    const servicePaths = [
      "web-development",
      "app-development",
      "graphic-designing",
      "social-media",
      "shopify-development",
      "perform-market",
      "content-writing",
    ];
    const aboutPaths = ["who-we-are", "our-partner", "our-mission"];
    if (navItems.includes(capitalizedPath)) {
      setActiveLink(capitalizedPath);
    } else if (servicePaths.includes(path)) {
      setActiveLink(
        path
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    } else if (aboutPaths.includes(path)) {
      setActiveLink("About");
    }
    closeAllDropdowns();
  }, [location.pathname]);

  const HamburgerIcon = createIcon({
    displayName: "HamburgerIcon",
    viewBox: "0 0 24 24",
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
    viewBox: "0 0 24 24",
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
          <Link to="/">
            <Image
              src="/logo.png"
              alt="Webring Logo"
              width="100%"
              height="60px"
            />
          </Link>
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
          >
            {navItems.map((item) => (
              <Box
                key={item}
                position="relative"
                onMouseEnter={() => {
                  if (item === "Services") setIsServicesDropdownOpen(true);
                  if (item === "About") setIsAboutDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item === "Services") setIsServicesDropdownOpen(false);
                  if (item === "About") setIsAboutDropdownOpen(false);
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
                  onClick={() => {
                    if (item === "About") {
                      return; // No navigation for About
                    }
                    handleNavigation(item);
                  }}
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
                    position="fixed"
                    top="60px"
                    left="0"
                    right="0"
                    width="100vw"
                    bg="#FFFFFF"
                    boxShadow="md"
                    p="20px"
                    zIndex="1000"
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    flexWrap="wrap"
                    border="1px solid #f0f0f0"
                    overflowX="hidden"
                  >
                    <Box
                      flex={{ base: "none", md: "1" }}
                      mb={{ base: "20px", md: "0" }}
                      textAlign="center"
                      display={{ base: "none", md: "block" }}
                    >
                      <Image
                        src="/Lphone.png"
                        alt="Design Image"
                        width="85%"
                        borderRadius="8px"
                        mx="auto"
                      />
                    </Box>
                    <Box
                      flex="3"
                      display="grid"
                      gridTemplateColumns={{
                        base: "1fr",
                        sm: "1fr 1fr",
                        md: "repeat(3, 1fr)",
                      }}
                      gap="20px"
                      position="relative"
                    >
                      <Box
                        display={{ base: "none", md: "block" }}
                        position="absolute"
                        top="28%"
                        left="0"
                        right="0"
                        height="2px"
                        bg="gray.300"
                      />
                      <Box
                        display={{ base: "none", md: "block" }}
                        position="absolute"
                        top="63%"
                        left="0"
                        right="0"
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
                      {[
                        { label: "Web Development", path: "/web-development" },
                        {
                          label: "Mobile App Development",
                          path: "/app-development",
                        },
                        {
                          label: "Graphic Designing",
                          path: "/graphic-designing",
                        },
                        {
                          label: "Social Media Marketing",
                          path: "/social-media",
                        },
                        {
                          label: "Shopify Development",
                          path: "/shopify-development",
                        },
                        {
                          label: "Performance Marketing",
                          path: "/perform-market",
                        },
                        { label: "Content Writing", path: "/content-writing" },
                      ].map((service, idx) => (
                        <Box key={idx}>
                          <Text
                            fontSize="18px"
                            fontWeight="700"
                            fontFamily="DM Sans"
                            cursor="pointer"
                            _hover={{
                              color: "#FFD700",
                              transform: "translateX(5px)",
                            }}
                            transition="all 0.2s"
                            onClick={() =>
                              handleNavigation(service.label, service.path)
                            }
                          >
                            {service.label}
                          </Text>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
                {item === "About" && isAboutDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left={{ base: "0", md: "50%" }}
                    transform={{ base: "none", md: "translateX(-50%)" }}
                    width={{ base: "100vw", md: "400px" }}
                    bg="#FFFFFF"
                    height="auto"
                    boxShadow="md"
                    p={{ base: "15px", md: "20px" }}
                    zIndex="1000"
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    borderTop="1px solid #f0f0f0"
                    overflowX="hidden"
                    borderRadius="8px"
                  >
                    
                    <Box
                      display={{ base: "none", md: "block" }}
                      width="auto"
                      pr={{ base: 0, md: "20px" }}
                    >
                      <Image
                        src="/vecteezy_about-us-button-web-banner-templates-vector-illustration_23649106.jpg"
                        alt="About Us"
                        w="100%"
                        maxW="170px"
                        objectFit="cover"
                        display="block"
                      />
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      pl={{ base: 0, md: 0 }}
                    >
                      <VStack align="start" spacing="16px" mt="0" ml="20">
                        {[
                          { label: "Who We Are", path: "/who-we-are" },
                          { label: "Our Partner", path: "/our-partner" },
                          { label: "Our Mission", path: "/our-mission" },
                        ].map((link) => (
                          <Text
                            key={link.label}
                            fontFamily="DM Sans"
                            fontWeight="600"
                            fontSize={{ base: "16px", md: "16px" }}
                            color="#26241C"
                            cursor="pointer"
                            whiteSpace="nowrap"
                            _hover={{
                              color: "#FFD700",
                              transform: "translateX(5px)",
                            }}
                            transition="all 0.2s"
                            onClick={() =>
                              handleNavigation(link.label, link.path)
                            }
                          >
                            {link.label}
                          </Text>
                        ))}
                      </VStack>
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
                        onClick={() =>
                          handleNavigation("Who We Are", "/who-we-are")
                        }
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
                          handleNavigation("Our Partner", "/our-partner")
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
                          handleNavigation("Our Mission", "/our-mission")
                        }
                      >
                        Our Mission
                      </Text>
                    </VStack>
                  )}
                </Box>
              ) : item === "Services" ? (
                <Box>
                  <Flex
                    align="center"
                    justify="space-between"
                    onClick={toggleMobileServicesDropdown}
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
                      onClick={() => handleNavigation("Services", "/services")}
                    >
                      {item}
                    </Text>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      color="white"
                      style={{
                        transform: isMobileServicesDropdownOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </Flex>
                  {isMobileServicesDropdownOpen && (
                    <VStack
                      align="start"
                      spacing="10px"
                      mt="10px"
                      pl="20px"
                      bg="#1a1a1a"
                      borderRadius="8px"
                      p="10px"
                    >
                      {[
                        { label: "Web Development", path: "/web-development" },
                        {
                          label: "Mobile App Development",
                          path: "/app-development",
                        },
                        {
                          label: "Graphic Designing",
                          path: "/graphic-designing",
                        },
                        {
                          label: "Social Media Marketing",
                          path: "/social-media",
                        },
                        {
                          label: "Shopify Development",
                          path: "/shopify-development",
                        },
                        {
                          label: "Performance Marketing",
                          path: "/perform-market",
                        },
                        { label: "Content Writing", path: "/content-writing" },
                      ].map((service) => (
                        <Text
                          key={service.label}
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
                            handleNavigation(service.label, service.path)
                          }
                        >
                          {service.label}
                        </Text>
                      ))}
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
