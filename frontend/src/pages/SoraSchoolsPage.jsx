import { Box, Heading, Text, VStack } from "@chakra-ui/react";

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
          <Text fontSize="18px" fontWeight="400">
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
          <Text fontSize="18px" fontWeight="400">
            The main goals were to create an immersive virtual learning
            environment, facilitate personalized learning pathways, enable
            seamless teacher-student collaboration, integrate project-based
            learning tools, ensure accessibility for diverse learning needs, and
            develop robust progress tracking for both students and parents.
          </Text>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Solution:
          </Heading>
          <Text fontSize="18px" fontWeight="400">
            We developed a dynamic learning platform with a vibrant yet clean
            interface that adapts to individual learning styles. The system
            combines structured curriculum tools with flexible spaces for
            student exploration and creativity.
          </Text>
        </Box>

        {/* Key Features */}
        <VStack spacing={8} align="stretch" mb={8}>
          <Box>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              1. Personalized Learning Hub:
            </Heading>
            <Text fontSize="18px" fontWeight="400">
              The dashboard adapts to student progress and offers customizable
              learning paths based on individual pace and interests. Visual
              progress tracking with gamified elements keeps students motivated,
              while integrated tools for goal setting and reflection help them
              stay on track.
            </Text>
          </Box>

          <Box>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Collaborative Workspaces:
            </Heading>
            <Text fontSize="18px" fontWeight="400">
              Students work together in virtual project rooms equipped with
              multimedia tools. Real-time feedback systems, peer review options,
              and project portfolios support interactive and engaging learning
              experiences.
            </Text>
          </Box>

          <Box>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              3. Accessibility Framework:
            </Heading>
            <Text fontSize="18px" fontWeight="400">
              The platform follows WCAG 2.1 AA accessibility standards and
              offers various content formats such as text, audio, and video. It
              includes tools for time management, focus support, and
              multilingual assistance, especially for ESL learners.
            </Text>
          </Box>

          <Box>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              4. Integrated Assessment Tools:
            </Heading>
            <Text fontSize="18px" fontWeight="400">
              Customizable rubrics and AI-powered grading suggestions make
              assessments more efficient. Educators gain detailed insights into
              student and class-wide performance through intuitive analytics.
            </Text>
          </Box>

          <Box>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              5. Parent and Mentor Portals:
            </Heading>
            <Text fontSize="18px" fontWeight="400">
              Dedicated, secure portals for parents and mentors offer real-time
              access to student progress. Built-in messaging, visual dashboards,
              and conferencing tools foster transparency and encourage holistic
              support.
            </Text>
          </Box>
        </VStack>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>

          <Heading fontSize="24px" mb={4} mt={8} fontWeight="600">
            Enhanced Student Engagement:
          </Heading>
          <Text fontSize="18px" fontWeight="400">
            The platform resulted in a 78% increase in daily usage and a 62%
            rise in average session duration. About 92% of students reported
            feeling more connected to their learning journey. Additionally,
            course completion rates improved by 45% year-over-year.
          </Text>

          <Heading fontSize="24px" mb={4} mt={8} fontWeight="600">
            Teacher Effectiveness:
          </Heading>
          <Text fontSize="18px" fontWeight="400">
            Teachers experienced an 80% reduction in administrative time
            required for tracking progress. More than 65% of educators reported
            improved interactions with students, and custom rubric tools helped
            cut grading time by 30%. The system achieved a 95% faculty adoption
            rate in the first month.
          </Text>

          <Heading fontSize="24px" mb={4} mt={8} fontWeight="600">
            Institutional Growth:
          </Heading>
          <Text fontSize="18px" fontWeight="400">
            Sora Schools saw a 50% increase in new student enrollments. The
            platform’s scalable infrastructure supported a threefold user
            growth, while the intuitive design led to a 40% drop in tech support
            queries.
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400">
            The Sora Schools platform redefines virtual education by combining
            flexibility, personalization, and interactivity. Our collaboration
            empowered students, educators, and families through technology that
            mirrors Sora’s forward-thinking educational vision. As a result,
            Sora is now positioned as a trailblazer in the future of online
            learning.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
