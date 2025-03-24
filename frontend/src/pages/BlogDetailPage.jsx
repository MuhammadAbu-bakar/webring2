import { Box, Image, Text, Heading, Stack } from "@chakra-ui/react";

 
const BlogServicesDetail = () => {
  return (
  <>

    <Box maxW={{ base: "100%", lg: "1720px" }} mx="auto" py={{ base: "4", md: "6", lg: "8" }} display="flex" flexDirection="column">
      {/* Main Content Box */}
      <Box width="100%" px={{ base: "4", md: "8", lg: "12" }}>
        {/* Back Button */}
        <Text as="a" href="#" justifyContent={"left"} width={"80px"} fontSize={{ base: "18px", md: "20px", lg: "22px" }} color="black" mb={10} display="block">
          &lt; Back
        </Text>
 
        {/* Image Section */}
        <Box borderRadius="lg" overflow="hidden" mb={10}>
          <Image
            src="/pasted image 0.png" // Replace with actual image
            alt="Website Development"
            objectFit="cover"
            width="100%"
            maxH={{ base: "250px", md: "450px", lg: "710px" }}
          />
        </Box>
 
        {/* Title Section */}
        <Heading as="h1" fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} mb={10}>
          Building Dreams Online
        </Heading>
 
        <Text fontSize={{ base: "18px", md: "20px" }} mb={4}>
          Seamless Web Solutions Services From Pixels To Performance
        </Text>
 
        <Text fontSize={{ base: "18px", md: "20px" }} mb={4}>
          Empower your digital presence with our leading Web Development services. Our top-rated developers craft tailored business websites, e-commerce platforms, and immersive user experiences.
        </Text>
 
        <Text fontSize={{ base: "18px", md: "20px" }} color="black" mb={10}>
          From e-commerce platforms to portfolio websites, we bring your vision to life. Elevate your online brand and engage your audience with captivating and informative websites.
        </Text>
 
        {/* Process Section */}
        <Heading as="h2" fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} mb={10}>
          Our Professional Website Development Services Process
        </Heading>
 
        <Stack spacing={4} gap={4}>
          <Text fontSize={{ base: "18px", md: "20px" }} >
            At WeBring, our website development process takes you from concept to reality. We start by understanding your business needs, designing a captivating interface, and developing a responsive site using the latest technologies.
          </Text>
 
          <Text fontSize={{ base: "18px", md: "20px" }} >
            After usability testing and design refinements, we integrate SEO, launch your site, and provide ongoing support. Our team continuously tracks performance to optimize your online presence.
          </Text>
 
          <Text fontSize={{ base: "18px", md: "20px" }} >
            We’re committed to delivering websites that exceed expectations, representing your brand and connecting with your audience. Contact us today to start your digital journey!
          </Text>
        </Stack>
      </Box>
    </Box>
    </>
  );
};
 
export default BlogServicesDetail;