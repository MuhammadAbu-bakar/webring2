import { Box, Heading, Text, VStack } from "@chakra-ui/react";

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
            California. One of a Kind Designs is known for bold creativity,
            high-quality materials, and a passion for helping brands turn heads.
            Whether it’s a full vehicle wrap or a storefront sign, our work
            leaves a lasting impression.
          </Text>
        </Box>

        {/* Our Partnership with Webring */}
        <Box mb={8} bg="gray.50" p={6} borderRadius="lg">
          <Heading fontSize="36px" mb={6} fontWeight="600">
            Our Partnership with Webring:
          </Heading>

          <VStack spacing={6} align="stretch">
            <Box>
              <Heading fontSize="24px" mb={3} fontWeight="600" color="blue.600">
                Visual Identity Enhancement
              </Heading>
              <Text fontSize="18px" fontWeight="400">
                Webring helped One of a Kind Designs modernize its visual brand
                across all digital platforms. The updated website showcases our
                portfolio with high-definition galleries, vibrant color schemes,
                and bold typography that aligns with our creative style and
                energy.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="24px" mb={3} fontWeight="600" color="blue.600">
                Streamlined Client Onboarding
              </Heading>
              <Text fontSize="18px" fontWeight="400">
                We implemented interactive quote request forms and real-time
                appointment scheduling, making it easier than ever for new
                customers to connect with our team. The system has improved lead
                conversion by 45% and cut administrative response times in half.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="24px" mb={3} fontWeight="600" color="blue.600">
                Portfolio-Driven Engagement
              </Heading>
              <Text fontSize="18px" fontWeight="400">
                With Webring’s design expertise, we developed a gallery
                experience optimized for mobile and desktop users. High-impact
                visuals and client success stories drive engagement, helping
                visitors quickly understand our creative capabilities and
                project diversity.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="24px" mb={3} fontWeight="600" color="blue.600">
                Search Engine Visibility
              </Heading>
              <Text fontSize="18px" fontWeight="400">
                A new SEO strategy, backed by content-rich service pages and
                location-based targeting, boosted our search rankings across
                Bakersfield and surrounding regions. Organic traffic increased
                by 62% in the first three months after launch.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="24px" mb={3} fontWeight="600" color="blue.600">
                Results-Driven Analytics
              </Heading>
              <Text fontSize="18px" fontWeight="400">
                The integrated analytics dashboard tracks visitor behavior, form
                submissions, and conversion rates in real-time. This data allows
                us to fine-tune campaigns and content strategies to continually
                improve ROI.
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Business Objectives:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            One of a Kind Designs needed a digital platform that could reflect
            its bold personality and high-impact services while improving
            customer interaction, booking, and showcasing past work. The goal
            was to attract more commercial clients while simplifying backend
            workflows for staff.
          </Text>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Solution:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Webring delivered a vibrant, performance-optimized website that
            brings One of a Kind Designs' vision to life. With rich animations,
            a user-friendly layout, and strong brand alignment, the site makes
            it easy for clients to explore offerings, submit requests, and view
            recent projects.
          </Text>
        </Box>

        {/* Key Features */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            1. Bold Visual Storytelling:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            High-resolution imagery, cinematic scroll effects, and a clean
            design highlight the quality and personality behind every wrap and
            sign. The site is a direct reflection of One of a Kind’s
            design-forward approach.
          </Text>

          <Heading fontSize="20px" mb={4} fontWeight="600">
            2. Interactive Quote Requests:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We added a step-by-step form that walks clients through project
            requirements, timelines, and budget input—resulting in more
            high-quality inquiries and fewer back-and-forth emails.
          </Text>

          <Heading fontSize="20px" mb={4} fontWeight="600">
            3. Showcase-Driven Navigation:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Each service page includes before-and-after comparisons, customer
            testimonials, and detailed project breakdowns to demonstrate impact
            and inspire new ideas.
          </Text>

          <Heading fontSize="20px" mb={4} fontWeight="600">
            4. Mobile-First Performance:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The website is fully responsive and lightning-fast, with lazy
            loading and optimized assets to ensure smooth browsing even on
            mobile networks.
          </Text>
        </Box>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The website has become a central driver of new business for One of a
            Kind Designs. Improved visibility and enhanced client interaction
            have fueled both short-term growth and long-term brand loyalty.
          </Text>

          <Heading fontSize="24px" mb={4} mt={8} fontWeight="600">
            Stronger Lead Generation:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The new quote request process boosted conversion rates by 45% within
            two months. More inquiries now come through digital channels than
            word of mouth.
          </Text>

          <Heading fontSize="24px" mb={4} mt={8} fontWeight="600">
            Boosted Local Visibility:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            One of a Kind now ranks on the first page of search results for key
            signage and wrap-related keywords across Bakersfield and Kern
            County.
          </Text>

          <Heading fontSize="24px" mb={4} mt={8} fontWeight="600">
            Operational Time Savings:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Staff now spend 60% less time coordinating appointments and
            follow-ups, freeing them to focus on design work and client
            relationships.
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            One of a Kind Designs’ new website captures the creativity, quality,
            and energy the brand is known for. Webring’s design and strategy
            helped elevate their digital presence into a growth engine that
            attracts new customers, builds trust, and simplifies daily
            operations. This collaboration showcases how strong design and
            digital strategy can fuel business momentum and long-term success.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
