import React, { useRef, useEffect } from "react";
import { Box, Image, Heading, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const portfolioCards = [
  {
    id: 1,
    title: "Almassa",
    description:
      "A dynamic corporate website built for Almassa to establish a strong online presence. We focused on sleek visuals and interactive sections to enhance user engagement and highlight their innovation-driven services.",
    image: "/almassa.png",
    navigateTo: "/almassa",
  },
  {
    id: 2,
    title: "MedExpress",
    description:
      "For MedExpress, we designed a clean, professional platform tailored to the healthcare industry. The website emphasizes clarity, functionality, and easy navigation to support patients onboarding and medical service outreach.",
    image: "/medexpress.png",
    navigateTo: "/medexpress",
  },
  {
    id: 3,
    title: "JazPayments",
    description:
      "We partnered with JazPayments to develop a user-centric platform that simplifies payment solutions. The site features intuitive design and secure integrations, ensuring clients can access services with confidence and ease.",
    image: "/jazzpay.png",
    navigateTo: "/jazpayment",
  },
  {
    id: 4,
    title: "My Retro Jersey",
    description:
      "My Retro Jersey needed a visually engaging eCommerce site to showcase their unique vintage football jerseys. We delivered a bold design with a seamless shopping experience to boost conversions and brand appeal.",
    image: "/myretro.png",
    navigateTo: "/myretrojersey",
  },
  {
    id: 5,
    title: "JP Logistics",
    description:
      "JP Logistics needed a bold, trustworthy digital presence to reflect their global shipping services. We delivered a responsive, information-rich website that builds credibility and makes it easy for users to request quotes and track shipments.",
    image: "/jplogistics.png",
    navigateTo: "/jplogistics",
  },
  {
    id: 6,
    title: "Sora Schools",
    description:
      "We crafted an innovative and student-friendly digital platform for Sora School, focusing on accessibility and interactivity. The design promotes personalized learning journeys while maintaining a clean, modern aesthetic for both students and educators.",
    image: "/soraschools.png",
    navigateTo: "/soraschools",
  },
  {
    id: 7,
    title: "Gemma Foods",
    description:
      "For Gemma Foods, we created a visually rich and appetite-driven design that brings their fresh, chef-crafted meals to life. From product storytelling to seamless order flow, the website delivers both beauty and functionality.",
    image: "/gemmafoods.png",
    navigateTo: "/gemmafoods",
  },
  {
    id: 8,
    title: "Motion Grey",
    description:
      "Motion Grey's website was designed to blend technology and lifestyle. With a sleek, minimal look and a performance-optimized structure, we ensured a smooth shopping experience for their ergonomic furniture and wellness products.",
    image: "/motiongrey.png",
    navigateTo: "/motiongrey",
  },
  {
    id: 9,
    title: "US Technologies 100",
    description:
      "US Technologies 100's platform showcases cutting-edge tech solutions with a focus on user experience. The responsive design highlights their innovative approach while maintaining professional credibility.",
    image: "/ustechnologies.png",
    navigateTo: "/ustechnologies",
  },
  {
    id: 10,
    title: "13 Chauffers",
    description:
      "For 13 Chauffers, we developed an elegant transportation service platform that emphasizes luxury and reliability. The intuitive booking system and clean interface reflect their premium service standards.",
    image: "/13chauffer.png",
    navigateTo: "/chauffers",
  },
  {
    id: 11,
    title: "Targomo",
    description:
      "Targomo's location intelligence platform required a sophisticated yet accessible interface. We delivered a solution that effectively communicates complex spatial data through intuitive visualizations and clear navigation.",
    image: "/targomoo.png",
    navigateTo: "/targomo",
  },
  {
    id: 12,
    title: "The Desntist of SummerLin",
    description:
      "The Dentist of Summerlin provides professional dental care services in Summerlin, Las Vegas, specializing in general, cosmetic, and restorative treatments like teeth whitening, veneers, implants, and Invisalign.",
    image: "/portsummerlin.png",
    navigateTo: "/targomo",
  },
  {
    id: 13,
    title: "The Dentist CEO",
    description:
      "The Dentist CEO is a platform dedicated to helping dental professionals build thriving practices through business coaching, marketing strategies, and leadership development.",
    image: "/portdentistceo.png",
    navigateTo: "/targomo",
  },
  {
    id: 14,
    title: "Dentist Art",
    description:
      "Dentist Art is an innovative platform combining dentistry with artistic craftsmanship, specializing in high-end aesthetic dental solutions like custom veneers, smile design, and digital smile makeovers.",
    image: "/portart.png",
    navigateTo: "/targomo",
  },
  {
    id: 15,
    title: "The Gentle Dentist",
    description:
      "The Gentle Dentist provides compassionate, anxiety-free dental care with a focus on patient comfort and minimally invasive techniques. Specializing in family dentistry, cosmetic procedures, and sedation options, this practice emphasizes a stress-free environment.",
    image: "/portgentle.png",
    navigateTo: "/targomo",
  },
  {
    id: 16,
    title: "Log Cabin Florist",
    description:
      "Log Cabin Florist is a full-service floral design studio offering fresh, handcrafted arrangements for weddings, events, and everyday occasions.Known for their rustic charm and artistic elegance, they specialize in seasonal blooms and custom bouquets.",
    image: "/portlogan.png",
    navigateTo: "/targomo",
  },
  {
    id: 17,
    title: "Flourishing Art",
    description:
      "Flourishing Art is a creative studio specializing in bespoke botanical and nature-inspired artwork, offering original paintings, prints, and commissioned pieces that celebrate the beauty of flora and organic forms.",
    image: "/portflorishart.png",
    navigateTo: "/targomo",
  },
  {
    id: 18,
    title: "Dentist Sonrisas",
    description:
      "Sonrisas Dental is a modern dental practice offering personalized, patient-centered care with a focus on comfort, advanced technology, and comprehensive services from preventive dentistry to cosmetic smile transformations.",
    image: "/portsonrisas.png",
    navigateTo: "/targomo",
  },
  {
    id: 19,
    title: "One of a Kind Designs",
    description:
      "One of a Kind Designs is a Bakersfield-based creative studio specializing in custom signage, vehicle wraps, and branded merchandise, offering businesses and individuals eye-catching solutions to stand out.",
    image: "/portbaker.png",
    navigateTo: "/targomo",
  },
  {
    id: 20,
    title: "Chase Flower Shop",
    description:
      "Chase Flower Shop is a boutique floral studio crafting fresh, hand-arranged blooms for weddings, events, and everyday occasions, blending timeless elegance with modern design.",
    image: "/portchase.png",
    navigateTo: "/targomo",
  },
];

function Portfolio() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });

  const headerControls = useAnimation();
  const cardsControls = useAnimation();

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
  }, [headerInView, headerControls]);

  useEffect(() => {
    if (cardsInView) {
      cardsControls.start("visible");
    }
  }, [cardsInView, cardsControls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box width="100%" minHeight="100vh" bg="white">
      {/* Animated Header Section */}
      <Box position="relative" width="100%" ref={headerRef}>
        <MotionImage
          src="/portfolioBanner.png"
          width="100%"
          height={{ base: "300px", md: "450px", lg: "543px" }}
          objectFit="cover"
          alt="Portfolio Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <MotionHeading
          textAlign="center"
          zIndex="1"
          position="absolute"
          top="45%"
          left="43%"
          transform="translate(-50%, -50%)"
          fontSize={{ base: "28px", md: "42px", lg: "64px" }}
          color="white"
          textShadow="0 2px 4px rgba(0,0,0,0.5)"
          initial="hidden"
          animate={headerControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              },
            },
          }}
        >
          Portfolio
        </MotionHeading>
      </Box>

      {/* Animated Cards Section */}
      <Box
        width="100%"
        padding={{ base: "40px 20px", md: "80px", lg: "100px" }}
      >
        <Container maxW="container.xxl" px={{ base: 4, md: 6, lg: 8 }}>
          <MotionBox
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={{ base: "24px", md: "32px", lg: "40px" }}
            ref={cardsRef}
            initial="hidden"
            animate={cardsControls}
            variants={containerVariants}
          >
            {portfolioCards.map((card) => (
              <MotionBox
                key={card.id}
                width="100%"
                height="100%"
                minHeight={{ base: "auto", md: "680px" }}
                borderRadius="xl"
                position="relative"
                p={{ base: 4, md: 6 }}
                bg="#F8F8F8"
                border="1px solid"
                borderColor="gray.100"
                overflow="hidden"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                  transition: {
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                cursor="pointer"
                onClick={() => card.navigateTo && navigate(card.navigateTo)}
              >
                <MotionBox
                  width="100%"
                  height={{ base: "250px", md: "350px", lg: "400px" }}
                  mb={{ base: 4, md: 6 }}
                  borderRadius="lg"
                  overflow="hidden"
                  variants={imageVariants}
                >
                  <MotionImage
                    src={card.image}
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    alt={card.title}
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </MotionBox>
                <MotionHeading
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  mb={{ base: 2, md: 3 }}
                  lineHeight="tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {card.title}
                </MotionHeading>
                <MotionText
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  fontWeight="normal"
                  color="gray.600"
                  noOfLines={4}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {card.description}
                </MotionText>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}

export default Portfolio;
