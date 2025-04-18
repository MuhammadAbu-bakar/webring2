import { Box, Heading, Text, List, Stack, ListRoot } from "@chakra-ui/react";

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
          My Retro Jersey E-Commerce
        </Heading>

        {/* Client Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Client Overview:
          </Heading>
          <Text fontSize="18px" fontWeight="400" mb={4}>
            {" "}
            {/* Added margin-bottom */}
            My Retro Jersey, a passionate venture by a dedicated entrepreneur,
            aimed to revive the nostalgia of classic club shirts. The client
            approached WeBring, a leading web development company, with the
            vision of creating a user-friendly platform to showcase and sell
            vintage football jerseys from iconic clubs.
          </Text>
        </Box>

        {/* Our Solution */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Challenges Faced:
          </Heading>
          <Stack spacing={2} fontSize="16px">
            <Text>
              <strong>Aesthetic Appeal: </strong>
            </Text>
            <Text>
              The client emphasized the importance of a visually appealing
              website that captured the essence of each classic jersey.
            </Text>
            <Text>
              <strong>User-Friendly Interface: </strong>
            </Text>
            <Text>
              It was crucial to design an intuitive interface that made it easy
              for users to browse through the collection, select items, and make
              purchases effortlessly.
            </Text>
            <Text>
              <strong>E-commerce Integration: </strong>
            </Text>
            <Text>
              The website needed robust e-commerce functionality to handle
              transactions securely and efficiently.
            </Text>
            <Text>
              <strong>Mobile Responsiveness: </strong>
            </Text>
            <Text>
              With the increasing use of mobile devices, ensuring a seamless
              experience on various screen sizes was a priority.
            </Text>
            <Text>
              <strong>Elementor on WordPress: </strong>
            </Text>
            <Text>
              The client specifically requested the use of Elementor on the
              WordPress platform for ease of content management and future
              scalability.
            </Text>
          </Stack>
        </Box>

        {/* Strategic Planning */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Our Solution:
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

        {/* Results */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            {" "}
            {/* Increased margin-bottom */}
            Results:
          </Heading>
          <Stack spacing={2} fontSize="16px">
            <Text>
              The collaboration between JAZ Payments and WeBring resulted in a
              dynamic and effective website that successfully achieved the
              client’s objectives:
            </Text>
            <Text>
              <strong>Increased Visibility: </strong>
            </Text>
            <Text>
              The professional and visually appealing design of the website has
              significantly increased JAZ Payments’ online visibility.
            </Text>
            <Text>
              <strong>Enhanced User Engagement: </strong>
            </Text>
            <Text>
              The intuitive interface and engaging content have led to increased
              user engagement, with visitors spending more time exploring the
              payment solutions offered.
            </Text>
            <Text>
              <strong>Boosted Sales: </strong>
            </Text>
            <Text>
              The website has played a pivotal role in boosting sales for JAZ
              Payments, as businesses find the platform user-friendly and the
              payment solutions highly appealing.
            </Text>
            <Text>
              <strong>Positive Feedback: </strong>
            </Text>
            <Text>
              JAZ Payments has received positive feedback from both existing and
              potential clients, commending the website’s design, functionality,
              and ease of accessing information.
            </Text>
          </Stack>
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
            The JAZ Payments website, developed by WeBring using Elementor on
            WordPress, stands as a testament to the successful collaboration
            between the client and the development team. It not only provides a
            platform to showcase payment solutions but has also become a
            valuable asset in driving sales and enhancing the overall brand
            image of JAZ Payments in the competitive fintech industry.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
