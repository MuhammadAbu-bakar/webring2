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
          Log Cabin Florist
        </Heading>

        {/* Studio Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Studio Background:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Log Cabin Florist is a boutique floral design studio blending rustic
            charm with artistic elegance. Specializing in seasonal blooms and
            custom arrangements, we create handcrafted florals for weddings,
            special events, and everyday moments. Our designs reflect the
            natural beauty of the countryside while maintaining sophisticated
            floral artistry.
          </Text>
        </Box>

        {/* Our Specialties */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Specialties:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>Rustic-chic wedding florals and installations</List.Item>
            <List.Item>Seasonal bouquet subscriptions</List.Item>
            <List.Item>Custom floral designs for special events</List.Item>
            <List.Item>
              Fresh daily arrangements using locally-sourced blooms
            </List.Item>
            <List.Item>Floral workshops and design classes</List.Item>
          </List.Root>
        </Box>

        {/* Our Services */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Services:
          </Heading>

          {/* Wedding Florals */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              1. Wedding & Event Florals:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Bridal bouquets and bridal party flowers</li>
                <li>Ceremony installations and arches</li>
                <li>Reception centerpieces and table runners</li>
                <li>Boutonnieres and corsages</li>
                <li>Full-service floral design coordination</li>
              </ul>
            </Text>
          </Box>

          {/* Seasonal Arrangements */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Seasonal Arrangements:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Weekly/Monthly subscription bouquets</li>
                <li>Signature "Cabin Collection" arrangements</li>
                <li>Holiday specials and centerpieces</li>
                <li>Farmers market fresh bouquets</li>
              </ul>
            </Text>
          </Box>

          {/* Custom Design */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              3. Custom Floral Design:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>
                  <strong>Special Occasions:</strong> Birthdays, anniversaries,
                  celebrations
                </li>
                <li>
                  <strong>Sympathy Flowers:</strong> Thoughtful condolence
                  arrangements
                </li>
                <li>
                  <strong>Corporate Events:</strong> Office installations and
                  event florals
                </li>
                <li>
                  <strong>Photo Shoots:</strong> Stylized florals for
                  photography
                </li>
              </ul>
            </Text>
          </Box>
        </Box>

        {/* Design Philosophy */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Design Philosophy:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Our approach combines natural, garden-style designs with thoughtful
            artistry:
          </Text>
          <List.Root as="ol" spacing="3">
            <List.Item>Emphasis on seasonal, locally-grown flowers</List.Item>
            <List.Item>Hand-tied arrangements with organic movement</List.Item>
            <List.Item>Signature rustic containers and vessels</List.Item>
            <List.Item>Sustainable floral practices</List.Item>
            <List.Item>Personalized consultations for custom orders</List.Item>
          </List.Root>
        </Box>

        {/* Client Experiences */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Experiences:
          </Heading>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "Log Cabin Florist transformed our barn wedding into a floral
            fairyland. Their arrangements were the most complimented element of
            our entire celebration!" - Emily & James
          </Text>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "I've been getting the seasonal subscription for a year now, and
            every bouquet is more beautiful than the last. It's like having a
            piece of the countryside in my home." - Sarah T.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
