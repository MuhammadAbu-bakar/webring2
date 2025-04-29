import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const MotionVStack = motion(VStack);

const HeroBanner = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <Box
      w="100%"
      maxW="1920px"
      h={{ base: "500px", md: "916px" }}
      position="relative"
      backgroundImage="url('/pic.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      py={{ base: "50px", md: "0" }}
      px={{ base: "20px", md: "50px" }}
      display="flex"
      alignItems="center"
    >
      <Box
        w={{ base: "100%", md: "970px" }}
        maxW="1200px"
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
        ref={ref}
      >
        {/* Desktop View */}
        <MotionVStack
          align={{ base: "center", md: "start" }}
          spacing={{ base: "20px", md: "40px" }}
          display={{ base: "none", md: "flex" }}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
        >
          <Text
            fontFamily="Syne"
            fontWeight="600"
            fontSize={{ base: "16px", md: "22px" }}
            letterSpacing="6.83px"
            color="#FED904"
            textTransform="uppercase"
          >
            Empowerment
          </Text>

          <Text
            fontFamily="Yantramanav"
            fontWeight="500"
            fontSize={{ base: "36px", md: "100px" }}
            lineHeight={{ base: "44px", md: "130px" }}
            letterSpacing="-2.73px"
            color="white"
            maxW="1000px"
          >
            One Stop Solution
          </Text>

          <Text
            fontFamily="DM Sans"
            fontWeight="400"
            fontSize={{ base: "16px", md: "28px" }}
            lineHeight={{ base: "24px", md: "40px" }}
            color="white"
            maxW="900px"
          >
            We are a full-service leading Web & App Development company offering
            a wide range of digital solutions.
          </Text>

          <Button
            w={{ base: "160px", md: "200px" }}
            h={{ base: "50px", md: "60px" }}
            borderRadius="5.38px"
            p="15px 28px"
            bg="#FED904"
            color="black"
            fontSize={{ base: "16px", md: "20px" }}
            fontWeight="700"
            _hover={{ bg: "yellow.500" }}
            mt={{ base: "20px", md: "40px" }}
            onClick={() => navigate("/contact-form")}
          >
            GET A QUOTE
          </Button>
        </MotionVStack>

        {/* Mobile View */}
        <VStack
          display={{ base: "flex", md: "none" }}
          spacing="15px"
          textAlign="center"
          color="white"
        >
          <Text
            fontFamily="Syne"
            fontWeight="600"
            fontSize="14px"
            letterSpacing="5px"
            color="#FED904"
            textTransform="uppercase"
          >
            Empowerment
          </Text>
          <Text
            fontFamily="Yantramanav"
            fontWeight="500"
            fontSize="28px"
            lineHeight="36px"
            letterSpacing="-1px"
            color="white"
          >
            One Stop Solution
          </Text>
          <Text
            fontFamily="DM Sans"
            fontWeight="400"
            fontSize="14px"
            lineHeight="22px"
            color="white"
            maxW="320px"
          >
            We are a full-service leading Web & App Development company offering
            a wide range of digital solutions.
          </Text>
          <Button
            w={{ base: "100px", md: "160px" }}
            h={{ base: "30px", md: "50px" }}
            borderRadius="5.38px"
            p="15px 28px"
            bg="#FED904"
            color="black"
            fontSize={{ base: "10px", md: "16px" }}
            fontWeight="700"
            _hover={{ bg: "yellow.500" }}
            mt="10px"
            onClick={() => navigate("/contact-form")}
          >
            GET A QUOTE
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default HeroBanner;
