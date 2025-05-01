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
          Dentist Art
        </Heading>

        {/* Client Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Background:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Dentist Art represents the fusion of dental science and artistic
            craftsmanship. This boutique practice redefines cosmetic dentistry
            by approaching each smile as a unique work of art. Specializing in
            high-end aesthetic solutions, their team of artist-dentists combines
            advanced digital technology with traditional artistic principles to
            create breathtaking smile transformations.
          </Text>
        </Box>

        {/* Client Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Objectives:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Create a visually stunning website that reflects their artistic
              approach to dentistry
            </List.Item>
            <List.Item>
              Showcase their portfolio of smile makeovers as an art gallery
            </List.Item>
            <List.Item>
              Implement advanced visualization tools for prospective patients
            </List.Item>
            <List.Item>
              Attract high-end clients seeking bespoke aesthetic solutions
            </List.Item>
            <List.Item>
              Position the practice as leaders in artistic smile design
            </List.Item>
          </List.Root>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Solution:
          </Heading>

          {/* Artistic Design */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              1. Artistic Digital Experience:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              We developed a website that feels more like an art gallery than a
              dental practice. The design features:
              <ul>
                <li>
                  Full-screen before/after smile galleries with artistic
                  lighting
                </li>
                <li>
                  Subtle animation effects that reveal cases like museum
                  exhibits
                </li>
                <li>
                  A color palette inspired by dental ceramics and precious
                  metals
                </li>
                <li>
                  Typography that balances clinical precision with creative
                  flair
                </li>
              </ul>
            </Text>
          </Box>

          {/* Digital Smile Design */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Digital Smile Design Showcase:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              Created interactive features to demonstrate their signature
              services:
              <ul>
                <li>
                  <strong>Custom Veneer Artistry:</strong> Showcasing the
                  hand-crafted process from digital design to ceramic layering
                </li>
                <li>
                  <strong>Smile Design Simulator:</strong> Interactive tool
                  allowing visitors to explore different aesthetic approaches
                </li>
                <li>
                  <strong>Case Studies:</strong> Detailed narratives of
                  transformation journeys with artistic commentary
                </li>
              </ul>
            </Text>
          </Box>

          {/* Luxury Experience */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              3. Luxury Client Experience:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              Implemented concierge-level features:
              <ul>
                <li>Private consultation request system</li>
                <li>
                  Virtual consultation portal with augmented reality previews
                </li>
                <li>Discreet inquiry options for high-profile clients</li>
                <li>Downloadable lookbook of signature smile designs</li>
              </ul>
            </Text>
          </Box>

          {/* Artistic SEO */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              4. Artistic Content Strategy:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              Developed a unique content approach blending dental expertise with
              art commentary:
              <ul>
                <li>"The Art of Smile Design" blog series</li>
                <li>
                  Comparisons between famous artworks and dental aesthetics
                  principles
                </li>
                <li>Interviews with dental ceramists as artists</li>
              </ul>
            </Text>
          </Box>
        </Box>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The Dentist Art platform has redefined the perception of aesthetic
            dentistry:
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Gallery-Worthy Conversions:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            78% increase in high-value case inquiries, with average case value
            rising by 40%
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Media Recognition:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Featured in luxury lifestyle magazines and art/design publications
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Industry Influence:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Now considered reference cases by dental laboratories worldwide
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Dentist Art's digital presence successfully bridges the gap between
            dental clinic and art studio, attracting clients who appreciate
            smile design as a form of personal artistic expression. The website
            has become both a marketing tool and a statement of their
            philosophical approach to aesthetic dentistry.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
