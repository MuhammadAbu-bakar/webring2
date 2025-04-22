import { Box, Text, VStack, Grid, Image } from "@chakra-ui/react";

const teamMembers = [
  { name: "Laim Owen", post: "Manager Director", image: "/member1.png" },
  { name: "Daniyel Karlos", post: "Digital Marketing", image: "/member2.png" },
  { name: "William Levi", post: "UI/UX Designer", image: "/member3.png" },
  { name: "Daniel Jack", post: "Web Developer", image: "/member4.png" },
];

const TeamShowcase = () => {
  return (
    <Box
      maxW="1920px"
      w="100%"
      px={{
        base: "20px",
        sm: "40px",
        md: "60px",
        lg: "80px",
        xl: "100px",
        "2xl": "120px",
      }}
      py={{ base: "30px", md: "50px", lg: "60px" }}
      display="flex"
      flexDirection="column"
      gap={{ base: "30px", md: "40px", lg: "50px" }}
      mx="auto"
    >
      {/* Section Heading */}
      <VStack w="100%" maxW="1723px" spacing="20px" align="flex-start">
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="700"
          letterSpacing="0.4rem"
          color="#26241C"
        >
          OUR TEAM
        </Text>
        <Text
          fontSize={{
            base: "28px",
            sm: "32px",
            md: "36px",
            lg: "48px",
            xl: "54px",
            "2xl": "64px",
          }}
          fontWeight="900"
          lineHeight={{
            base: "36px",
            sm: "40px",
            md: "44px",
            lg: "56px",
            xl: "72px",
          }}
          color="#FED904"
          maxW={{ base: "100%", lg: "639px" }}
        >
          Our Team Behind the Studio
        </Text>
      </VStack>

      {/* Image Grid */}
      <Grid
        w="100%"
        maxW="1723px"
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: "10px", sm: "15px", md: "20px" }}
      >
        {teamMembers.map((member, index) => (
          <Box key={index} className="relative group overflow-hidden">
            {/* Image with hover effect */}
            <Image
              src={member.image}
              alt={member.name}
              w="100%"
              h={{
                base: "250px",
                sm: "300px",
                md: "350px",
                lg: "400px",
                xl: "466px",
              }}
              objectFit="cover"
              className="transition-all duration-300 filter grayscale group-hover:grayscale-0"
            />

            {/* Overlay for Name & Position */}
            <Box
              className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 bg-opacity-50 p-2 sm:p-4 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              w={{ base: "90%", sm: "85%", md: "80%", lg: "100%" }}
            >
              <Text
                fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px" }}
                fontWeight="700"
                color="white"
                textAlign="left"
              >
                {member.name}
              </Text>
              <Text
                fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}
                fontWeight="400"
                color="white"
                textAlign="left"
              >
                {member.post}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamShowcase;
