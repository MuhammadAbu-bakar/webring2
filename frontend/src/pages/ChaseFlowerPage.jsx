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
          letterSpacing="1px"
        >
          Chase Flower Shop
        </Heading>

        {/* Studio Introduction */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Floral Philosophy:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Chase Flower Shop is a boutique floral studio where timeless
            elegance meets modern design. We specialize in handcrafted
            arrangements using the freshest seasonal blooms, creating floral art
            for weddings, special events, and everyday moments worth
            celebrating. Each arrangement reflects our passion for organic
            beauty and thoughtful composition.
          </Text>
        </Box>

        {/* Signature Offerings */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Signature Offerings:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>Wedding floral design and installations</List.Item>
            <List.Item>Seasonal subscription bouquets</List.Item>
            <List.Item>Custom event floral arrangements</List.Item>
            <List.Item>Daily fresh flower deliveries</List.Item>
            <List.Item>Floral workshops and private lessons</List.Item>
          </List.Root>
        </Box>

        {/* Services */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Floral Services:
          </Heading>

          {/* Weddings & Events */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              1. Weddings & Special Events:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Bridal bouquets and bridal party flowers</li>
                <li>Ceremony arches and installations</li>
                <li>Reception centerpieces and table runners</li>
                <li>Boutonnieres and corsages</li>
                <li>Full-service floral design coordination</li>
              </ul>
            </Text>
          </Box>

          {/* Everyday Arrangements */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Everyday Florals:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Signature "Chase Collection" bouquets</li>
                <li>Custom arrangements for any occasion</li>
                <li>Subscription flower services</li>
                <li>Same-day local delivery</li>
                <li>Corporate accounts and weekly office flowers</li>
              </ul>
            </Text>
          </Box>

          {/* Specialty Services */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              3. Specialty Services:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>
                  <strong>Preserved Arrangements:</strong> Long-lasting floral
                  art
                </li>
                <li>
                  <strong>Sympathy Flowers:</strong> Thoughtful condolence
                  tributes
                </li>
                <li>
                  <strong>Holiday Collections:</strong> Seasonal centerpieces
                  and wreaths
                </li>
                <li>
                  <strong>Floral Styling:</strong> For photoshoots and special
                  projects
                </li>
              </ul>
            </Text>
          </Box>
        </Box>

        {/* Design Approach */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Design Approach:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            What makes our florals unique:
          </Text>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Seasonally-inspired designs using locally-sourced blooms when
              possible
            </List.Item>
            <List.Item>
              Hand-tied arrangements with organic, garden-style movement
            </List.Item>
            <List.Item>
              Custom color palettes tailored to each client's vision
            </List.Item>
            <List.Item>
              Attention to texture, fragrance, and longevity
            </List.Item>
            <List.Item>
              Sustainable floral practices and composting program
            </List.Item>
          </List.Root>
        </Box>

        {/* Client Experiences */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Stories:
          </Heading>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "Chase Flower Shop transformed our wedding venue into a floral
            paradise. The arrangements were even more beautiful than we
            imagined, and they lasted perfectly through the entire celebration."
            - Sophia & Mark
          </Text>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "I've been getting the seasonal subscription for six months, and
            every bouquet surprises me with its creativity and freshness. It's
            become the highlight of my home decor." - Danielle R.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
