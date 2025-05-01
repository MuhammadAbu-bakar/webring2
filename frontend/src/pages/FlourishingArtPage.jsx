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
          Flourishing Art
        </Heading>

        {/* Studio Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Studio Vision:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Flourishing Art is a botanical art studio creating nature-inspired
            masterpieces that capture the ephemeral beauty of flora. We
            specialize in original paintings, limited edition prints, and
            commissioned pieces that blend scientific accuracy with artistic
            expression. Each work celebrates the intricate details and organic
            forms found in the natural world.
          </Text>
        </Box>

        {/* Artistic Specialties */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Artistic Specialties:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>Botanical watercolor and gouache paintings</List.Item>
            <List.Item>Nature-inspired abstract compositions</List.Item>
            <List.Item>Custom commissioned floral artworks</List.Item>
            <List.Item>Limited edition archival prints</List.Item>
            <List.Item>Herbarium-style mixed media pieces</List.Item>
          </List.Root>
        </Box>

        {/* Our Offerings */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Offerings:
          </Heading>

          {/* Original Artworks */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              1. Original Artworks:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Botanical watercolor collections</li>
                <li>Seasonal floral series</li>
                <li>Large-scale nature installations</li>
                <li>Framed herbarium artworks</li>
                <li>One-of-a-kind mixed media pieces</li>
              </ul>
            </Text>
          </Box>

          {/* Print Collections */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Print Collections:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Limited edition giclée prints</li>
                <li>Open edition art prints</li>
                <li>Custom print sizes and framing</li>
                <li>Seasonal print releases</li>
              </ul>
            </Text>
          </Box>

          {/* Commissioned Works */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              3. Commissioned Works:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>
                  <strong>Personal Portraits:</strong> Incorporating meaningful
                  botanicals
                </li>
                <li>
                  <strong>Wedding Florals:</strong> Painting bridal bouquets as
                  keepsakes
                </li>
                <li>
                  <strong>Memorial Pieces:</strong> Capturing special flowers
                  and plants
                </li>
                <li>
                  <strong>Commercial Projects:</strong> Custom artworks for
                  businesses
                </li>
              </ul>
            </Text>
          </Box>
        </Box>

        {/* Artistic Process */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Artistic Process:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Our creative approach combines observation with imagination:
          </Text>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Working from both live specimens and reference materials
            </List.Item>
            <List.Item>
              Using archival-quality materials for longevity
            </List.Item>
            <List.Item>
              Layering techniques to create depth and texture
            </List.Item>
            <List.Item>
              Combining scientific accuracy with artistic license
            </List.Item>
            <List.Item>Collaborating closely with commission clients</List.Item>
          </List.Root>
        </Box>

        {/* Client Experiences */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Collector Experiences:
          </Heading>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "The commissioned painting of my grandmother's rose garden is our
            family's most treasured heirloom. The artist captured every petal
            with such care and beauty." - Margaret D.
          </Text>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "I've collected three pieces from the seasonal series, and they
            bring life to my home year-round. The attention to botanical detail
            is extraordinary." - Alex R.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
