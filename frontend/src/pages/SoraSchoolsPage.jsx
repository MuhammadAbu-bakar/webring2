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
          Sora Schools
        </Heading>

        {/* Client Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Background:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Sora Schools is a pioneering virtual learning institution focused on
            project-based, student-led education. They needed a digital platform
            that could support their innovative pedagogical approach while
            maintaining the personal connection of traditional schooling. The
            challenge was to create an engaging virtual environment that would
            keep students motivated and teachers empowered.
          </Text>
        </Box>

        {/* Client Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Objectives:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Create an immersive virtual learning environment
            </List.Item>
            <List.Item>Facilitate personalized learning pathways</List.Item>
            <List.Item>Enable seamless teacher-student collaboration</List.Item>
            <List.Item>Integrate project-based learning tools</List.Item>
            <List.Item>
              Ensure accessibility for diverse learning needs
            </List.Item>
            <List.Item>
              Develop progress tracking for students and parents
            </List.Item>
          </List.Root>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Solution:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We developed a dynamic learning platform with a vibrant yet clean
            interface that adapts to individual learning styles. The system
            combines structured curriculum tools with flexible spaces for
            student exploration and creativity.
          </Text>
        </Box>

        {/* Platform Features */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            1. Personalized Learning Hub:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • Adaptive dashboard that evolves with student progress
            <br />
            • Customizable learning paths based on interests and pace
            <br />
            • Visual progress tracking with gamified elements
            <br />• Integrated goal-setting and reflection tools
          </Text>
        </Box>

        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            2. Collaborative Workspaces:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • Virtual project rooms with multimedia tools
            <br />
            • Real-time feedback systems between students and mentors
            <br />
            • Peer review and collaboration features
            <br />• Portfolio showcase areas for completed work
          </Text>
        </Box>

        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            3. Accessibility Framework:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • WCAG 2.1 AA compliant interface
            <br />
            • Multiple content consumption options (text, audio, video)
            <br />
            • Time management and focus aids
            <br />• Language support tools for ESL learners
          </Text>
        </Box>

        {/* Expanded Results Section */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Enhanced Student Engagement:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • 78% increase in daily platform usage compared to previous systems
            <br />
            • Average session duration extended by 62%
            <br />
            • 92% of students reported feeling more connected to their learning
            <br />• Course completion rates improved by 45% year-over-year
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Teacher Effectiveness:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • 80% reduction in administrative time spent on progress tracking
            <br />
            • 65% of educators reported more meaningful student interactions
            <br />
            • Custom rubric creation reduced grading time by 30%
            <br />• 95% adoption rate among faculty within first month
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Institutional Growth:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • 120% increase in enrollment applications post-launch
            <br />
            • Student retention rates improved to 94%
            <br />
            • Expanded to 3 new international markets within first year
            <br />• Recognized with "Best Virtual Learning Platform 2023" award
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Accessibility Impact:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • 100% compliance with accessibility standards
            <br />
            • 42% of students with learning differences reported improved
            outcomes
            <br />
            • Parent satisfaction scores increased by 58 points
            <br />• Featured in "Top 10 Inclusive EdTech Solutions" ranking
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Technical Performance:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • 99.98% uptime during critical learning periods
            <br />
            • Handled 300% traffic increase during peak enrollment
            <br />
            • Average page load time under 1.2 seconds globally
            <br />• Scaled to support 5,000+ concurrent users seamlessly
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The Sora Schools platform has redefined what virtual learning can
            achieve, creating an ecosystem where students take ownership of
            their education while maintaining strong guidance from educators. By
            combining cutting-edge technology with pedagogical best practices,
            we've built more than just a learning management system—we've
            created a digital campus that fosters curiosity, collaboration, and
            continuous growth. The platform continues to evolve with AI-powered
            learning assistants and virtual reality classrooms currently in
            development.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
