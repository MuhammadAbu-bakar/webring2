import React from "react";
import {
  Grid,
  GridItem,
  Heading,
  Box,
  Image,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";

const FloatingLabelInput = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.website.trim()) {
      tempErrors.website = "Website Link is required";
    } else if (
      !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(
        formData.website
      )
    ) {
      tempErrors.website = "Please enter a valid URL";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "aa109a66-539c-411d-8c45-a9867966cb45",
            name: formData.name,
            email: formData.email,
            website: formData.website,
            message: formData.message,
            bcc: ["adilwaqar71@gmail.com"],
          }),
        });

        const result = await response.json();

        if (result.success) {
          console.log("Success", result);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", website: "", message: "" }); // Reset form
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
          });
        } else {
          console.error("Submission failed", result);
          setErrors({ submit: "Failed to send message. Please try again." });
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({ submit: "An error occurred. Please try again." });
      }
    }
  };

  const handleChange = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
    if (isSubmitted) setIsSubmitted(false);
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="row"
        gap="50px"
        alignItems="center"
        justifyContent="left"
        height="50px"
        color="white"
      >
        <FloatingInput
          label="Full Name*"
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={handleChange("name")}
          error={errors.name}
        />
        <FloatingInput
          label="Email Address*"
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange("email")}
          error={errors.email}
        />
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        marginTop={{
          base: "10px",
          sm: "5px",
          md: "7px",
          lg: "10px",
          xl: "15px",
        }}
        height="50px"
        color="white"
        width="100%"
      >
        <FloatingInput
          label="Website Link*"
          type="url"
          id="website"
          width="100%"
          value={formData.website}
          onChange={handleChange("website")}
          error={errors.website}
        />
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        marginTop={{
          base: "10px",
          sm: "14px",
          md: "16px",
          lg: "19px",
          xl: "25px",
        }}
        color="white"
        width={"100%"}
      >
        <FloatingTextarea
          label="How Can We Help You*"
          id="message"
          value={formData.message}
          onChange={handleChange("message")}
          error={errors.message}
        />
      </Box>
      <Button
        width="184px"
        height="56px"
        marginTop={{ sm: "4px", md: "8px", lg: "10px" }}
        bgColor="#FED904"
        borderRadius={"5px"}
        color="#14140F"
        fontSize="20px"
        type="submit"
        isLoading={isSubmitted && !errors.submit}
      >
        Send Message
      </Button>
    </Box>
  );
};

const FloatingInput = ({ label, type, id, width, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box position="relative" width={width || "100%"} mb={4}>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== "")}
        bg="transparent"
        border="none"
        borderBottom="2px solid white"
        borderRadius={"none"}
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
      {error && (
        <Text color="red.300" fontSize="12px" mt={1}>
          {error}
        </Text>
      )}
    </Box>
  );
};

const FloatingTextarea = ({ label, id, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box position="relative" width="100%" mb={4}>
      <Textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== "")}
        bg="transparent"
        border="none"
        borderBottom="2px solid white"
        borderRadius={"none"}
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
      {error && (
        <Text color="red.300" fontSize="12px" mt={1}>
          {error}
        </Text>
      )}
    </Box>
  );
};

const contactCards = [
  {
    id: 1,
    title: "Headquarters",
    description:
      "65-Z Block, Phase 3, DHA, Lahore, Lahore, Pakistan, Punjab 54810, PK",
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
      {/* Header Section */}
      <Box position="relative" width="100%">
        <Image
          src="/portfolioBanner.png"
          width="100%"
          height={{ base: "300px", md: "330px", lg: "470px" }}
          objectFit="cover"
        />
        <Box position="absolute" top="0" left="0" width="100%" height="100%" />
        <Heading
          textAlign="center"
          zIndex="1"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize={{ base: "32px", md: "44px", lg: "56px" }}
          fontWeight="bold"
          color="white"
        >
          Contact
        </Heading>
      </Box>

      {/* Cards Section */}
      <Box
        width="100%"
        px={{ base: "20px", sm: "40px", md: "60px", lg: "80px", xl: "100px" }}
        mb="10%"
        mt={"5%"}
      >
        <Box maxW="1920px" mx="auto">
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            justifyContent="center"
            alignItems="center"
            mt="20px"
            mb="20px"
          >
            {contactCards.map((card) => (
              <GridItem key={card.id}>
                <Box
                  width="100%"
                  maxW={{ base: "100%", sm: "310px", lg: "400px", xl: "520px" }}
                  height={{
                    base: "auto",
                    sm: "210px",
                    lg: "250px",
                    xl: "300px",
                  }}
                  bgColor="#F8F8F6"
                  borderRadius="xl"
                  p={10}
                  gap={10}
                  textAlign="left"
                >
                  <Image
                    src={card.image}
                    width={{ base: "28px", sm: "36px", lg: "32px" }}
                    height={{ base: "32px", sm: "40px", lg: "36px" }}
                    mb={5}
                  />
                  <Heading
                    fontSize={{
                      base: "20px",
                      sm: "22px",
                      lg: "24px",
                      xl: "30px",
                    }}
                    mt={"20px"}
                    fontWeight="bold"
                  >
                    {card.title}
                  </Heading>
                  <Text
                    fontSize={{
                      base: "14px",
                      sm: "15px",
                      lg: "16px",
                      xl: "20px",
                    }}
                    mt={"30px"}
                    fontWeight="normal"
                  >
                    {card.description}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Form Box */}
      <Box width="100%" display={"flex"} bgColor="#14140F">
        <Box width={{ base: "0", sm: "0", md: "0", lg: "45%", xl: "45%" }}>
          <Image
            src="/Rectangle 39.png"
            width={{ base: "0", lg: "45%", xl: "45%" }}
            height={{ base: "0", lg: "620px" }}
            marginTop={{ base: "0", md: "-25px", lg: "-50px", xl: "-70px" }}
            position="absolute"
          />
        </Box>

        <Box
          width={{ base: "100%", sm: "100%", md: "100%", lg: "55%", xl: "55%" }}
          display="flex"
          bgColor="#14140F"
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "end",
            xl: "end",
          }}
          alignItems="center"
        >
          <Box width="80%" marginRight="60px" marginTop={"40px"}>
            <Box
              width={"100%"}
              gap={{ sm: "12px", md: "5px", lg: "20px", xl: "29px" }}
            >
              <Heading
                color="white"
                fontSize={{ base: "32px", sm: "30px", md: "30px", lg: "43px" }}
                marginBottom={{
                  base: "12px",
                  sm: "18px",
                  md: "10px",
                  lg: "20px",
                }}
                lineHeight={{ sm: "30px", md: "45px", lg: "55px" }}
              >
                Have Any Project on Your Mind?
              </Heading>
              <Text color="white" fontSize="16px" fontWeight="normal">
                Great! We're excited to hear from you and let's start something
              </Text>
            </Box>

            <Box
              width="100%"
              gap={{
                base: "10px",
                sm: "10px",
                md: "20px",
                lg: "30px",
                xl: "40px",
              }}
              marginY={{ base: "25px", sm: "15px", md: "", lg: "25px" }}
            >
              <FloatingLabelInput />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contect;
