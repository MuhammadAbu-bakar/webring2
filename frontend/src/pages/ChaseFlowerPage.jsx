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
            celebrating. Our approach blends creativity, sustainability, and
            unmatched attention to detail to ensure every bouquet makes a
            lasting impression.
          </Text>
        </Box>

        {/* Client Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Objectives:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            Chase Flower Shop aimed to elevate their online presence through a
            visually captivating website that reflects the artistry of their
            floral designs. Their goals included showcasing their portfolio,
            enabling online orders, and building a strong brand identity that
            resonates with local and destination clients. The site needed to
            offer smooth navigation, mobile optimization, and simple backend
            management for daily updates.
          </Text>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Solution:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We created a visually enchanting website that brings Chase Flower
            Shop’s floral artistry to life. From an immersive gallery to an
            intuitive booking system, every element of the website was designed
            to deliver a seamless experience. We combined visual storytelling
            with technical performance to help the brand attract new clients
            while staying true to its boutique charm.
          </Text>
        </Box>

        {/* Key Features */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            1. Immersive Visual Design:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The design draws inspiration from floral textures and natural
            palettes. We used soft color tones, flowing layouts, and large
            photography to capture the delicate nature of Chase’s work. The
            result is an elegant, editorial-style interface that mirrors the
            brand’s artistic vision.
          </Text>
        </Box>

        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            2. Seamless E-Commerce Integration:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The site features a secure and easy-to-navigate shop where users can
            browse seasonal collections, customize orders, and schedule
            deliveries. We ensured a frictionless checkout experience, enabling
            customers to complete purchases in under two minutes across all
            devices.
          </Text>
        </Box>

        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            3. Booking and Event Management:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            We built a custom booking system for event consultations, allowing
            clients to choose appointment types, provide event details, and
            receive instant confirmations. This feature reduced manual
            scheduling time by 60% and increased conversion from inquiries to
            bookings.
          </Text>
        </Box>

        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            4. Mobile-First Optimization:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            With over 70% of traffic coming from mobile users, we designed the
            interface to be fully responsive with fast load times, intuitive
            gestures, and adaptive layouts. This ensured a consistently
            beautiful experience across phones, tablets, and desktops.
          </Text>
        </Box>

        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            5. Content Management System:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            A simple yet powerful CMS empowers the Chase team to update floral
            collections, blog posts, and press features with ease. This autonomy
            has improved content freshness and supported timely seasonal
            promotions.
          </Text>
        </Box>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Results:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The redesigned website positioned Chase Flower Shop as a premium
            floral studio in its market. The new digital presence has become an
            effective marketing and sales tool that aligns beautifully with the
            brand’s core values and vision.
          </Text>

          <Heading fontSize="24px" mb={4} mt={8} fontWeight="600">
            Brand Recognition:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The refined aesthetic and cohesive branding led to a 45% increase in
            social shares and mentions. Clients often compliment the elegant web
            experience, which now matches the quality of the physical
            arrangements.
          </Text>

          <Heading fontSize="24px" mb={4} mt={8} fontWeight="600">
            Online Sales Growth:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            E-commerce orders rose by 63% within the first three months
            post-launch, with average order value increasing by 18% due to
            curated product recommendations and better seasonal campaign
            management.
          </Text>

          <Heading fontSize="24px" mb={4} mt={8} fontWeight="600">
            Operational Efficiency:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The CMS and booking tools significantly reduced time spent on
            customer service tasks. The team can now focus more on design and
            fulfillment rather than administrative work.
          </Text>

          <Heading fontSize="24px" mb={4} mt={8} fontWeight="600">
            Community Engagement:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The blog and press section has helped build stronger local
            visibility, positioning Chase Flower Shop as a go-to floral artist
            for upscale events, brand collaborations, and media features.
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            The Chase Flower Shop website exemplifies how thoughtful digital
            design can elevate a creative business. With a focus on
            storytelling, functionality, and brand consistency, we delivered a
            site that delights customers and supports business growth. The
            transformation continues to blossom, reflecting the vibrant,
            evolving spirit of Chase Flower Shop.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
