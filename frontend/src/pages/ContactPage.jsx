import React from 'react'
import {
  Container,
  Heading,
  Box,
  Image,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
 
 
const FloatingLabelInput = () => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        gap="20px"
        alignItems="center"
        justifyContent="center"
        height="50px"
        bg="#14140F"
        color="white"
      >
        <FloatingInput label="Full Name*" type="text" id="name" />
        <FloatingInput label="Email Address*" type="email" id="email" />
      </Box>
      <Box  
        alignItems="center"
        justifyContent="center"
        marginTop={"15px"}
        height="50px"
        bg="#14140F"
        color="white"
        width="100%"
      >
        <FloatingInput label="Website Link*" type="url" id="website" width="100%" />
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        marginTop={"25px"}
        bg="#14140F"
        color="white"
        width={"100%"}
      >
       
        <FloatingTextarea label="How Can We Help You*" id="message" />
      </Box>
     
     
    </Box>
  );
};
 
const FloatingInput = ({ label, type, id, width }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
 
  return (
    <Box position="relative" width={width || "300px"} mb={4}>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== "")}
        bg="transparent"
        border="none"
        borderBottom="2px solid white"
        color="white"
        fontSize="16px"
        py={2}
        px={1}
        _focus={{ outline: "none" }}
      />
      <Box
        position="absolute"
        left="5px"
        top={isFocused || value ? "-20px" : "50%"}
        transform={isFocused || value ? "none" : "translateY(-50%)"}
        fontSize={isFocused || value ? "15px" : "18px"}
        color="white"
        transition="all 0.3s ease-in-out"
        pointerEvents="none"
      >
        {label}
      </Box>
    </Box>
  );
};
 
const FloatingTextarea = ({ label, id }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
 
  return (
    <Box position="relative" width="100%" mb={4}>
      <Textarea
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== "")}
        bg="transparent"
        border="none"
        borderBottom="2px solid white"
        color="white"
        fontSize="16px"
        py={2}
        px={1}
        rows={6}
        _focus={{ outline: "none" }}
      />
      <Box
        position="absolute"
        left="5px"
        top={isFocused || value ? "-20px" : "5%"}
        transform={isFocused || value ? "none" : "translateY(-50%)"}
        fontSize={isFocused || value ? "15px" : "18px"}
        color="white"
        transition="all 0.3s ease-in-out"
        pointerEvents="none"
      >
        {label}
      </Box>
    </Box>
  );
};
 
const contactCards = [
  {
    id: 1,
    title: "Headquarters",
    description: "65-Z Block, Phase 3, DHA, Lahore, Lahore, Pakistan, Punjab 54810, PK",
    image: "/map.png",
  },
  {
    id: 2,
    title: "Email Address",
    description: "info@webring.ltd",
    image: "/message.png",
  },
  {
    id: 3,
    title: "Phone Number",
    description: "+92 319 6780744",
    image: "/phone.png",
  },
];
 
function Contect() {
  return (
    <Box width={"100%"} padding={0} margin={0}>
        <Image src="/Background.png" width="100%" height="543px" objectFit="cover" />
          {/* Cards */}
          <Box width="100%" padding="100px">
              <Container maxW="1920px" display="flex" flexWrap="wrap" justifyContent="center" gap="24px">
                {contactCards.map((card) => (
                  <Box
                    key={card.id}
                    width={{ base: "100%", md: "407px" }}
                    height="347px"
                    bgColor="#F8F8F6"
                    borderRadius="xl"
                    position="relative"
                    p={4}
                   
                  >
                    <Image src={card.image} width="36px" height="40px" mt="40px" ml={"35px"}/>
                    <Heading fontSize="32px" mt="50px" ml={"35px"} >{card.title}</Heading>
                    <Text fontSize="16px" fontWeight="normal"  mt="65px" ml={"35px"}>{card.description}</Text>
                  </Box>
                ))}
              </Container>
            </Box>
   
          {/* Form Box */}
          <Box width="100%" height="989px" position="absolute" gap={10}>
            <Image src="/Rectangle 39.png" width="50%" height="891px" zIndex={1} position="absolute" />
   
            <Box width="100%" height="842px" position="absolute" top="147px"  display="flex" bgColor="#14140F" justifyContent="end" alignItems="center">
              <Box top={"110px"}  position="absolute" zIndex={2} width="650px" height="659px">
                <Box width={"606px"} height={"184px"} gap={"29px"} padding={"0"} margin={"0"}>  
                  <Heading  color="white" fontSize="64px" width={"500px"} marginBottom={"25px"} lineHeight={"73px"}>Have Any Project on Your Mind?</Heading>
                  <Text color="white" fontSize="16px" fontWeight="normal" >
                    Great! We're excited to hear from you and let's start something
                  </Text>
                </Box>
   
                {/* Contact Form */}
                <Box width={"100%"} gap="40px" marginY="70px">
                 
                  <FloatingLabelInput />
   
                  <Button width="194px" height="56px" marginTop={"20px"} bgColor="#FED904" borderRadius={"5px"} color="#14140F" fontSize="20px">
                    Send Message
                  </Button>
                   
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
  )
}
 
export default Contect