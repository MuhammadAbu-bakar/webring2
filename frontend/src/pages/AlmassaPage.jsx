import { Box, Heading, Text, List } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="white" color="black">
      <Box p={8} maxW="1000px" mx="auto">
        <Heading
          fontSize="48px"
          textAlign="center"
          mb="100px" // Increased margin-bottom for more space
          fontWeight="600"
          color="black"
        >
          Almassa
        </Heading>

        {/* Client Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Background:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Almassa is a forward-thinking corporation specializing in innovative
            solutions across multiple industries including technology,
            manufacturing, and consulting. They approached us to create a modern
            digital presence that would reflect their position as industry
            leaders while effectively communicating their diverse service
            offerings to a global audience.
          </Text>
        </Box>

        {/* Client Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Objectives:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Create a sophisticated corporate website that establishes
              credibility and industry authority
            </List.Item>
            <List.Item>
              Showcase Almassa's diverse portfolio of services and solutions
            </List.Item>
            <List.Item>
              Implement interactive elements to enhance user engagement
            </List.Item>
            <List.Item>
              Ensure seamless navigation across all device types
            </List.Item>
            <List.Item>
              Develop a content management system for easy updates
            </List.Item>
            <List.Item>
              Optimize for international audiences with multilingual
              capabilities
            </List.Item>
          </List.Root>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Solution:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We created a dynamic, visually striking website that perfectly
            embodies Almassa's brand identity while delivering exceptional user
            experience through thoughtful design and cutting-edge functionality.
          </Text>
        </Box>

        {/* Strategic Planning */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            1. Modern Design Approach:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We developed a sleek, minimalist design using a sophisticated color
            palette that reflects Almassa's corporate identity. The layout
            incorporates ample white space and high-impact visuals to create a
            premium feel that resonates with their target audience.
          </Text>
        </Box>

        {/* Custom Design */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            2. Interactive Elements:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The website features subtle animations and interactive components
            that engage visitors without compromising performance. These include
            smooth scrolling transitions, hover effects, and dynamic content
            loading to create a memorable browsing experience.
          </Text>
        </Box>

        {/* Service Pages */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            3. Comprehensive Service Showcase:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We created dedicated sections for each of Almassa's service
            offerings, with clear value propositions and case studies. Each
            service page includes detailed information, client testimonials, and
            relevant statistics to build trust and demonstrate expertise.
          </Text>
        </Box>

        {/* Booking System */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            4. Multilingual Support:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Recognizing Almassa's global operations, we implemented a robust
            multilingual system allowing seamless switching between English and
            Arabic, with infrastructure to easily add more languages as needed.
          </Text>
        </Box>

        {/* Mobile Responsiveness */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            5. Advanced CMS Integration:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We integrated a powerful content management system that empowers
            Almassa's marketing team to update content, publish news, and manage
            multimedia assets without requiring technical assistance.
          </Text>
        </Box>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The new Almassa website has become a powerful digital asset that
            effectively communicates their brand values and drives business
            growth:
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Enhanced Brand Perception:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The professional design has elevated Almassa's corporate image, with
            clients and partners frequently complimenting the modern, polished
            appearance.
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Increased Engagement:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Interactive elements have led to a 40% increase in average session
            duration and significantly lower bounce rates compared to the
            previous website.
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Global Reach:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The multilingual capabilities have helped Almassa expand its
            international presence, with 35% of traffic now coming from
            non-English speaking regions.
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Streamlined Content Management:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The marketing team can now make updates in real-time, keeping the
            website always current with the latest company news and offerings.
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The Almassa corporate website stands as a testament to how strategic
            web design can transform a company's digital presence. By combining
            elegant aesthetics with robust functionality, we've created a
            platform that not only showcases Almassa's capabilities but also
            serves as an effective business development tool. The website
            continues to evolve alongside Almassa's growth, with ongoing
            enhancements to meet emerging business needs and technological
            advancements.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
