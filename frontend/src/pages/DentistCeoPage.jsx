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
          The Dentist CEO
        </Heading>

        {/* Client Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Background:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The Dentist CEO is an innovative platform designed to transform
            dental professionals into exceptional practice leaders. Founded by
            experienced dental entrepreneurs, the organization provides business
            coaching, marketing strategies, and leadership development programs
            specifically tailored for the dental industry. Their mission is to
            help dentists build profitable, sustainable practices while
            achieving work-life balance.
          </Text>
        </Box>

        {/* Client Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Objectives:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Establish a premium online platform that positions The Dentist CEO
              as the leading authority in dental practice growth
            </List.Item>
            <List.Item>
              Showcase their comprehensive coaching programs and business
              solutions
            </List.Item>
            <List.Item>
              Create a membership portal for course content and resources
            </List.Item>
            <List.Item>
              Generate high-quality leads for their coaching services
            </List.Item>
            <List.Item>
              Build a community of dental professionals through integrated
              social features
            </List.Item>
          </List.Root>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Solution:
          </Heading>

          {/* Brand Positioning */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              1. Premium Brand Positioning:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              We developed a sophisticated, professional design that
              communicates authority and success. The visual identity uses a
              bold color scheme with gold accents to convey premium quality,
              supported by high-impact imagery of successful dental practices.
            </Text>
          </Box>

          {/* Program Showcase */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Program Showcase:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              Created dedicated sections for each core offering:
              <ul>
                <li>
                  <strong>Business Accelerator:</strong> Comprehensive practice
                  growth coaching program
                </li>
                <li>
                  <strong>Marketing Mastery:</strong> Patient attraction and
                  conversion strategies
                </li>
                <li>
                  <strong>Leadership Development:</strong> Team building and
                  management training
                </li>
                <li>
                  <strong>CEO Retreats:</strong> Exclusive in-person mastermind
                  events
                </li>
              </ul>
            </Text>
          </Box>

          {/* Membership Portal */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              3. Membership Portal:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              Built a secure, user-friendly portal with course content,
              resources, and community features. Includes progress tracking,
              video lessons, downloadable templates, and a private forum for
              members.
            </Text>
          </Box>

          {/* Lead Generation */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              4. Lead Generation System:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              Implemented a multi-step conversion funnel including free
              resources (guides, webinars), email nurture sequences, and
              consultation booking to attract and convert potential clients.
            </Text>
          </Box>
        </Box>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The platform has become a powerful business growth tool for The
            Dentist CEO:
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Increased Program Enrollment:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Coaching program signups increased by 65% in the first quarter
            post-launch.
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Growing Community:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Over 1,200 active members in the portal community within six months.
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Enhanced Authority:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Established as a thought leader with increased speaking engagements
            and media features.
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The Dentist CEO platform has successfully positioned the brand as
            the premier resource for dental practice growth. By combining
            premium design with powerful functionality, we've created a
            comprehensive digital ecosystem that supports dentists in
            transforming their practices and becoming true CEOs of their
            businesses.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
