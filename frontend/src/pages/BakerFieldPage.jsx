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
          letterSpacing="2px"
        >
          One of a Kind Designs
        </Heading>

        {/* Business Intro */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Bakersfield's Premier Sign & Wrap Studio
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Since 2011, we've been creating standout vehicle wraps, custom
            signage, and eye-catching graphics for businesses throughout
            California's Central Valley. Our team combines award-winning design
            with precision installation to make your brand impossible to ignore.
          </Text>
        </Box>

        {/* Signature Services */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Signature Services
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>Custom Vehicle Wraps & Graphics</List.Item>
            <List.Item>Commercial & Retail Signage</List.Item>
            <List.Item>Boat, ATV & RV Wraps</List.Item>
            <List.Item>Window Graphics & Perforated Film</List.Item>
            <List.Item>ADA Compliant Signs</List.Item>
          </List.Root>
        </Box>

        {/* Service Details */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Why Businesses Choose Us
          </Heading>

          {/* Vehicle Wraps */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              1. Vehicle Wrap Specialists
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Full, partial & decal wraps</li>
                <li>Color change vinyl installations</li>
                <li>Commercial fleet branding</li>
                <li>3M™ Certified Installers</li>
                <li>Paint protection films</li>
              </ul>
            </Text>
          </Box>

          {/* Custom Signage */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Business Signage Solutions
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Channel letter signs</li>
                <li>LED illuminated signage</li>
                <li>Dimensional letters & logos</li>
                <li>Monument & pylon signs</li>
                <li>Real estate signage</li>
              </ul>
            </Text>
          </Box>

          {/* Additional Services */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              3. Specialty Services
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>
                  <strong>Wall Murals:</strong> Transform any space
                </li>
                <li>
                  <strong>Event Graphics:</strong> Trade shows & promotions
                </li>
                <li>
                  <strong>Boat Wraps:</strong> Stand out on the water
                </li>
                <li>
                  <strong>Custom Decals:</strong> For any surface
                </li>
              </ul>
            </Text>
          </Box>
        </Box>

        {/* Portfolio Highlights */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Featured Projects
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Recent work for Central Valley businesses:
          </Text>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Complete fleet branding for Valley Wide Plumbing
            </List.Item>
            <List.Item>
              Retail storefront transformation for Bella Boutique
            </List.Item>
            <List.Item>Custom boat wrap for Lake Ming Marine</List.Item>
            <List.Item>
              ADA signage package for Bakersfield Medical Plaza
            </List.Item>
          </List.Root>
        </Box>

        {/* Testimonials */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Results
          </Heading>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "Our wrapped trucks generate 5-10 calls per week from people who saw
            them on the road. One of a Kind Designs delivered exactly what they
            promised - mobile billboards!" - Mike's Air Conditioning
          </Text>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "The storefront signage they created increased our walk-in traffic
            by 30% immediately. Professional from design to installation." -
            Central Valley Nutrition
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
