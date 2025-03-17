import {
    Box,
    Heading,
    Image,
    Text,
    Container,
    VStack,
    List,
 
} from '@chakra-ui/react'
import React from 'react'
 
function OurMission() {
  return (
    <Box width="100%" height="100%">
                {/* Header Section */}
                <Box position="relative">
                  <Image src="/MissonBanner.png" width="100%" height="543px" objectFit="cover" />
                  <Heading
                    textAlign="center"
                    zIndex="1"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="64px"
                    fontWeight="bold"
                    color="white"
                  >
                    Our Mission
                  </Heading>
                </Box>
   
                {/* Content Section */}
                <Box maxW="1301px" mt={20} mb={90} ml={150} px={4}>
                    {/* Main Title */}
                    <Heading fontSize="60px" fontWeight="bold" textAlign="left" mb={"60px"}>
                        Our Partner
                    </Heading>
   
                    {/* Introductory Text */}
                    <Text fontSize="20px" textAlign="left" mb={10} lineHeight="1.6">
                        At Webring, we are dedicated to providing exceptional value, groundbreaking innovation, and superior customer service to our clients. We aspire to be a trusted partner in their digital transformation journey, ensuring success at every step.
                    </Text>
   
                    {/* Who We Are Section */}
                    <Box mt={10} mb={10}>
                        <Heading fontSize="32px" fontWeight="bold" textAlign="left" mb={7}>
                            Our Story
                        </Heading>
                        <Text fontSize="20px" lineHeight="1.6" mb={5}>
                            Welcome to Webring, your premier partner for innovative digital and business solutions. We take pride in carefully understanding your vision and crafting bespoke strategies to amplify your online presence. Our team specializes in creative staffing, open collaboration, and timely execution to exceed expectations and bring your ideas to fruition.
                        </Text>
                        <Text fontSize="20px" lineHeight="1.6">
                            As your creative partner, we are committed to elevating your brand and taking it to unparalleled heights in the ever-evolving digital landscape. Together, we will transform your vision into a remarkable reality.
                        </Text>
                    </Box>
 
                    {/* Discover the Core of WeBring Section */}
                    <Heading fontSize="32px" fontWeight="bold" textAlign="left" mb={10}>
                        Discover the Core of WeBring
                    </Heading>
   
                    <VStack align="start" spacing={30} gap={7}>
                        <Text fontSize="20px">
                        At Webring, we excel in delivering state-of-the-art digital solutions tailored to diverse industries. Our expertise encompasses:
                        </Text>
                        <Container>
                        <List.Root gap={8}>
                            <List.Item>
                                Custom Web and App Development: Comprehensive solutions for web apps, Android, iOS, and tablet applications.
                            </List.Item>
                            <List.Item>
                                Web Development Services: Building responsive and feature-rich websites.
                            </List.Item>
                            <List.Item>
                                Graphic and UX/UI Design: Crafting visually compelling designs and seamless user experiences.
                            </List.Item>
                            <List.Item>
                                Digital Marketing and Social Media Strategy: Amplifying your brand’s online presence and engagement.
                            </List.Item>
                            <List.Item>
                                Game Design and Development: Delivering immersive gaming experiences.
                            </List.Item>
                            <List.Item>
                                Content Writing Services: Producing captivating and impactful content tailored to your needs.
                            </List.Item>
                        </List.Root>
                        </Container>
                    </VStack>
                </Box>
            </Box>
  )
}
 
export default OurMission;