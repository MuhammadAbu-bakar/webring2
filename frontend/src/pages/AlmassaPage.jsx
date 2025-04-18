import { Box, Heading, Text, List } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="#151515" color="#FFFFFF">
      <Box p={8} maxW="1000px" mx="auto">
        <Heading
          fontSize="48px"
          textAlign="center"
          mb="100px" // Increased margin-bottom for more space
          fontWeight="600"
          color="#DDD0C8"
        >
          Almassa
        </Heading>

        {/* Client Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Client Background:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            Our esteemed client, 13Chauffeurs, approached WeBring with a vision
            to establish a premium chauffeur service in Melbourne. They aimed to
            provide top-notch transportation services for various occasions,
            including airport transfers, business trips, corporate events,
            weddings, VIP experiences, winery tours, school transfers, and
            private journeys. The client desired a website that not only
            showcased their fleet of luxury cars but also conveyed their
            commitment to excellence in service.
          </Text>
        </Box>

        {/* Client Objectives */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Client Objectives:
          </Heading>
          <List.Root as="ol" spacing="3">
            <List.Item>
              Develop a user-friendly and visually appealing website to attract
              potential clients.
            </List.Item>
            <List.Item>
              Highlight the diverse range of chauffeur services offered by
              13Chauffeurs.
            </List.Item>
            <List.Item>
              Integrate an online booking system for easy reservation.
            </List.Item>
            <List.Item>
              Ensure mobile responsiveness for accessibility on different
              devices.
            </List.Item>
            <List.Item>
              Optimize the website for search engine ranking to enhance online
              visibility.
            </List.Item>
          </List.Root>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Our Solution:
          </Heading>
        </Box>

        {/* Strategic Planning */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            1. Design and Development:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            WeBring harnessed the power of Elementor on WordPress to design a
            visually stunning and user-friendly website. The layout was
            carefully crafted to highlight each jersey’s unique features, with
            high-quality images and detailed descriptions.
          </Text>
        </Box>

        {/* Custom Design */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            2. E-commerce Integration:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            WooCommerce, a powerful e-commerce plugin for WordPress, was
            seamlessly integrated to provide a secure and efficient online
            shopping experience. The checkout process was optimized for
            simplicity and speed.
          </Text>
        </Box>

        {/* Service Pages */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            3. Responsive Design:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            Our team ensured that the website was fully responsive, providing an
            equally engaging experience on desktops, tablets, and smartphones.
            This approach maximized accessibility and user satisfaction.
          </Text>
        </Box>

        {/* Booking System */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            4. Customization Features:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            To enhance user engagement, customization features were implemented,
            allowing customers to select sizes, add personalized touches, and
            preview their chosen jersey before making a purchase.
          </Text>
        </Box>

        {/* Mobile Responsiveness */}
        <Box mb={8}>
          <Heading fontSize="20px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            5. SEO Optimization:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            The website was optimized for search engines to increase visibility
            and drive organic traffic. This involved strategic placement of
            keywords, meta tags, and other SEO best practices.
          </Text>
        </Box>

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Results:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            The collaboration between My Retro Jersey and WeBring resulted in a
            successful online platform that exceeded client expectations:
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Increased Sales:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            The user-friendly interface and seamless checkout process
            contributed to a significant boost in sales.
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Positive User Feedback:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            Visitors praised the website’s design, functionality, and the
            ability to relive memories through classic football jerseys.
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Mobile Traffic Surge:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            The responsive design attracted a growing number of mobile users,
            expanding the customer base.
          </Text>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            SEO Success:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            The website achieved higher rankings on search engines, driving
            organic traffic and increasing brand visibility.
          </Text>
        </Box>

        {/* Conclusion */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Conclusion:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            My Retro Jersey, powered by WeBring’s expertise in web development,
            now stands as a thriving online destination for football enthusiasts
            seeking classic club shirts. The success of this project showcases
            the seamless integration of design, functionality, and user
            experience, bringing the beauty of retro jerseys closer to fans
            worldwide.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
