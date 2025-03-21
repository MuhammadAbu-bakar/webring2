import { Box, Text, VStack, Grid, Image } from "@chakra-ui/react";

const teamMembers = [
  { name: "Member 1", image: "/member1.png" },
  { name: "Member 2", image: "/member2.png" },
  { name: "Member 3", image: "/member3.png" },
  { name: "Member 4", image: "/member4.png" },
];

const TeamShowcase = () => {
  return (
    <Box
      maxW="1920px"
      w="100%"
      minH="817px"
      px={{ base: "20px", lg: "100px" }}
      py="50px"
      display="flex"
      flexDirection="column"
      gap="50px"
      bg="#F8F8F6"
      mx="auto"
    >
      {/* Text Section */}
      <VStack w="100%" maxW="1723px" spacing="20px" align="flex-start">
        <Text fontSize="16px" fontWeight="700" letterSpacing="0.4rem" color="#26241C">
          OUR TEAM
        </Text>
        <Text
          fontSize={{ base: "36px", lg: "60px" }}
          fontWeight="900"
          lineHeight={{ base: "44px", lg: "72px" }}
          color="#FED904"
          maxW="639px"
        >
          Our Team Behind the Studio
        </Text>
      </VStack>

      {/* Image Grid (Fixed 4 Images in One Row on Desktop) */}
      <Grid
        w="100%"
        maxW="1723px"
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} // Forces 4 images in one row on large screens
        gap="20px"
      >
        {teamMembers.map((member, index) => (
          <Image
            key={index}
            src={member.image}
            alt={member.name}
            w="100%"
            h={{ base: "auto", lg: "466px" }}
            objectFit="cover"
          />
        ))}
      </Grid>
    </Box>
  );
};

export default TeamShowcase;
