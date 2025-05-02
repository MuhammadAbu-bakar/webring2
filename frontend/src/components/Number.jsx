import { Box, Flex, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <Box
      w="100%"
      maxW="1922px"
      px={{ base: "20px", md: "50px", lg: "100px" }}
      py={{ base: "30px", md: "40px", lg: "50px" }}
      mx="auto"
    >
      <Flex
        justify={{ base: "center", md: "space-evenly" }}
        align="center"
        wrap={{ base: "wrap", md: "nowrap" }}
        gap={{ base: "40px", md: "80px", lg: "134px" }}
      >
        {/* Active Users */}
        <StatBox number="1M+" title="Active Users Worldwide" animate={false}>
          <Box mt={1}>
            Delivering seamless digital experiences through cutting-edge web and
            mobile apps.
          </Box>
        </StatBox>

        {/* Rated for Excellence */}
        <StatBox number="4.8/5" title="Rated for Excellence">
          <Box mt={1}>
            Trusted by users and clients for delivering high-quality, reliable
            solutions.
          </Box>
        </StatBox>

        {/* Industries Transformed */}
        <StatBox number="100+" title="Industries Transformed" animate>
          <Box mt={1}>
            We’ve left a mark across 100+ sectors with scalable websites,
            innovative mobile applications and Shopify stores.
          </Box>
        </StatBox>
      </Flex>
    </Box>
  );
};

// Reusable StatBox Component
const StatBox = ({ number, title, children, animate }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const getNumberValue = () => {
    if (number === "1M+") return 1000000;
    if (number === "100+") return 100;
    return 0;
  };

  const getSuffix = () => {
    if (number === "1M+") return "M+";
    if (number === "100+") return "+";
    return "";
  };

  return (
    <Flex
      direction="column"
      align="center"
      w={{ base: "100%", md: "320px" }}
      h="auto"
      textAlign="center"
      ref={ref}
    >
      <Text
        fontFamily="Yantramanav"
        fontWeight="900"
        fontSize={{ base: "40px", md: "50px", lg: "60px" }}
        lineHeight={{ base: "50px", md: "60px", lg: "72px" }}
        color="#FED904"
      >
        {animate && inView ? (
          <CountUp
            end={getNumberValue()}
            duration={2.5}
            formattingFn={(value) =>
              number === "1M+"
                ? `${Math.floor(value / 1000000)}M+`
                : `${value}${getSuffix()}`
            }
          />
        ) : (
          number
        )}
      </Text>

      <Text
        fontFamily="Yantramanav"
        fontWeight="700"
        fontSize={{ base: "20px", md: "22px", lg: "24px" }}
        lineHeight={{ base: "24px", md: "26px", lg: "28.8px" }}
        color="#26241C"
      >
        {title}
      </Text>

      <Text
        fontFamily="Yantramanav"
        fontWeight="400"
        fontSize={{ base: "16px", md: "18px" }}
        lineHeight={{ base: "20px", md: "21.6px" }}
        textAlign="center"
        w={{ base: "100%", md: "320px" }}
      >
        {children}
      </Text>
    </Flex>
  );
};

export default StatsSection;
