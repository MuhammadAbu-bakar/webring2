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
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "aa109a66-539c-411d-8c45-a9867966cb45",
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            message: formData.message,
            bcc: ["adil@asture.co", "adil@webring.ltd", "info@webring.ltd"],
          }),
        });

        const result = await response.json();

        if (result.success) {
          console.log("Success", result);
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
          console.error("Submission failed", result);
          setErrors({ submit: "Failed to send message. Please try again." });
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({ submit: "An error occurred. Please try again." });
      }
    }
  };

  return (
    <Flex maxW="6xl" mx="auto" py={10} gap={10} px={4}>
      {/* Left Section */}
      <Box w="40%" p={5} borderRadius="md" mt="50px">
        <Box textAlign="center" mb={6}>
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

        <Box textAlign="center" mb={6}>
          <Image src="/Vector (3).png" alt="Contact Info" />
        </Box>

        <Box mb={8} color="#4F4B3B">
          <Text fontSize="xl" fontWeight="bold" mb={4} color="#26241C">
            Visit our office
          </Text>
          <Text fontSize="md">65-Z Block, Phase 3, DHA,</Text>
          <Text fontSize="md">Lahore Lahore, Pakistan,</Text>
          <Text fontSize="md">Punjab 54810, PK</Text>
        </Box>

        <Flex
          as="a"
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          align="center"
          _hover={{ textDecoration: "none", opacity: 0.8 }}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: "#FED904", h: "20px", w: "20px" }}
          />
          <Text fontSize="16px" fontWeight="bold" ml="10px" color="#5E5D5D">
            Facebook
          </Text>
        </Flex>

        <Flex
          as="a"
          href="https://www.instagram.com/webring_ltd/"
          target="_blank"
          rel="noopener noreferrer"
          align="center"
          _hover={{ textDecoration: "none", opacity: 0.8 }}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#FED904", h: "20px", w: "20px" }}
          />
          <Text fontSize="16px" fontWeight="bold" ml="10px" color="#5E5D5D">
            Instagram
          </Text>
        </Flex>

        <Flex
          as="a"
          href="https://www.linkedin.com/company/91013268/admin/dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          align="center"
          _hover={{ textDecoration: "none", opacity: 0.8 }}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#FED904", h: "20px", w: "20px" }}
          />
          <Text fontSize="16px" fontWeight="bold" ml="10px" color="#5E5D5D">
            Linkedin
          </Text>
        </Flex>
      </Box>

      {/* Right Section (Form) */}
      <Container
        as="form"
        onSubmit={handleSubmit}
        maxW="4000px"
        py={10}
        border="1px solid #ddd"
        borderRadius="10px"
        boxShadow="lg"
        w="60%"
        h="46rem"
        bg="#F8F8F6"
      >
        <Text
          fontSize="16px"
          fontWeight="700"
          color="#FED904"
          letterSpacing="5px"
        >
          CONTACT
        </Text>
        <Text fontSize="35px" fontWeight="700" mt={2}>
          Let's get in touch
        </Text>
        <Text fontSize="15px" color="gray.600" mt={1} fontWeight="400">
          You can reach us anytime via{" "}
          <Text as="span" color="#FED904">
            info@webring.ltd
          </Text>
        </Text>

        <Flex gap={4} mt={5}>
          <Box flex={1}>
            <Text fontSize="sm" mb={1}>
              First Name
            </Text>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              borderRadius="5px"
              borderColor="gray.300"
              w="252px"
              bg="white"
              isInvalid={errors.firstName}
            />
            {errors.firstName && (
              <Text color="red.500" fontSize="sm">
                {errors.firstName}
              </Text>
            )}
          </Box>
          <Box flex={1}>
            <Text fontSize="sm" mb={1}>
              Last Name
            </Text>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              borderRadius="5px"
              borderColor="gray.300"
              w="252px"
              bg="white"
              isInvalid={errors.lastName}
            />
            {errors.lastName && (
              <Text color="red.500" fontSize="sm">
                {errors.lastName}
              </Text>
            )}
          </Box>
        </Flex>

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
            borderRadius="none"
            borderColor="gray.300"
            bg="white"
            isInvalid={errors.email}
          />
          {errors.email && (
            <Text color="red.500" fontSize="sm">
              {errors.email}
            </Text>
          )}
        </Box>

        <Flex gap={4} mt={4}>
          <Box flex={1}>
            <Text fontSize="sm" mb={1}>
              Phone Number
            </Text>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Number"
              borderRadius="none"
              borderColor="gray.300"
              bg="white"
            />
          </Box>
          <Box flex={1}>
            <Text fontSize="sm" mb={1}>
              Country
            </Text>
            <Input
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Your Country"
              borderRadius="none"
              borderColor="gray.300"
              bg="white"
            />
          </Box>
        </Flex>

        <Box mt={4}>
          <Text fontSize="sm" mb={1}>
            Message
          </Text>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            borderRadius="none"
            borderColor="gray.300"
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

        <Flex alignItems="center" mt={4}>
          <Checkbox.Root
            checked={checked}
            onCheckedChange={(e) => setChecked(!!e.checked)}
            bg="white"
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
          </Checkbox.Root>
        </Flex>
        {errors.terms && (
          <Text color="red.500" fontSize="sm">
            {errors.terms}
          </Text>
        )}

        {errors.submit && (
          <Text color="red.500" fontSize="sm" mt={2}>
            {errors.submit}
          </Text>
        )}

        <Button
          type="submit"
          bg="#FED904"
          color="#26241C"
          font="DM Sans"
          fontSize="18px"
          w="full"
          mt={6}
          borderRadius="none"
          _hover={{ bg: "yellow.500" }}
          fontWeight="400px"
        >
          Get Started
        </Button>
      </Container>
    </Flex>
  );
}
