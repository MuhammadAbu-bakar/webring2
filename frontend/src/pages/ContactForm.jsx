import { Box, Button, Checkbox, Container, Flex, Input, Text, Textarea, Image, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function ContactForm() {
  const [checked, setChecked] = useState(false);
  return (
    <Flex maxW="6xl" mx="auto" py={10} gap={10} px={4}>
      {/* Left Section */}
      <Box w="40%" p={5} borderRadius="md" mt="50px">


      <Box textAlign="center" mb={6} >
          <Image src="/Vector (2).png" alt="Contact Info" />
        </Box>


        <Box mb={8}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>Contact Info</Text>
          <Text fontSize="md" mb={1}>+92 319 6780744</Text>
          <Text fontSize="md" color="yellow.500">info@wehring.fd</Text>
        </Box>


        <Box textAlign="center" mb={6} >
          <Image src="/Vector (3).png" alt="Contact Info" />
        </Box>

        <Box mb={8}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>Visit our office</Text>
          <Text fontSize="md">652 Block, Phase 3, DHA,</Text>
          <Text fontSize="md">Labroo Labroo, Pakistan,</Text>
          <Text fontSize="md">Punjab S#510, PK</Text>
        </Box>
        

        <Flex>
          <FontAwesomeIcon icon={faFacebook} color="yellow.500" size="lg" />
          <Text fontSize="md" fontWeight="bold" ml="10px" color="#FED904">Facebook</Text>
        </Flex>

        <Flex>
          <FontAwesomeIcon icon={faInstagram} color="yellow.500" size="lg" />
          <Text fontSize="md" fontWeight="bold" ml="10px" color="#FED904">Instagram</Text>
        </Flex>

        <Flex>
          <FontAwesomeIcon icon={faLinkedin} color="yellow.500" size="lg" />
          <Text fontSize="md" fontWeight="bold" ml="10px" color="#FED904">linkedin</Text>
        </Flex>
        
        
        
      </Box>
      
      {/* Right Section (Form) */}
      <Container maxW="md" py={10} border="1px solid #ddd" borderRadius="md" boxShadow="lg" w="60%">
        <Text fontSize="16px" fontWeight="700" color="#FED904">CONTACT</Text>
        <Text fontSize="35px" fontWeight="700" mt={2}>Let's get in touch</Text>
        <Text fontSize="15px" color="gray.600" mt={1} fontWeight="400">
          You can reach us anytime via <Text as="span" color="yellow.500">info@wehring.fd</Text>
        </Text>

        <Flex gap={4} mt={5}>
          <Box flex={1}>
            <Text fontSize="sm" mb={1}>First Name</Text>
            <Input placeholder="First Name" borderRadius="none" borderColor="gray.300" />
          </Box>
          <Box flex={1}>
            <Text fontSize="sm" mb={1}>Last Name</Text>
            <Input placeholder="Last Name" borderRadius="none" borderColor="gray.300" />
          </Box>
        </Flex>

        <Box mt={4}>
          <Text fontSize="sm" mb={1}>Email</Text>
          <Input type="email" placeholder="Your Email" borderRadius="none" borderColor="gray.300" />
        </Box>

        <Flex gap={4} mt={4}>
          <Box flex={1}>
            <Text fontSize="sm" mb={1}>Phone Number</Text>
            <Input placeholder="Your Number" borderRadius="none" borderColor="gray.300" />
          </Box>
          <Box flex={1}>
            <Text fontSize="sm" mb={1}>Country</Text>
            <Input placeholder="Your Country" borderRadius="none" borderColor="gray.300" />
          </Box>
        </Flex>

        <Box mt={4}>
          <Text fontSize="sm" mb={1}>Message</Text>
          <Textarea placeholder="Your Message" borderRadius="none" borderColor="gray.300" h="120px" />
        </Box>

        <Checkbox.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(!!e.checked)}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
    </Checkbox.Root>

        <Button 
          bg="yellow.400" 
          color="black" 
          w="full" 
          mt={6} 
          borderRadius="none"
          _hover={{ bg: "yellow.500" }}
          fontWeight="normal"
        >
          Get Started
        </Button>
      </Container>
    </Flex>
  );
}