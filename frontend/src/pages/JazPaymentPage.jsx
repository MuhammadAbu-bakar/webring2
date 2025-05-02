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

        {/* Introduction */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Overview:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            JazPayments, a rising fintech company, partnered with Webring to
            accelerate its mission of simplifying digital payments for
            businesses of all sizes. The collaboration aimed to deliver a
            scalable, secure, and user-friendly platform tailored to both
            technical and non-technical users.
          </Text>
        </Box>

        {/* Collaboration Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Collaboration Objectives:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Develop an intuitive platform for seamless B2B transactions
            </List.Item>
            <List.Item>
              Create a developer-friendly API hub for rapid integration
            </List.Item>
            <List.Item>
              Strengthen platform security with real-time fraud prevention
            </List.Item>
            <List.Item>
              Design an engaging user experience with a responsive UI
            </List.Item>
            <List.Item>
              Ensure full PCI DSS compliance and scalability
            </List.Item>
          </List.Root>
        </Box>

        {/* Webring’s Contribution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Webring’s Role in the Transformation:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Webring brought its deep expertise in fintech UI/UX, full-stack
            development, and agile execution to help JazPayments bring their
            vision to life. Together, they delivered a fast, reliable, and
            secure digital payment infrastructure ready for scale.
          </Text>
        </Box>

        {/* Core Solutions Implemented */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            1. Unified Payment Interface:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Webring designed a simplified user flow with: - Single-click
            transactions - Real-time payment status - Smart form autofill -
            Multi-currency support - Saved cards and payout scheduling
          </Text>
        </Box>

        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            2. Secure and Scalable Architecture:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The platform was fortified with: - PCI DSS Level 1 security - Token
            encryption - AI-powered fraud detection - Scalable AWS-based backend
            - Biometric-ready authentication
          </Text>
        </Box>

        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            3. Developer-First Experience:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Webring helped build a robust developer portal featuring: -
            Interactive API reference - Sandbox for test payments - SDKs in
            JavaScript, Python, and PHP - Webhook configuration guides - Sample
            apps for faster onboarding
          </Text>
        </Box>

        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            4. Business Intelligence Dashboards:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Custom dashboards enabled merchants to: - Monitor real-time revenue
            - Forecast settlement cycles - Track refunds and chargebacks -
            Manage user roles and access - View performance insights
          </Text>
        </Box>

        {/* Key Benefits for JazPayments */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Benefits Gained by JazPayments:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={2}>
            - 30% faster product launch through agile collaboration
          </Text>
          <Text fontSize="18px" fontWeight="400" mb={2}>
            - 25% reduction in customer support tickets post-launch
          </Text>
          <Text fontSize="18px" fontWeight="400" mb={2}>
            - 300+ active API integrations within 6 months
          </Text>
          <Text fontSize="18px" fontWeight="400" mb={2}>
            - Improved security compliance with 100% PCI audit pass rate
          </Text>
          <Text fontSize="18px" fontWeight="400" mb={2}>
            - 45% increase in merchant registrations after launch
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The partnership between JazPayments and Webring proved to be a
            strategic success, resulting in a fintech platform that blends
            security, scalability, and usability. Webring’s end-to-end delivery
            approach empowered JazPayments to move faster, reach broader
            audiences, and maintain fintech-grade compliance without
            compromising the user experience. This collaboration sets a strong
            foundation for future innovations, including AI-led insights and
            blockchain payment options.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
