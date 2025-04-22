import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      as="footer"
      bg="#14140F"
      color="white"
      py={10}
      px={{ base: 6, md: 20 }}
      w="100%"
    >
      {/* Main Footer Content */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "start", md: "start" }}
        maxW="1523px"
        mx="auto"
        py={6}
        borderBottomWidth="1px"
        borderColor="gray.700"
        textAlign={{ base: "left", md: "left" }}
      >
        {/* Left Section */}
        <VStack align="start" spacing={4} w={{ base: "100%", md: "50%" }}>
          <Image src="/logo.png" alt="Webring Logo" w="105px" h="69px" />
          <Text fontSize="18px" fontWeight="400" color="#F8F8F6" pt="25px">
            We offer unparalleled expertise and dedicated
            <br /> support to drive your business toward
            <br /> sustained growth and success.
          </Text>
        </VStack>

        {/* Right Section */}
        <VStack align="start" spacing={4} maxW="538px" mt={{ base: 10, md: 0 }}>
          <Text fontWeight="bold" fontSize="xl" color="#F8F8F6" pt="50px">
            Let's Embark On Something Exceptional Together.
          </Text>
          <Text fontSize="md" pb="20px">
            Our team of IT specialists is eager to collaborate with you,
            offering tailored insights and solutions designed to meet your
            unique business needs.
          </Text>
          <Button
            bg="yellow.400"
            color="black"
            _hover={{ bg: "yellow.500" }}
            onClick={() => navigate("/contact-form")}
          >
            Get an appointment now
          </Button>
          {/* <HStack spacing={6} mt={4} align="center">
            <VStack color="#F8F8F6">
              <Text fontWeight="bold">2 Mins</Text>
              <Text fontSize="xs">Response Time</Text>
            </VStack>
            <VStack color="#F8F8F6">
              <Text fontWeight="bold">99%</Text>
              <Text fontSize="xs">Client Satisfaction</Text>
            </VStack>
            <VStack color="#F8F8F6">
              <Text fontWeight="bold">22+ Years</Text>
              <Text fontSize="xs">Field Experience</Text>
            </VStack>
          </HStack> */}
        </VStack>
      </Flex>

      {/* Services, Company & Contact Info Section */}
      <Flex
        wrap="wrap"
        maxW="1523px"
        mx="auto"
        justify="space-between"
        py={6}
        borderBottomWidth="1px"
        borderColor="gray.700"
        textAlign="left"
      >
        {/* Services Section */}
        <Box w={{ base: "100%", md: "404px" }} mb={6} font="DM Sans">
          <Text fontWeight="500" color="#F8F8F6" mb={6}>
            Services
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 0, md: 10 }}
          >
            {/* Single column for mobile */}
            <VStack
              align="start"
              color="#F8F8F6"
              spacing={8}
              display={{ base: "flex", md: "none" }}
            >
              <Link color="white">Web Development</Link>
              <Link color="white">App Development</Link>
              <Link color="white">Game Development</Link>
              <Link color="white">Graphic Designing</Link>
              <Link color="white">Social Media Marketing</Link>
              <Link color="white">Content Writing</Link>
            </VStack>
            {/* Two columns for desktop */}
            <VStack
              align="start"
              color="#F8F8F6"
              spacing={8}
              display={{ base: "none", md: "flex" }}
              w="50%"
            >
              <Link color="white">Web Development</Link>
              <Link color="white">App Development</Link>
              <Link color="white">Game Development</Link>
            </VStack>
            <VStack
              align="start"
              color="#F8F8F6"
              spacing={8}
              display={{ base: "none", md: "flex" }}
              w="50%"
            >
              <Link color="white">Graphic Designing</Link>
              <Link color="white">Social Media Marketing</Link>
              <Link color="white">Content Writing</Link>
            </VStack>
          </Flex>
        </Box>

        {/* Company Section */}
        <Box w={{ base: "100%", md: "227px" }} mb={6}>
          <Text fontWeight="500" color="#F8F8F6" mb={6}>
            Company
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 0, md: 8 }}
          >
            {/* Single column for mobile */}
            <VStack
              align="start"
              color="#F8F8F6"
              spacing={8}
              display={{ base: "flex", md: "none" }}
            >
              <Link color="white">About Us</Link>
              <Link color="white">Contact Us</Link>
              <Link color="white">Services</Link>
              <Link color="white">Blog</Link>
              <Link color="white">Team</Link>
              <Link color="white">Partners</Link>
            </VStack>
            {/* Two columns for desktop */}
            <VStack
              align="start"
              color="#F8F8F6"
              spacing={8}
              display={{ base: "none", md: "flex" }}
              w="50%"
            >
              <Link color="white">About Us</Link>
              <Link color="white">Contact Us</Link>
              <Link color="white">Services</Link>
            </VStack>
            <VStack
              align="start"
              color="#F8F8F6"
              spacing={8}
              display={{ base: "none", md: "flex" }}
              w="50%"
            >
              <Link color="white">Blog</Link>
              <Link color="white">Team</Link>
              <Link color="white">Partners</Link>
            </VStack>
          </Flex>
        </Box>

        {/* Contact Info Section */}
        <VStack
          align="start"
          color="#F8F8F6"
          w={{ base: "100%", md: "auto" }}
          font="DM Sans"
          mr="140px"
        >
          <Text fontWeight="500">Phone</Text>
          <Text pt="3px">+92 319 6780744</Text>
          <Text fontWeight="500" mt={3}>
            Mail
          </Text>
          <Text pt="1px">info@webring.ltd</Text>
        </VStack>
      </Flex>

      {/* Copyright */}
      <Text
        fontSize="16px"
        textAlign={{ base: "center", md: "end" }}
        mt={10}
        color="#9A9579"
      >
        © 2025 All rights reserved by Webring.ltd
      </Text>
    </Box>
  );
};

export default Footer;
