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
          The Dentist of SummerLin
        </Heading>

        {/* Client Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Background:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The Dentist of Summerlin is a premier dental practice located in the
            Summerlin area of Las Vegas, Nevada. They specialize in providing
            comprehensive dental care including general dentistry, cosmetic
            procedures, and restorative treatments. Their team of experienced
            professionals is dedicated to delivering exceptional patient care
            using state-of-the-art technology in a comfortable, modern
            environment.
          </Text>
        </Box>

        {/* Client Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Objectives:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Create a professional, welcoming website that reflects their
              high-quality dental services
            </List.Item>
            <List.Item>
              Highlight their range of services including cosmetic dentistry,
              implants, and Invisalign
            </List.Item>
            <List.Item>
              Implement an easy-to-use appointment booking system
            </List.Item>
            <List.Item>
              Optimize for local SEO to attract patients in the Summerlin/Las
              Vegas area
            </List.Item>
            <List.Item>
              Ensure mobile responsiveness for patients accessing the site on
              smartphones
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
              We created a clean, modern website with a calming color scheme
              that reflects the practice's professional yet welcoming
              atmosphere. The design emphasizes clarity and ease of navigation,
              with prominent calls-to-action for appointment booking.
            </Text>
          </Box>

          {/* Service Showcases */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Service Showcases:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              Dedicated sections were created for each of their main service
              categories:
              <ul>
                <li>
                  <strong>General Dentistry:</strong> Routine cleanings, exams,
                  fillings, and preventive care
                </li>
                <li>
                  <strong>Cosmetic Dentistry:</strong> Teeth whitening, veneers,
                  and smile makeovers
                </li>
                <li>
                  <strong>Restorative Treatments:</strong> Dental implants,
                  crowns, bridges, and dentures
                </li>
                <li>
                  <strong>Invisalign:</strong> Clear aligner treatment for teeth
                  straightening
                </li>
              </ul>
            </Text>
          </Box>

          {/* Online Booking */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              3. Online Booking System:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              Integrated a user-friendly appointment scheduling system that
              allows patients to book, reschedule, or cancel appointments 24/7,
              with automatic reminders to reduce no-shows.
            </Text>
          </Box>

          {/* Local SEO */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              4. Local SEO Optimization:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              Implemented comprehensive local SEO strategies including Google My
              Business optimization, local keyword targeting, and
              location-specific content to attract patients in Summerlin and
              surrounding Las Vegas areas.
            </Text>
          </Box>
        </Box>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The new website has significantly enhanced the practice's online
            presence and patient acquisition:
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Increased Appointment Bookings:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The convenient online booking system led to a 40% increase in
            appointment requests within the first three months.
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Improved Local Visibility:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The practice now ranks in the top 3 for key search terms like
            "dentist in Summerlin" and "cosmetic dentist Las Vegas."
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Enhanced Patient Engagement:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The informative content and easy navigation resulted in longer visit
            durations and more page views per session.
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The new website has become an effective marketing tool for The
            Dentist of Summerlin, helping them attract new patients while
            providing better service to existing ones. The combination of
            professional design, comprehensive service information, and
            convenient online features has positioned the practice as a leading
            dental provider in Summerlin.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
