import { Box, Heading, Text, List } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="white" color="black">
      <Box p={8} maxW="1000px" mx="auto">
        <Heading
          fontSize="48px"
          textAlign="center"
          mb="100px"
          fontWeight="600"
          color="black"
        >
          JazPayments
        </Heading>

        {/* Client Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Background:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            JazPayments is an innovative fintech company specializing in
            streamlined payment processing solutions for businesses of all
            sizes. They needed a digital platform that would communicate their
            technical capabilities while maintaining approachability for
            non-technical users. The challenge was to simplify complex financial
            processes without compromising security or functionality.
          </Text>
        </Box>

        {/* Client Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Objectives:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Create a trustworthy platform that conveys financial security
            </List.Item>
            <List.Item>
              Simplify complex payment solutions for non-technical users
            </List.Item>
            <List.Item>
              Showcase API integration capabilities for developers
            </List.Item>
            <List.Item>
              Implement real-time transaction monitoring features
            </List.Item>
            <List.Item>
              Design responsive dashboards for business clients
            </List.Item>
            <List.Item>
              Ensure PCI DSS compliance throughout the platform
            </List.Item>
          </List.Root>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Solution:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We developed a dual-focus platform that serves both financial
            decision-makers and technical teams. The design uses vibrant yet
            professional colors with clear visual hierarchies to guide users
            through payment processes while maintaining all necessary security
            protocols.
          </Text>
        </Box>

        {/* Core Features */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            1. Intuitive Payment Flows:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Designed streamlined user journeys featuring: - One-click payment
            repetition - Visual transaction timelines - Smart form
            auto-completion - Multi-currency support - Saved payment method
            management
          </Text>
        </Box>

        {/* Technical Implementation */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            2. Secure Infrastructure:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Built with bank-grade security including: - PCI DSS Level 1
            compliance - Tokenized transaction processing - Biometric
            authentication options - Real-time fraud monitoring - End-to-end
            encryption
          </Text>
        </Box>

        {/* Developer Tools */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            3. Developer Hub:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Comprehensive technical resources featuring: - Interactive API
            documentation - Sandbox testing environment - SDK downloads for
            major platforms - Webhook configuration guides - Code sample
            libraries
          </Text>
        </Box>

        {/* Business Analytics */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            4. Merchant Dashboards:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Customizable business interfaces with: - Real-time transaction
            monitoring - Automated reconciliation tools - Chargeback management
            - Settlement forecasting - Multi-user access controls
          </Text>
        </Box>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Increased Conversion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            72% faster checkout completion compared to previous platform
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Security Achievements:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Successfully maintained 100% PCI compliance audit scores
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Developer Adoption:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            300+ active API integrations within first 6 months
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Business Growth:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            45% increase in merchant sign-ups post-launch
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The JazPayments platform successfully bridges the gap between
            financial technology and user experience. By combining robust
            security with intuitive design, we've created a payment solution
            that serves both technical and non-technical users effectively. The
            platform continues to evolve with features like AI-powered fraud
            detection and blockchain payment options, maintaining JazPayments'
            position at the forefront of payment innovation.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
