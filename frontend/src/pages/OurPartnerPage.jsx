import {
    Box,
    Heading,
    Image,
    Flex,
    Text,
    VStack
} from '@chakra-ui/react';
import React from 'react';
 
function OurPartner() {
  return (
    <Box width="100%" height="100%">
        {/* Header Section */}
        <Box position="relative">
            <Image
                src="/PartnerBanner.png"
                width="100%"
                height={{ base: "300px", md: "450px", lg: "543px" }}
                objectFit="cover"
            />
            <Heading
                textAlign="center"
                zIndex="1"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                fontSize={{ base: "28px", md: "48px", lg: "64px" }}
                fontWeight="bold"
                color="white"
            >
                Our Partner
            </Heading>
        </Box>
 
        {/* Content Section */}
        <Box maxW="1720px" mx="auto" mt={10} py={10} px={{ base: 4, md: 6, lg: 10 }}>
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                gap={{ base: 6, md: 10 }}
            >
                {/* Image on Top in Mobile */}
                <Box flexShrink={0} textAlign="center" order={{ base: -1, md: 1 }}>
                    <Image
                        src="/webring.png"
                        alt="Webring Logo"
                        maxW={{ base: "200px", md: "280px", lg: "340px" }}
                        mx="auto"
                    />
                </Box>
 
                {/* Left Content */}
                <VStack align="start" flex={1} spacing={4}>
                    <Text fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.6">
                        At WeBring, we understand that success is built on strong,
                        collaborative relationships. Our carefully chosen partners, ranging
                        from industry leaders to innovative startups, play a key role in
                        helping us deliver superior digital solutions. These strategic
                        alliances provide us with access to cutting-edge technologies and
                        specialized expertise, ensuring that we can offer our clients the
                        most advanced and effective services. By working together with
                        forward-thinking partners, WeBring remains positioned at the
                        forefront of digital innovation, continuously driving value, growth,
                        and long-term success for our clients.
                    </Text>
                </VStack>
            </Flex>
 
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                gap={{ base: 6, md: 10 }}
                mt={20}
            >
                {/* Image on Top in Mobile */}
                <Box flexShrink={0} textAlign="center" order={{ base: -1, md: 0 }}>
                    <Image
                        src="/asture.png"
                        alt="Asture Consulting Logo"
                        maxW={{ base: "200px", md: "280px", lg: "340px" }}
                        mx="auto"
                    />
                </Box>
 
                {/* Right Content */}
                <VStack align="start" flex={1} spacing={4}>
                    <Text fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.6">
                        At WeBring, we are proud to partner with Asture Consulting, bringing
                        together our combined expertise to deliver exceptional, tailored
                        solutions for businesses. This strategic partnership merges our
                        innovative digital transformation services with Asture Consulting’s
                        deep knowledge in IT strategy and business process optimization.
                        Together, we provide comprehensive, results-driven solutions that
                        streamline operations, enhance efficiency, and drive sustainable
                        growth for our clients.
                    </Text>
                </VStack>
            </Flex>
 
            {/* Final Text Section */}
            <Text
                mt={{ base: "50px", md: "100px" }}
                fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                lineHeight="1.6"
                textAlign={{ base: "center", md: "left" }}
            >
                By collaborating with Asture Consulting, we strengthen our ability to address
                complex business challenges with precision and foresight. This partnership
                enables us to deliver advanced, future-focused strategies that not only meet
                current demands but also prepare businesses for success in an ever-evolving
                digital landscape. At WeBring, we are committed to providing our clients with
                the highest level of service, backed by our joint expertise and dedication
                to long-term success.
            </Text>
        </Box>
    </Box>
  );
}
 
export default OurPartner;