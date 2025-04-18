import { Box, Heading, Text, List } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="#151515" color="#FFFFFF">
      <Box p={8} maxW="1000px" mx="auto">
        <Heading
          fontSize="48px"
          textAlign="center"
          mb="100px" // Increased margin-bottom for more space
          fontWeight="600"
          color="#DDD0C8"
        >
          Targomo
        </Heading>

        {/* Client Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Background:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Targomo is a Berlin-based company specializing in location
            intelligence solutions. They provide advanced geospatial analytics
            tools that assist businesses in making informed decisions regarding
            site selection, market expansion, and network optimization. Their
            platform combines AI-driven analytics with intuitive visualizations
            to offer actionable insights for various industries.
          </Text>
        </Box>

        {/* Client Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Objectives:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Develop a user-friendly and visually appealing website to showcase
              Targomo's suite of products and services.
            </List.Item>
            <List.Item>
              Highlight the capabilities of their location intelligence tools,
              including TargomoLOOP, TargomoAPI, and Geo AI.
            </List.Item>
            <List.Item>
              Ensure the website is responsive and accessible across all
              devices.
            </List.Item>
            <List.Item>
              Optimize the site for search engines to enhance online visibility
              and attract potential clients.
            </List.Item>
          </List.Root>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Solution:
          </Heading>

          {/* Design and Development */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              1. Design and Development:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              We designed a modern, clean, and professional website that
              reflects Targomo's expertise in geospatial analytics. The layout
              emphasizes clarity and ease of navigation, allowing users to
              explore Targomo's offerings effortlessly.
            </Text>
          </Box>

          {/* Product Showcases */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Product Showcases:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              Dedicated sections were created for each of Targomo's main
              products:
              <ul>
                <li>
                  <strong>TargomoLOOP:</strong> A platform for location and
                  expansion planning, offering fast and powerful spatial
                  analysis.
                </li>
                <li>
                  <strong>TargomoAPI:</strong> Developer tools for building
                  geospatial applications with high-performance APIs.
                </li>
                <li>
                  <strong>Geo AI:</strong> Predictive analytics tools to
                  forecast sales performance and identify optimal locations.
                </li>
              </ul>
            </Text>
          </Box>

          {/* Responsive Design */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              3. Responsive Design:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              The website was built with a mobile-first approach, ensuring
              optimal performance and user experience across all devices.
            </Text>
          </Box>

          {/* SEO Optimization */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              4. SEO Optimization:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              Implemented best practices in SEO, including keyword optimization,
              meta tags, and structured data, to improve search engine rankings
              and drive organic traffic.
            </Text>
          </Box>
        </Box>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The collaboration resulted in a robust, user-centric website that
            effectively communicates Targomo’s value proposition:
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Enhanced User Engagement:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The intuitive design and clear presentation of information led to
            increased time spent on the site and lower bounce rates.
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Increased Lead Generation:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The optimized site attracted more qualified leads, resulting in a
            higher conversion rate.
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Improved Brand Visibility:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            SEO efforts led to higher rankings in search engine results,
            increasing Targomo's online presence.
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The collaboration with Targomo resulted in a powerful website that
            supports their marketing and sales strategy, showcasing their
            expertise in location intelligence solutions.
          </Text>
        </Box>

        {/* Call to Action */}
        <Box mb={8}>
          <Text fontSize="18px" fontWeight="400">
            For more information, visit Targomo's official website:{" "}
            <a
              href="https://www.targomo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.targomo.com
            </a>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
