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
          The Dentist of Summerlin
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
          <Text fontSize="18px" fontWeight="400">
            Seeking to improve their digital presence and streamline their
            patient experience, The Dentist of Summerlin partnered with{" "}
            <strong>WeBring</strong> to develop a customized, high-performing
            website. They recognized the need for a more robust online presence
            to match their clinical excellence, and WeBring stepped in to
            translate those needs into a fully optimized digital solution.
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
          <Text fontSize="18px" fontWeight="400" mb={4}>
            WeBring worked closely with The Dentist of Summerlin to design and
            develop a tailored solution that addressed their goals and business
            vision. By conducting deep discovery sessions, we uncovered the core
            values and aesthetic preferences of the practice and translated
            these into a visually appealing, technically robust, and
            user-friendly website.
          </Text>

          {/* Design and Development */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              1. Design and Development:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              We created a clean, modern website with a calming color scheme
              that reflects the practice's professional yet welcoming
              atmosphere. The layout was crafted to reduce patient friction by
              keeping navigation intuitive and actions like booking or service
              exploration just a click away. The design is both aesthetic and
              purposeful—designed to convert visitors into patients.
            </Text>
          </Box>

          {/* Service Showcases */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              2. Service Showcases:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              We developed dedicated pages for each of their key service
              offerings, allowing users to explore specific treatments in
              detail. This structure not only educates prospective patients but
              also enhances SEO visibility for long-tail search queries. Each
              section included clear descriptions, imagery, and calls to action.
              Services included:
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
              To make the patient experience more convenient, we integrated a
              user-friendly online booking system. This feature allows patients
              to schedule appointments at their convenience, reducing reliance
              on phone calls. The system also supports rescheduling and
              cancellation with automated reminders to decrease no-shows and
              improve operational efficiency.
            </Text>
          </Box>

          {/* Local SEO */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              4. Local SEO Optimization:
            </Heading>
            <Text fontSize="18px" fontWeight="400" mb={4}>
              A strong online presence isn’t just about design—it’s about
              visibility. We optimized the site for local search by enhancing
              their Google My Business listing, embedding relevant keywords, and
              building content around local intent. This made it easier for
              residents in Summerlin and the wider Las Vegas area to discover
              the practice through organic search.
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
            presence and patient acquisition. With WeBring’s solution in place,
            The Dentist of Summerlin experienced tangible improvements in key
            performance areas:
          </Text>

          <Heading fontSize="36px" mb={4} fontWeight="600">
            Increased Appointment Bookings:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The convenient online booking system led to a 40% increase in
            appointment requests within the first three months. Patients praised
            the ease of scheduling, and the team noticed a decrease in missed
            appointments due to automated reminders.
          </Text>

          <Heading fontSize="36px" mb={4} fontWeight="600">
            Improved Local Visibility:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Thanks to strong SEO efforts, the practice now ranks in the top 3
            for competitive keywords like "dentist in Summerlin" and "cosmetic
            dentist Las Vegas." This organic growth brought in new patients
            without requiring paid ads.
          </Text>

          <Heading fontSize="36px" mb={4} fontWeight="600">
            Enhanced Patient Engagement:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            With better structure, informative content, and intuitive
            navigation, the website kept visitors engaged. Session durations
            increased, bounce rates dropped, and users explored more pages per
            visit—an indicator of trust and interest.
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            By partnering with <strong>WeBring</strong>, The Dentist of
            Summerlin successfully transformed their digital presence into a
            competitive asset. Our collaborative process combined thoughtful
            design, functional enhancements, and strategic SEO—all tailored to
            their business goals.
          </Text>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The project not only met the expectations of the dental team but
            also made a lasting impact on how new patients discover and interact
            with their brand. It stands as a strong example of how WeBring
            empowers healthcare providers to grow through meaningful digital
            solutions.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
