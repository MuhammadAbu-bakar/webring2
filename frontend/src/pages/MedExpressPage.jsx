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
          MedExpress
        </Heading>

        {/* Client Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Background:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            MedExpress is a modern healthcare provider offering telemedicine,
            urgent care, and specialized medical services. They needed a digital
            platform that could effectively onboard patients while maintaining
            the trust and professionalism critical in healthcare. The challenge
            was to balance medical credibility with user-friendly design for
            patients of all technical abilities.
          </Text>
        </Box>

        {/* Client Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Objectives:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Create a HIPAA-compliant platform that ensures patient data
              security
            </List.Item>
            <List.Item>
              Streamline the patient onboarding process with intuitive digital
              forms
            </List.Item>
            <List.Item>
              Provide clear service information for both urgent care and
              specialist services
            </List.Item>
            <List.Item>
              Implement telemedicine integration for virtual consultations
            </List.Item>
            <List.Item>
              Design for accessibility compliance (WCAG 2.1 AA standards)
            </List.Item>
            <List.Item>
              Optimize for healthcare-related search queries
            </List.Item>
          </List.Root>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Solution:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We developed a clean, professional healthcare platform that
            prioritizes patient needs while meeting strict medical industry
            requirements. The design uses calming blues and whites with clear
            information hierarchy to guide users seamlessly through medical
            services.
          </Text>
        </Box>

        {/* Design Approach */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            1. Patient-Centric Design:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Created an interface focused on reducing patient anxiety with: -
            Clear service categorization - Prominent emergency contact
            information - Simple appointment scheduling - Visible practitioner
            credentials
          </Text>
        </Box>

        {/* Technical Implementation */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            2. Secure Patient Portal:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Implemented end-to-end encrypted patient accounts featuring: -
            HIPAA-compliant medical history forms - Prescription upload and
            management - Secure messaging with healthcare providers - Two-factor
            authentication
          </Text>
        </Box>

        {/* Telemedicine Integration */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            3. Telemedicine Integration:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Seamless video consultation system with: - Browser-based access (no
            downloads required) - Virtual waiting room functionality - Screen
            sharing for medical imaging review - Integrated payment for copays
          </Text>
        </Box>

        {/* Accessibility Features */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            4. Universal Accessibility:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Comprehensive accessibility features including: - AA contrast ratios
            throughout - Screen reader optimization - Keyboard navigation
            support - Adjustable text sizes - Alternative text for all medical
            infographics
          </Text>
        </Box>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Improved Patient Acquisition:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            68% reduction in onboarding abandonment with streamlined digital
            forms
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Enhanced Telemedicine Adoption:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            83% of patients now choose virtual first visits when available
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Accessibility Compliance:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Achieved perfect WCAG 2.1 AA audit scores
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Trust Indicators:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            92% of users rate the platform as "easy to use" in patient surveys
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The MedExpress platform successfully bridges the gap between
            healthcare professionalism and patient-friendly digital experiences.
            By focusing on clarity, security, and accessibility, we've created a
            platform that supports MedExpress's mission to deliver quality care
            through both physical and digital channels. The website continues to
            evolve with new features like AI-powered symptom checking and
            integrated health records.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
