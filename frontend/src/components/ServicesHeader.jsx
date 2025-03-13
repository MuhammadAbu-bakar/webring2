import React from "react";
import { Box, Flex, HStack, Button, Text, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Header = () => {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  return (
    <Box as="header" bg="white" px="100px" py="20px" width="100%" height="110px">
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Image src="/logo2.png" alt="Webring Logo" width="104px" height="70px" />

        {/* Navigation Links */}
        <HStack spacing="50px" height="24px" gap="50px">
          {["Home", "About", "Services", "Portfolio", "Blog"].map((item) => (
            <HStack key={item} spacing="5px">
              <Text
                fontFamily="DM Sans"
                fontWeight="500"
                fontSize="18px"
                lineHeight="100%"
                color="#26241C"
                cursor="pointer" // ✅ Ensure all links remain clickable
                onClick={() => navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`)} // ✅ Home navigates to "/"
              >
                {item}
              </Text>
              {(item === "About" || item === "Services") && (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
            </HStack>
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
            onClick={() => navigate("/contact")} // ✅ Navigate on button click
          >
            Contact Us
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
