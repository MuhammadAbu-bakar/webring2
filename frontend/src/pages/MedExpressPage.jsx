import { Box, Heading, Text, Stack, List } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="#151515" color="#FFFFFF" minH="100vh" py={10} px={4}>
      <Box maxW="1000px" mx="auto">
        <Heading fontSize="36px" textAlign="center" mb={10} color="#DDD0C8">
          Med Express Billing
        </Heading>

        {/* Client Overview */}
        <Box mb={10}>
          <Heading fontSize="24px" mb={4}>
            Client Overview:
          </Heading>
          <Text fontSize="16px">
            MedExpressBilling, a leading medical billing service provider,
            approached WeBring...
          </Text>
        </Box>

        {/* Project Scope */}
        <Box mb={10}>
          <Heading fontSize="24px" mb={4}>
            Project Scope:
          </Heading>
          <Stack spacing={2} fontSize="16px">
            <Text>
              <strong>Client:</strong> MedExpressBilling
            </Text>
            <Text>
              <strong>Objective:</strong> Develop a professional and
              user-friendly website...
            </Text>
            <Text>
              <strong>Platform:</strong> WordPress
            </Text>
            <Text>
              <strong>Page Builder:</strong> Elementor
            </Text>
            <Text>
              <strong>Key Features:</strong> User-friendly interface, secure
              patient info, service showcase...
            </Text>
          </Stack>
        </Box>

        {/* Challenges */}
        <Box mb={10}>
          <Heading fontSize="24px" mb={4}>
            Challenges:
          </Heading>
          <List.Root as="ol" spacing="2" fontSize="16px">
            <List.Item>
              <strong>Security Concern:</strong> Implementing robust info
              security measures...
            </List.Item>
            <List.Item>
              <strong>User Experience:</strong> Designing a website that is
              intuitive...
            </List.Item>
            <List.Item>
              <strong>Integration with Existing Systems:</strong> Seamless
              integration...
            </List.Item>
          </List.Root>
        </Box>

        {/* Our Approach */}
        <Box mb={10}>
          <Heading fontSize="24px" mb={4}>
            Our Approach:
          </Heading>
          <List.Root as="ol" spacing="2" fontSize="16px">
            <List.Item>
              <strong>Requirement Analysis:</strong> Conducted in-depth
              discussions with the client...
            </List.Item>
            <List.Item>
              <strong>Design and Development:</strong> Leveraged Elementor on
              WordPress...
            </List.Item>
            <List.Item>
              <strong>Security Measures:</strong> Implemented industry-standard
              protocols...
            </List.Item>
            <List.Item>
              <strong>Integration:</strong> Seamlessly integrated the website
              with existing systems...
            </List.Item>
            <List.Item>
              <strong>Mobile Responsiveness:</strong> Ensured full
              responsiveness across devices.
            </List.Item>
          </List.Root>
        </Box>

        {/* Key Features Implemented */}
        <Box mb={10}>
          <Heading fontSize="24px" mb={4}>
            Key Features Implemented:
          </Heading>
          <List.Root as="ol" spacing="2" fontSize="16px">
            <List.Item>
              <strong>Service Showcase:</strong> Highlighted services with
              detailed information...
            </List.Item>
            <List.Item>
              <strong>Contact Forms:</strong> Easy-to-use contact forms for
              quick interaction.
            </List.Item>
            <List.Item>
              <strong>Secure Patient Portals:</strong> Enabled private
              communication and document sharing.
            </List.Item>
          </List.Root>
        </Box>

        {/* Results */}
        <Box mb={10}>
          <Heading fontSize="24px" mb={4}>
            Results:
          </Heading>
          <List.Root as="ol" spacing="2" fontSize="16px">
            <List.Item>
              <strong>Successful Website Launch:</strong> Positive customer
              testimonials after launch.
            </List.Item>
            <List.Item>
              <strong>Increased Online Presence:</strong> Boosted visibility and
              engagement.
            </List.Item>
            <List.Item>
              <strong>Enhanced User Experience:</strong> Intuitive design
              improved browsing.
            </List.Item>
            <List.Item>
              <strong>Operational Efficiency:</strong> Streamlined processes
              with integrations.
            </List.Item>
            <List.Item>
              <strong>Security Compliance:</strong> Full HIPAA compliance with
              secure measures.
            </List.Item>
          </List.Root>
        </Box>

        {/* Conclusion */}
        <Box>
          <Heading fontSize="24px" mb={4}>
            Conclusion:
          </Heading>
          <Text fontSize="16px">
            The MedExpressBilling project demonstrates WeBring's commitment to
            user-centric...
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
