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
          The Gentle Dentist
        </Heading>

        {/* Practice Philosophy */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Philosophy:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The Gentle Dentist redefines dental care by prioritizing patient
            comfort and anxiety-free experiences. Our practice specializes in
            minimally invasive techniques, family dentistry, and multiple
            sedation options to ensure every visit is as stress-free as
            possible. We combine advanced dental technology with a compassionate
            approach to create a welcoming environment for all patients.
          </Text>
        </Box>

        {/* Key Differentiators */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Why Choose Us:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>Specialized anxiety-reduction protocols</List.Item>
            <List.Item>
              Multiple sedation options (nitrous oxide, oral sedation, IV
              sedation)
            </List.Item>
            <List.Item>Pain-free injection techniques</List.Item>
            <List.Item>
              Child-friendly approach for pediatric patients
            </List.Item>
            <List.Item>Minimally invasive treatment philosophy</List.Item>
          </List.Root>
        </Box>

        {/* Our Services */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Services:
          </Heading>

          {/* Comfort-Focused General Dentistry */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              1. Comfort-Focused General Dentistry:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Stress-free dental exams and cleanings</li>
                <li>Painless cavity treatment</li>
                <li>Gentle gum disease therapy</li>
                <li>Comfortable root canal therapy</li>
                <li>Anxiety-managed tooth extractions</li>
              </ul>
            </Text>
          </Box>

          {/* Relaxing Cosmetic Dentistry */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Relaxing Cosmetic Dentistry:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>Comfortable teeth whitening procedures</li>
                <li>Minimally invasive veneers and lumineers</li>
                <li>Stress-free smile makeovers</li>
                <li>Sedation options for cosmetic procedures</li>
              </ul>
            </Text>
          </Box>

          {/* Sedation Dentistry */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              3. Sedation Dentistry Options:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              <ul>
                <li>
                  <strong>Nitrous Oxide:</strong> Light sedation for relaxation
                </li>
                <li>
                  <strong>Oral Sedation:</strong> Moderate anxiety relief
                </li>
                <li>
                  <strong>IV Sedation:</strong> Deep relaxation for complex
                  procedures
                </li>
                <li>
                  <strong>Virtual Reality:</strong> Distraction therapy during
                  treatment
                </li>
              </ul>
            </Text>
          </Box>
        </Box>

        {/* Comfort Features */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Comfort Features:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We've designed every aspect of your visit to minimize stress:
          </Text>
          <List.Root as="ol" spacing="3">
            <List.Item>Warm blankets and neck pillows</List.Item>
            <List.Item>Noise-canceling headphones with music</List.Item>
            <List.Item>Aromatherapy options</List.Item>
            <List.Item>TV entertainment in treatment rooms</List.Item>
            <List.Item>Clear, compassionate communication</List.Item>
          </List.Root>
        </Box>

        {/* Patient Testimonials */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Patient Experiences:
          </Heading>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "After 15 years of dental anxiety, The Gentle Dentist helped me
            finally get the care I needed. I actually fell asleep during my root
            canal!" - Michael R.
          </Text>
          <Text fontSize="18px" fontStyle="italic" mb={4}>
            "My children used to dread the dentist - now they ask when their
            next visit is!" - Jennifer K.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
