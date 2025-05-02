import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Input,
  Text,
  Textarea,
  Image,
  Link,
  useBreakpointValue,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
    phone: "",
    country: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    if (!checked) {
      newErrors.terms = "You must accept the terms and conditions";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        message: formData.message,
      };

      try {
        const accessKeys = [
          "aa109a66-539c-411d-8c45-a9867966cb45",
          "c642fa03-85b3-4391-83e5-3eaf6419f0a4",
          "b3ae9dfd-9d32-457e-b35f-99f6ed35b446",
        ];

        const responses = await Promise.all(
          accessKeys.map((key) =>
            fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                access_key: key,
                ...payload,
              }),
            }).then((res) => res.json())
          )
        );

        if (responses.some((res) => res.success)) {
          setIsSubmitted(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            message: "",
          });
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
          });
        } else {
          setErrors({ submit: "Failed to send message. Please try again." });
        }
      } catch (error) {
        setErrors({ submit: "An error occurred. Please try again." });
      }
    }
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      maxW="6xl"
      mx="auto"
      py={10}
      px={{ base: 4, md: 8 }}
      gap={10}
    >
      {/* Left Side */}
      <Box w={{ base: "100%", md: "40%" }} mt={{ base: 0, md: 10 }}>
        <Box w={{ base: "100%", md: "40%" }} mt={{ base: 0, md: 10 }}>
          <Box mb={6}>
            <Image src="/Vector (2).png" alt="Contact Info" />
          </Box>
          <Box mb={8}>
            <Text fontSize="xl" fontWeight="bold" mb={4} color="#26241C">
              Contact Info
            </Text>
            <Text fontSize="md" mb={1} color="#4F4B3B">
              +92 319 6780744
            </Text>
            <Text fontSize="md" color="#4F4B3B">
              info@webring.ltd
            </Text>
          </Box>
        </Box>

        <Box textAlign="center" mb={6}>
          <Image src="/Vector (3).png" alt="Visit Us" />
        </Box>
        <Box mb={8} color="#4F4B3B">
          <Text fontSize="xl" fontWeight="bold" mb={4} color="#26241C">
            Visit our office
          </Text>
          <Text fontSize="md">65-Z Block, Phase 3, DHA,</Text>
          <Text fontSize="md">Lahore Lahore, Pakistan,</Text>
          <Text fontSize="md">Punjab 54810, PK</Text>
        </Box>

        <VStack align="start" spacing={4}>
          <Flex
            as="a"
            href="https://www.instagram.com/webring_ltd/"
            target="_blank"
            align="center"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#FED904" }} />
            <Text ml={2} color="#5E5D5D" fontWeight="bold">
              Instagram
            </Text>
          </Flex>
          <Flex
            as="a"
            href="https://www.linkedin.com/company/91013268/admin/dashboard/"
            target="_blank"
            align="center"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#FED904" }} />
            <Text ml={2} color="#5E5D5D" fontWeight="bold">
              LinkedIn
            </Text>
          </Flex>
        </VStack>
      </Box>

      {/* Right Side (Form) */}
      <Container
        as="form"
        onSubmit={handleSubmit}
        bg="#F8F8F6"
        p={6}
        border="1px solid #ddd"
        borderRadius="10px"
        boxShadow="lg"
        maxW="full"
        w={{ base: "100%", md: "60%" }}
      >
        <Text
          fontSize="sm"
          fontWeight="bold"
          color="#FED904"
          letterSpacing="5px"
        >
          CONTACT
        </Text>
        <Text fontSize="2xl" fontWeight="700" mt={2}>
          Let's get in touch
        </Text>
        <Text fontSize="sm" color="gray.600" mt={1}>
          You can reach us anytime via{" "}
          <Text as="span" color="#FED904">
            info@webring.ltd
          </Text>
        </Text>

        <HStack mt={5} spacing={4} flexWrap="wrap">
          <Box flex="1" minW="100px">
            <Text fontSize="sm" mb={1}>
              First Name
            </Text>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              bg="white"
              isInvalid={errors.firstName}
            />
            {errors.firstName && (
              <Text color="red.500" fontSize="sm">
                {errors.firstName}
              </Text>
            )}
          </Box>
          <Box flex="1" minW="100px">
            <Text fontSize="sm" mb={1}>
              Last Name
            </Text>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              bg="white"
              isInvalid={errors.lastName}
            />
            {errors.lastName && (
              <Text color="red.500" fontSize="sm">
                {errors.lastName}
              </Text>
            )}
          </Box>
        </HStack>

        <Box mt={4}>
          <Text fontSize="sm" mb={1}>
            Email
          </Text>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            bg="white"
            isInvalid={errors.email}
          />
          {errors.email && (
            <Text color="red.500" fontSize="sm">
              {errors.email}
            </Text>
          )}
        </Box>

        <HStack mt={4} spacing={4} flexWrap="wrap">
          <Box flex="1" minW="100px">
            <Text fontSize="sm" mb={1}>
              Phone Number
            </Text>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Number"
              bg="white"
            />
          </Box>
          <Box flex="1" minW="100px">
            <Text fontSize="sm" mb={1}>
              Country
            </Text>
            <Input
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Your Country"
              bg="white"
            />
          </Box>
        </HStack>

        <Box mt={4}>
          <Text fontSize="sm" mb={1}>
            Message
          </Text>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            h="120px"
            bg="white"
            isInvalid={errors.message}
          />
          {errors.message && (
            <Text color="red.500" fontSize="sm">
              {errors.message}
            </Text>
          )}
        </Box>

        <Box mt={4}>
          <Checkbox.Root
            checked={checked}
            onCheckedChange={(val) => setChecked(val)}
            colorScheme="yellow"
            className="chakra-checkbox"
          >
            <Checkbox.Control />
            <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
          </Checkbox.Root>
          {errors.terms && (
            <Text color="red.500" fontSize="sm">
              {errors.terms}
            </Text>
          )}
          {errors.terms && (
            <Text color="red.500" fontSize="sm">
              {errors.terms}
            </Text>
          )}
        </Box>

        {errors.submit && (
          <Text color="red.500" fontSize="sm" mt={2}>
            {errors.submit}
          </Text>
        )}

        <Button
          type="submit"
          bg="#FED904"
          color="#26241C"
          fontSize="18px"
          w="full"
          mt={6}
          _hover={{ bg: "yellow.500" }}
        >
          Get Started
        </Button>
      </Container>
    </Flex>
  );
}
