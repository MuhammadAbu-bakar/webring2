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
          Gemma Foods
        </Heading>

        {/* Client Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Background:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Gemma Foods is an artisanal meal delivery service specializing in
            chef-crafted, ready-to-eat dishes made with locally-sourced
            ingredients. They needed a digital storefront that would capture the
            sensory experience of their gourmet offerings while streamlining the
            order process for time-pressed food enthusiasts. The challenge was
            to translate their culinary artistry into digital form without
            losing the warmth of their brand.
          </Text>
        </Box>

        {/* Client Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Objectives:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Create visual storytelling around food preparation and sourcing
            </List.Item>
            <List.Item>
              Develop intuitive meal selection and customization flows
            </List.Item>
            <List.Item>
              Implement subscription management for regular customers
            </List.Item>
            <List.Item>
              Showcase chef profiles and culinary philosophy
            </List.Item>
            <List.Item>Optimize for mobile food ordering</List.Item>
            <List.Item>Integrate with kitchen fulfillment systems</List.Item>
          </List.Root>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Solution:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We crafted a mouthwatering digital experience that combines food
            photography with practical functionality. The design uses warm,
            organic textures and subtle animations to create an
            appetite-appealing journey from discovery to checkout.
          </Text>
        </Box>

        {/* Key Features */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            1. Culinary Storytelling:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • Farm-to-table ingredient provenance visuals
            <br />
            • Chef video profiles showing preparation techniques
            <br />
            • Seasonal menu storytelling with parallax scrolling
            <br />• Customer recipe ideas and pairing suggestions
          </Text>
        </Box>

        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            2. Appetite-Driven UX:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • Macro photography with zoomable detail
            <br />
            • Dynamic menu filtering by dietary needs
            <br />
            • "Meal builder" with visual ingredient toggles
            <br />• Real-time portion availability indicators
          </Text>
        </Box>

        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            3. Seamless Order Management:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • One-click reordering of favorite meals
            <br />
            • Flexible subscription/pause functionality
            <br />
            • Delivery window customization
            <br />• Integrated heating instructions with order confirmation
          </Text>
        </Box>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Sales Performance:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • 68% increase in average order value
            <br />
            • 42% faster checkout completion
            <br />
            • 3.2x more repeat customers
            <br />• 85% subscription retention rate
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Customer Engagement:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • 5.8 minute average session duration
            <br />
            • 92% menu page completion rate
            <br />
            • 78% of users explore chef profiles
            <br />• 65% increase in social shares
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Operational Impact:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • 30% reduction in customer service inquiries
            <br />
            • Kitchen fulfillment accuracy improved to 99.6%
            <br />
            • 22% more efficient order processing
            <br />• Seamlessly handled 300% holiday demand surge
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Industry Recognition:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • Featured in "Best Food E-Commerce 2023" awards
            <br />
            • Won "Most Appetizing Website" from FoodTech Magazine
            <br />
            • Conversion rate 2.4x industry average
            <br />• Case study featured by Shopify Plus
          </Text>

          <Heading fontSize="24px" mb={4} fontWeight="600">
            Mobile Performance:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            • 58% of orders placed via mobile
            <br />
            • 4.8/5 average app store rating
            <br />
            • 1-tap reordering drives 72% of mobile revenue
            <br />• Push notifications achieve 45% open rate
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The Gemma Foods digital platform has become more than just an
            ordering system—it's an extension of their culinary brand. By
            combining stunning food visuals with thoughtful UX, we've created an
            experience that satisfies both the appetite and the need for
            convenience. The website continues to evolve with features like AR
            meal previews and smart refrigerator integration, maintaining
            Gemma's position at the forefront of gourmet food e-commerce.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
