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
          Dentist Sonrisas
        </Heading>

        {/* Practice Philosophy */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Philosophy:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            At Sonrisas Dental, we believe in creating beautiful, healthy smiles
            through personalized, patient-centered care. Our modern practice
            combines advanced dental technology with a warm, welcoming
            atmosphere to make every visit comfortable and effective. From
            routine preventive care to complete smile makeovers, we provide
            comprehensive services tailored to each patient's unique needs.
          </Text>
        </Box>

        {/* Key Features */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Why Choose Sonrisas:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Patient-centered approach with personalized treatment plans
            </List.Item>
            <List.Item>
              State-of-the-art dental technology for precise, comfortable care
            </List.Item>
            <List.Item>
              Comfort-focused environment with sedation options
            </List.Item>
            <List.Item>
              Comprehensive services from prevention to cosmetic enhancement
            </List.Item>
            <List.Item>
              Multilingual staff serving diverse communities
            </List.Item>
          </List.Root>
        </Box>

        {/* Our Services */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Services:
          </Heading>

          {/* Preventive & General Dentistry */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              1. Preventive & General Dentistry:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Comprehensive dental exams and oral cancer screenings</li>
                <li>Professional cleanings and periodontal therapy</li>
                <li>Precision digital X-rays with low radiation</li>
                <li>Sealants and fluoride treatments</li>
                <li>Custom-fitted night guards and mouthguards</li>
              </ul>
            </Text>
          </Box>

          {/* Cosmetic Dentistry */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Cosmetic Smile Enhancements:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Professional teeth whitening</li>
                <li>Porcelain veneers and lumineers</li>
                <li>Invisalign clear aligners</li>
                <li>Cosmetic bonding and contouring</li>
                <li>Full smile makeovers</li>
              </ul>
            </Text>
          </Box>

          {/* Advanced Treatments */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              3. Advanced Treatments:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>
                  <strong>Digital Dentistry:</strong> CEREC same-day crowns
                </li>
                <li>
                  <strong>Dental Implants:</strong> Tooth replacement solutions
                </li>
                <li>
                  <strong>Laser Dentistry:</strong> Precise, comfortable
                  procedures
                </li>
                <li>
                  <strong>Sedation Options:</strong> For anxious patients
                </li>
              </ul>
            </Text>
          </Box>
        </Box>

        {/* Technology Highlights */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Advanced Technology:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We invest in the latest dental innovations for better outcomes:
          </Text>
          <List.Root as="ol" spacing="3">
            <List.Item>Intraoral cameras for precise diagnostics</List.Item>
            <List.Item>Digital smile design software</List.Item>
            <List.Item>3D cone beam imaging</List.Item>
            <List.Item>Laser-assisted periodontal therapy</List.Item>
            <List.Item>Paperless charting and records</List.Item>
          </List.Root>
        </Box>

        {/* Patient Testimonials */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Patient Experiences:
          </Heading>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "Sonrisas transformed my smile and my confidence. The entire team
            made me feel comfortable from the first visit through my complete
            smile makeover." - Carlos M.
          </Text>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "After years of dental anxiety, I finally found a practice that
            understands my needs. The sedation options allowed me to get the
            care I'd been avoiding." - Elena R.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
